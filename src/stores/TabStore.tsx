import { observable, action } from "mobx";

export enum Tab {
    HOME = 0,
    SERVICES,
    CAREER,
    PRODUCTIONS,
    SKILLS,
    CONTACT
}

export type TabKeys = keyof typeof Tab;

class TabStore {

    @observable selectedtab: Tab = Tab.HOME;

    @action selectTab(newTab: Tab): void {
        this.selectedtab = newTab;
    }

    @action goNextTab(): void {
        switch (this.selectedtab) {
            case Tab.HOME:
                this.selectedtab = Tab.SERVICES;
                break;
            case Tab.SERVICES:
                this.selectedtab = Tab.CAREER;
                break;
            case Tab.CAREER:
                this.selectedtab = Tab.PRODUCTIONS;
                break;
            case Tab.PRODUCTIONS:
                this.selectedtab = Tab.SKILLS;
                break;
            case Tab.SKILLS:
                this.selectedtab = Tab.CONTACT;
                break;
            default:
                break;
        }
    }

    @action goPreviousTab(): void {
        switch (this.selectedtab) {
            case Tab.SERVICES:
                this.selectedtab = Tab.HOME;
                break;
            case Tab.CAREER:
                this.selectedtab = Tab.SERVICES;
                break;
            case Tab.PRODUCTIONS:
                this.selectedtab = Tab.CAREER;
                break;
            case Tab.SKILLS:
                this.selectedtab = Tab.PRODUCTIONS;
                break;
            case Tab.CONTACT:
                this.selectedtab = Tab.SKILLS;
                break;
            default:
                break;
        }
    }

    getTabComponent(): JSX.Element {
        switch (this.selectedtab) {
            case Tab.HOME:
                return <span>HOME</span>;
            case Tab.SERVICES:
                return <span>SERVICES</span>;
            case Tab.CAREER:
                return <span>CAREER</span>;
            case Tab.PRODUCTIONS:
                return <span>PRODUCTIONS</span>;
            case Tab.SKILLS:
                return <span>SKILLS</span>;
            case Tab.CONTACT:
                return <span>CONTACT</span>;
            default:
                return <></>;
        }
    }
}

export default TabStore;