import { observable, action, reaction } from "mobx";
import { MOBILE_BREAKPOINT, SHELL_PADDING } from "../utils/globals";

class ResponsiveStore {
    @observable isMobile: boolean | undefined = undefined;
    @observable shellHeight = 0;
    @observable shellWidth = 0;

    constructor() {
        this.updateResponsive();
        this.computeShellDimensions();
    }

    @action computeShellDimensions(): void {
        this.shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);
        this.shellWidth = document.documentElement.clientWidth - (SHELL_PADDING * 2);
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