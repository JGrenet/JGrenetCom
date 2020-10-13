import React, { CSSProperties, useCallback, useEffect, useLayoutEffect, useState }  from "react";
import { Tab } from "../../stores/TabStore";
import useStores from "../../stores";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import { SHELL_PADDING } from "../../utils/globals";
import clsx from "clsx";

type RecoverStyle = {
    [key: string]: CSSProperties;
}

const Productions = (): JSX.Element => {
    const { responsiveStore, tabStore, localeStore } = useStores();
    const appKeys = localeStore.keys;
    const [recover, setRecover] = useState<boolean>(false);
    const [recoverStyle, setRecoverStyle] = useState<RecoverStyle | null>(null);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const getRecoverStyle = useCallback(() => {
        const shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);
        const shellWidth = document.documentElement.clientWidth - (SHELL_PADDING * 2);

        setRecoverStyle({
            cover: {
                height: recover ? shellHeight + 50 : 0
            },
            coverContent: {
                height: shellHeight + 50
            },
            detailsContainer: {
                width: shellWidth / 2
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
    }, []);

    const handleSelectItem = useCallback(() => {
        if (selectedItem) {
            setSelectedItem(null);
        } else {
            setSelectedItem(1);
        }
    }, [setSelectedItem, selectedItem]);

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
                <div
                    className="productions_recover productions_recover"
                    style={recoverStyle.cover}
                    onWheel={handleScroll}
                >
                    <div
                        className="productions_recover__content recover"
                        style={recoverStyle.coverContent}
                    >
                        <div className="shell_logo stroke-hidder dark recover-logo">
                            <Logo size={60} wordMark variant="dark"/>
                        </div>
                        <NavBar variant="dark"/>
                        <div className="recover-content">
                            <div className="recover-content_container">
                                <div className="recover-content_container__grid productions-grid">
                                    <div
                                        className={clsx(
                                            "productions-grid_item",
                                            {["productions-grid_item--selected"]: selectedItem === 1}
                                        )}
                                        onClick={handleSelectItem}
                                    >
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
                    <div
                        className={clsx(
                            "productions_recover__productions-details",
                            {["productions_recover__productions-details--open"]: selectedItem}
                        )}
                        style={recoverStyle.coverContent}
                    >
                        <div
                            className="productions_recover__productions-details___container"
                            style={recoverStyle.detailsContainer}
                        >
                            <img
                                src="./icon/cancel.svg"
                                className="productions_recover__productions-details___container____close"
                                alt="menu"
                                onClick={handleSelectItem}
                            />
                            <div className="productions-details">
                                <div className="productions-details_meta">
                                    <div className="productions-details_meta__infos">
                                        <span className="productions-details_meta__infos___title">
                                            Infinite Square
                                        </span>
                                        <span className="productions-details_meta__infos___date">
                                            Septembre 2018 - En cours
                                        </span>
                                    </div>
                                    <img src="/img/infinite-square_texte.png" alt="productions_logo" />
                                </div>
                                <div className="productions-details_section productions-details_section__presentation">
                                    <span className="productions-details_section__title">
                                        PRESENTATION
                                    </span>
                                    <p className="productions-details_section__content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="productions-details_section">
                                    <span className="productions-details_section__title">
                                        MISSIONS
                                    </span>
                                    <p className="productions-details_section__content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="productions-details_section">
                                    <span className="productions-details_section__title">
                                        COMPETENCES
                                    </span>
                                    <div className="productions-details_section__skills-list skills-list">
                                        <div className="skills-list_item">Webpack</div>
                                        <div className="skills-list_item">React</div>
                                        <div className="skills-list_item">Html</div>
                                    </div>
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