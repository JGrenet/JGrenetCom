import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import Logo from "../logo/Logo";

const MobileShell = observer((): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleToggleMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [setIsMenuOpen, isMenuOpen])

    return (
        <div className="mobileShell mobile-content-container">
            <Logo size={40} wordMark variant="white" className="mobile-content-container_logo" />
            <img
                src="./icon/menu.svg"
                className="mobile-content-container_menu"
                alt="menu"
                onClick={handleToggleMenu}
            />
            {isMenuOpen && (
                <div className="mobileShell_mobileMenu mobile-content-container">
                     <Logo size={40} wordMark variant="dark" className="mobile-content-container_logo" />
                    <img
                        src="./icon/cancel.svg"
                        className="mobile-content-container_menu"
                        alt="menu"
                        onClick={handleToggleMenu}
                    />
                </div>
            )}
        </div>
    )
});

export default MobileShell;