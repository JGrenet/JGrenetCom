import { observable, action } from "mobx";
import { MOBILE_BREAKPOINT } from "../utils/globals";

class ResponsiveStore {
    @observable isMobile: boolean | undefined = undefined;

    constructor() {
        this.updateResponsive();
    }
 
    @action updateResponsive(): void  {
        if (document.documentElement.clientWidth <= MOBILE_BREAKPOINT && !this.isMobile) {
            this.isMobile = true;
        } else if (document.documentElement.clientWidth > MOBILE_BREAKPOINT && this.isMobile) {
            this.isMobile = false;
        }
    }
}

export default ResponsiveStore;