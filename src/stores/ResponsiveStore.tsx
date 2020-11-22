import { observable, action } from "mobx";
import { GLOBAL_SHELL_PADDING, MOBILE_BREAKPOINT } from "../utils/globals";

class ResponsiveStore {
    @observable isMobile: boolean | undefined = undefined;
    @observable shellHeight = 0;
    @observable shellWidth = 0;
    @observable shellPadding = 0;
    @observable backgroundColor: "black" | "white" = "black";

    constructor() {
        this.updateResponsive();
        this.computeShellDimensions();
    }

    @action computeShellDimensions(): void {
        const documentWidth = document.documentElement.clientWidth;
        const documentHeight = document.documentElement.clientHeight;

        this.shellPadding = documentHeight <= 750 ? 50 : (documentWidth <= 1000 ? 50 : 100);
        this.shellHeight = document.documentElement.clientHeight - (GLOBAL_SHELL_PADDING * 2);
        this.shellWidth = documentWidth - (this.shellPadding * 2);
    }
 
    @action updateResponsive(): void  {
        if (document.documentElement.clientWidth <= MOBILE_BREAKPOINT && !this.isMobile) {
            this.isMobile = true;
        } else if (document.documentElement.clientWidth > MOBILE_BREAKPOINT && this.isMobile) {
            this.isMobile = false;
        }
    }

    @action updateBackgroundColor(color: "black" | "white"): void {
        if (this.isMobile) {
            this.backgroundColor = color;
        }
    }
}

export default ResponsiveStore;