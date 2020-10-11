import React, { CSSProperties, useCallback, useEffect, useLayoutEffect, useState }  from "react";
import { Tab } from "../../stores/TabStore";
import useStores from "../../stores";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import { SHELL_PADDING } from "../../utils/globals";

type RecoverStyle = {
    [key: string]: CSSProperties;
}

const Productions = (): JSX.Element => {
    const { responsiveStore, tabStore, localeStore } = useStores();
    const appKeys = localeStore.keys;
    const [recover, setRecover] = useState<boolean>(false);
    const [recoverStyle, setRecoverStyle] = useState<RecoverStyle | null>(null);

    const getRecoverStyle = useCallback(() => {
        const shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);

        setRecoverStyle({
            cover: {
                height: recover ? shellHeight + 50 : 0
            },
            coverContent: {
                height: shellHeight + 50
            }
        })
    }, [recover]);

    useEffect(() => {
        if (tabStore.selectedtab === Tab.PRODUCTIONS) {
            setRecover(true);
        } else {
            setRecover(false);
        }
    }, [tabStore.selectedtab, setRecover])

    useLayoutEffect(() => {
        getRecoverStyle();
        window.addEventListener("resize", () => getRecoverStyle());

        return () => window.removeEventListener("resize", () => getRecoverStyle());
    }, [getRecoverStyle, recover]);

    const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        event.stopPropagation();
    }, [])

    if (!recoverStyle) return <></>;

    return (
        <div className="productions tab-content">
            <div className="productions_content">
                <div className="productions_content__description">
                    <h2>{appKeys["PRODUCTIONS_TAB_TITLE"]}</h2>
                    <p>{appKeys["PRODUCTIONS_TAB_CONTENT"]}</p>
                </div>
            </div>
            {!responsiveStore.isMobile && (
                <div className="productions_recover" style={recoverStyle.cover} onWheel={handleScroll}>
                    <div className="productions_recover__content recover" style={recoverStyle.coverContent}>
                        <div className="recover_border" />
                        <div className="shell_logo stroke-hidder dark">
                            <Logo size={60} wordMark variant="dark"/>
                        </div>
                        <NavBar variant="dark"/>
                        <div className="recover-content">
                            <div className="recover-content_container">
                                <div className="recover-content_container__grid productions-grid">
                                    <div className="productions-grid_item">
                                        <div className="productions-grid_item__logo"></div>
                                    </div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                    <div className="productions-grid_item"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Productions;