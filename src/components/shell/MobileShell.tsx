import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import Logo from "../logo/Logo";
import MobileNavbar from "../mobile-navbar/MobileNavbar";
import LanguageSelector from "../language-selector/LanguageSelector";
import Home from "../home/Home";
import Services from "../services/Services";
import Career from "../career/Career";
import Productions from "../productions/Productions";
import useStores from "../../stores";
import clsx from "clsx";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import { Tab } from "../../stores/TabStore";

const MobileShell = observer((): JSX.Element => {
    const { responsiveStore, tabStore } = useStores();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleToggleMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [setIsMenuOpen, isMenuOpen]);
    
    const handleRedirectToHomeTab = useCallback(() => {
        tabStore.selectTab(Tab.HOME, responsiveStore.isMobile);
    }, [tabStore, responsiveStore]);

    return (
        <div className={clsx(
                "mobileShell",
                {["mobileShell--white"]: responsiveStore.backgroundColor === "white"}
            )}
        >
            <div
                className={clsx(
                    "mobileShell_header",
                    {["mobileShell_header--white"]: responsiveStore.backgroundColor === "white"}
                )}
            >
                <Logo
                    size={40}
                    wordMark
                    variant={responsiveStore.backgroundColor === "white" ? "dark" : "white"}
                    className="mobileShell_header__logo"
                    onClick={handleRedirectToHomeTab}
                />
                <img
                    src="./icon/menu.svg"
                    className={clsx(
                        "icon",
                        {["icon--black"]: responsiveStore.backgroundColor === "white"}
                    )}
                    alt="menu"
                    onClick={handleToggleMenu}
                />
            </div>
            {isMenuOpen && (
                <div className="mobileShell_mobileMenu">
                    <div className="mobileShell_header mobileShell_header--open"
                    >
                        <Logo
                            size={40}
                            wordMark
                            variant="dark"
                            className="mobileShell_header__logo"
                        />
                        <img
                            src="./icon/cancel.svg"
                            className={"icon"}
                            alt="menu"
                            onClick={handleToggleMenu}
                        />
                    </div>
                    <MobileNavbar closeMenu={handleToggleMenu} />
                    <LanguageSelector
                        variant="dark"
                        className="mobileShell_mobileMenu__language-selector"
                    />
                </div>
            )}
            <Home />
            <Services />
            <Career />
            <Productions />
            <Skills />
            <Contact />
        </div>
    )
});

export default MobileShell;