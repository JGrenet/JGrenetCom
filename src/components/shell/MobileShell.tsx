import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import Logo from "../logo/Logo";

const MobileShell = observer((): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleToggleMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [setIsMenuOpen, isMenuOpen])

    return (
        <div className="mobileShell">
            <div className="mobileShell_header">
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
                    <div className="mobileShell_header">
                        <Logo size={40} wordMark variant="dark" className="mobileShell_header__logo" />
                        <img
                            src="./icon/cancel.svg"
                            className="icon"
                            alt="menu"
                            onClick={handleToggleMenu}
                        />
                    </div>
                </div>
            )}
        </div>
    )
});

export default MobileShell;