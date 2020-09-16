import { observable, action } from "mobx";
import { storageAvailable } from "../utils/function";

class LocaleStore  {
 
    @observable locale: string;

    constructor() {
        if (storageAvailable()) {
            const locale = localStorage.getItem('locale');
            this.locale = locale || "fr";
        } else {
            this.locale = "fr";
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