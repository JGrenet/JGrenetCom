import React, { CSSProperties, useCallback, useLayoutEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../button/Button";
import LanguageSelector from "../language-selector/LanguageSelector";
import NavBar from "../navbar/NavBar";
import useStores from "../../stores";
import { observer } from "mobx-react-lite";
import Logo from "../logo/Logo";
import Routes from "../routes";
import { Tab } from "../../stores/TabStore";

type ShellStyle = {
    [key: string]: CSSProperties;
}

const DesktopShell = observer((): JSX.Element => {
    const { localeStore, tabStore, responsiveStore } = useStores();
    const appKeys= localeStore.keys;
    const [shellStyle, setShellStyle] = useState<ShellStyle | null>(null);

    const getShellStyle = useCallback(() => {
        const shellBorderWidth = (responsiveStore.shellWidth * 2) + (responsiveStore.shellHeight * 2);

        const getRectWidth = (): number => {
            const getHalfWidth = (): number => {
                if (responsiveStore.shellWidth <= 1200) {
                    return responsiveStore.shellWidth;
                }
                else if (responsiveStore.shellWidth <= 1400) {
                    return (responsiveStore.shellWidth * 0.6) - 15;
                } 
                return (responsiveStore.shellWidth / 2) - 15;
            }

            return tabStore.selectedtab === Tab.SERVICES ? 
                getHalfWidth() : responsiveStore.shellWidth;
        }

        setShellStyle({
            shell: {
                width: responsiveStore.shellWidth,
                height: responsiveStore.shellHeight
            },
            rect: {
                strokeDasharray: shellBorderWidth,
                strokeDashoffset: shellBorderWidth,
                width: getRectWidth()
            },
            
        })
    }, [
        setShellStyle,
        tabStore.selectedtab,
        responsiveStore
    ]);

    useLayoutEffect(() => {
        getShellStyle();
        window.addEventListener("resize", () => getShellStyle());

        return () => window.removeEventListener("resize", () => getShellStyle());
    }, [getShellStyle]);

    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

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
                <LanguageSelector />
            </div>
            <div className="shell_contact-btn stroke-hidder">
                <Button label={appKeys["ACTION_CONTACT_ME"]} />
            </div>
            <NavBar variant="white" />
        </div>
    );
});

export default DesktopShell;