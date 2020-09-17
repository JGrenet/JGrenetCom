import { observable, action, autorun } from "mobx";
import { storageAvailable } from "../utils/function";

export type Locale = {
    code: string;
    label: string;
}

export const locales: Locale[] = [
    {
        code: "fr",
        label: ""
    },
    {
        code: "en",
        label: ""
    }
]

class LocaleStore  {
 
    @observable locale: string;

    constructor() {
        if (storageAvailable()) {
            const locale = localStorage.getItem('locale');
            this.locale = locale || locales[0].code;
        } else {
            this.locale = locales[0].code;
        }
        autorun(() => this.loadKeys)
    }

    @action private loadKeys = () => {
        if (this.locale) {
            // read and load JSON file in associated file
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