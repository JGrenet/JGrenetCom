import React, { CSSProperties, useCallback, useLayoutEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { SHELL_PADDING } from "../../utils/globals";
import Button from "../button/Button";
import LanguageSelector from "../language-selector/LanguageSelector";
import NavBar from "../navbar/NavBar";
import useStores from "../../stores";
import { observer } from "mobx-react-lite";
import Logo from "../logo/Logo";
import clsx from "clsx";
import Routes from "../routes";
import { Tab } from "../../stores/TabStore";

type ShellStyle = {
    [key: string]: CSSProperties;
}

const DesktopShell = observer((): JSX.Element => {
    const { localeStore, tabStore } = useStores();
    const appKeys= localeStore.keys;
    const [shellStyle, setShellStyle] = useState<ShellStyle | null>(null);
    // == Experimental
    const [recover, setRecover] = useState(false);
    // ==

    const getShellStyle = useCallback(() => {
        const shellWidth = document.documentElement.clientWidth - (SHELL_PADDING * 2);
        const shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);
        const shellBorderWidth = (shellWidth * 2) + (shellHeight * 2);

        const getRectWidth = (): number => {
            const getHalfWidth = (): number => {
                if (shellWidth <= 1200) {
                    return shellWidth;
                }
                else if (shellWidth <= 1400) {
                    return (shellWidth * 0.6) - 15;
                } 
                return (shellWidth / 2) - 15;
            }

            return tabStore.selectedtab === Tab.SERVICES ? 
                getHalfWidth() : shellWidth;
        }

        setShellStyle({
            shell: {
                width: shellWidth,
                height: shellHeight
            },
            rect: {
                strokeDasharray: shellBorderWidth,
                strokeDashoffset: shellBorderWidth,
                width: getRectWidth()
            },
            cover: {
                height: recover ? 0 : shellHeight + 50
            },
            coverContent: {
                height: shellHeight + 50
            }
        })
    }, [setShellStyle, recover, tabStore.selectedtab]);

    useLayoutEffect(() => {
        getShellStyle();
        window.addEventListener("resize", () => getShellStyle());

        return () => window.removeEventListener("resize", () => getShellStyle());
    }, [getShellStyle]);

    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

    // == Experimental

    const handleRecover = useCallback(() => {
        setRecover(!recover);
    }, [recover, setRecover]);
    // ==

    if (!shellStyle) return <></>;

    return (
        <div className="shell" style={shellStyle.shell}>
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
                            x="0"
                            y="0"
                            style={shellStyle.rect}
                        />
                    </svg>
                    <Routes />
                </>
            </CSSTransition>
            <div className="shell_logo stroke-hidder">
                <Logo size={60} wordMark variant="white" />
            </div>
            <div className="shell_language stroke-hidder">
                <button onClick={handleRecover}>COVER</button>
                <LanguageSelector />
            </div>
            <div className="shell_contact-btn stroke-hidder">
                <Button label={appKeys["ACTION_CONTACT_ME"]} />
            </div>
            <NavBar variant="white" />
            {/* <div className={clsx("shell_recover", {["open"]: recover})} style={shellStyle.cover}>
                <div className="shell_recover__content recover" style={shellStyle.coverContent}>
                    <div className="recover_border" />
                    <div className="shell_logo stroke-hidder dark">
                        <Logo size={60} wordMark variant="dark"/>
                    </div>
                    <NavBar variant="dark"/>
                </div>
            </div> */}
        </div>
    );
});

export default DesktopShell;