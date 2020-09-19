import { observable, action, runInAction, reaction } from "mobx";
import { storageAvailable } from "../utils/function";

export type Locale = {
    code: string;
    label: string;
}

export const locales: Locale[] = [
    {
        code: "fr",
        label: "LOCALE_FR"
    },
    {
        code: "en",
        label: "LOCALE_EN"
    }
]

class LocaleStore  {
 
    @observable locale: string;
    @observable keys: {[key: string]: string};

    constructor() {
        if (storageAvailable()) {
            const locale = localStorage.getItem('locale');
            this.locale = locale || locales[0].code;
        } else {
            this.locale = locales[0].code;
        }
        this.keys = {};
        reaction(() => this.locale, () => this.loadKeys() ,{fireImmediately: true})
    }

    @action private loadKeys = async () => {
        if (this.locale) {
            const response = await fetch(`res/${this.locale}.json`);
            const keys = await response.text();
            if (keys) {
                runInAction(() => {
                    this.keys = JSON.parse(keys);
                })
            }
        }
    }
 
    @action updateLocale(localeCode:  string): void  {
        this.locale = localeCode;
        if (storageAvailable()) {
            localStorage.setItem('locale', localeCode);
        }
    }
}

export default LocaleStore;