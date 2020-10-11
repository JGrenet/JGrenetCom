import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import Logo from "../logo/Logo";
import MobileNavbar from "../mobile-navbar/MobileNavbar";
import LanguageSelector from "../language-selector/LanguageSelector";
import Home from "../home/Home";
import Services from "../services/Services";
import Career from "../career/Career";

const MobileShell = observer((): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleToggleMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [setIsMenuOpen, isMenuOpen])

    return (
        <div className="mobileShell">
            <div
                className={"mobileShell_header"}
            >
                <Logo size={40} wordMark variant="white" className="mobileShell_header__logo" />
                <img
                    src="./icon/menu.svg"
                    className="icon"
                    alt="menu"
                    onClick={handleToggleMenu}
                />
            </div>
            {isMenuOpen && (
                <div className="mobileShell_mobileMenu">
                    <div className="mobileShell_header mobileShell_header--open">
                        <Logo
                            size={40}
                            wordMark
                            variant="dark"
                            className="mobileShell_header__logo"
                        />
                        <img
                            src="./icon/cancel.svg"
                            className="icon"
                            alt="menu"
                            onClick={handleToggleMenu}
                        />
                    </div>
                    <MobileNavbar />
                    <LanguageSelector
                        variant="dark"
                        className="mobileShell_mobileMenu__language-selector"
                    />
                </div>
            )}
            <Home />
            <Services />
            <Career />
        </div>
    )
});

export default MobileShell;