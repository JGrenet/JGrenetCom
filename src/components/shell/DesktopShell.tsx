import React, { useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../button/Button";
import LanguageSelector from "../language-selector/LanguageSelector";
import NavBar from "../navbar/NavBar";
import useStores from "../../stores";
import { observer } from "mobx-react-lite";
import Logo from "../logo/Logo";
import Routes from "../routes";
import { Tab } from "../../stores/TabStore";
import clsx from "clsx";

const DesktopShell = observer((): JSX.Element => {
    const { localeStore, tabStore } = useStores();
    const appKeys= localeStore.keys;

    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

    const handleRedirectToContactTab = useCallback(() => {
        tabStore.selectTab(Tab.CONTACT);
    }, [tabStore]);

    const handleRedirectToHomeTab = useCallback(() => {
        tabStore.selectTab(Tab.HOME);
    }, [tabStore]);

    const handleDownloadCV = useCallback(() => {
        window.open(`/files/CV-jeremy-grenet-${localeStore.locale}.pdf`, "_blank");
    }, [localeStore.locale]);

    return (
        <div className="shell">
            <CSSTransition
                addEndListener={handleAddEnd}
                classNames='animation-stroke'
                appear
                in
                timeout={1500}
            >
                <>
                    <svg>
                        <rect
                            className={clsx(
                                "shell-border",
                                tabStore.selectedtab === Tab.SERVICES && "shell-border--services",
                            )}
                            x="0"
                            y="0"
                        />
                    </svg>
                    <Routes />
                </>
            </CSSTransition>
            <div className="shell_logo stroke-hidder" onClick={handleRedirectToHomeTab}>
                <Logo size={60} wordMark variant="white" />
            </div>
            <div className="shell_language stroke-hidder">
                <LanguageSelector />
            </div>
            <div className="shell_contact-btn stroke-hidder">
                {tabStore.selectedtab !== Tab.CONTACT && (
                    <Button label={appKeys["ACTION_CONTACT_ME"]} onClick={handleRedirectToContactTab} />
                )}
                {tabStore.selectedtab === Tab.CONTACT && (
                    <Button label={appKeys["ACTION_DOWNLOAD_CV"]} onClick={handleDownloadCV} />
                )}
            </div>
            <NavBar variant="white" />
        </div>
    );
});

export default DesktopShell;