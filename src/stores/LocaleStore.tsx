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
        reaction(() => this.locale, () => this.loadKeys)
    }

    @action private loadKeys = async () => {
        if (this.locale) {
            const keys = await import(`../res/${this.locale}.json`);
            if (keys) {
                runInAction(() => {
                    this.keys = keys;
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