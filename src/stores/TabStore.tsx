import React from "react";
import { observable, action } from "mobx";
import Home from "../components/home/Home";
import Services from "../components/services/Services";
import Career from "../components/career/Career";
import Productions from "../components/productions/Productions";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";

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

    scrollTo(hash: string): void {
        location.hash = "#" + hash;
    }

    @action selectTab(newTab: Tab, isMobile = false): void {
        this.selectedtab = newTab;
        if (isMobile) {
            switch (this.selectedtab) {
                case Tab.HOME:
                    this.scrollTo("home");
                    break;
                case Tab.SERVICES:
                    this.scrollTo("services");
                    break;
                case Tab.CAREER:
                    this.scrollTo("career");
                    break;
                case Tab.PRODUCTIONS:
                    this.scrollTo("productions");
                    break;
                case Tab.SKILLS:
                    this.scrollTo("skills");
                    break;
                case Tab.CONTACT:
                    this.scrollTo("contact");
                    break;
                default:
                    break;
            }
        }
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
                return <Home />
            case Tab.SERVICES:
                return <Services />
            case Tab.CAREER:
                return <Career />
            case Tab.PRODUCTIONS:
                return <Productions />
            case Tab.SKILLS:
                return <Skills />
            case Tab.CONTACT:
                return <Contact />
            default:
                return <></>;
        }
    }
}

export default TabStore;