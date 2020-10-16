import React, { CSSProperties, useCallback, useEffect, useLayoutEffect, useState }  from "react";
import { Tab } from "../../stores/TabStore";
import useStores from "../../stores";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import clsx from "clsx";
import { ProductionsGridItem } from "./ProductionsGridItem";
import { ProductionsDetails } from "./ProductionsDetails";
import { observer } from "mobx-react-lite";

type RecoverStyle = {
    [key: string]: CSSProperties;
}

const RECOVER_OVERFLOW = 50;

const Productions = observer((): JSX.Element => {
    const { responsiveStore, tabStore, localeStore } = useStores();
    const appKeys = localeStore.keys;
    const [recover, setRecover] = useState<boolean>(false);
    const [recoverStyle, setRecoverStyle] = useState<RecoverStyle | null>(null);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const getRecoverStyle = useCallback(() => {
        setRecoverStyle({
            cover: {
                height: recover ? responsiveStore.shellHeight + RECOVER_OVERFLOW : 0
            },
            coverContent: {
                height: responsiveStore.shellHeight + RECOVER_OVERFLOW
            },
            detailsContainer: {
                width: responsiveStore.shellWidth / 2
            }
        })
    }, [recover, responsiveStore]);

    useLayoutEffect(() => {
        getRecoverStyle();
        window.addEventListener("resize", () => getRecoverStyle());

        return () => window.removeEventListener("resize", () => getRecoverStyle());
    }, [getRecoverStyle, recover]);

    useEffect(() => {
        if (tabStore.selectedtab === Tab.PRODUCTIONS) {
            setRecover(true);
        } else {
            setRecover(false);
        }
    }, [tabStore.selectedtab, setRecover])

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
                                    <ProductionsGridItem
                                        onSelectItem={handleSelectItem}
                                        selectedItem={selectedItem === 1}
                                    />
                                    <ProductionsGridItem
                                        onSelectItem={handleSelectItem}
                                        selectedItem={selectedItem === 1}
                                    />
                                    <ProductionsGridItem
                                        onSelectItem={handleSelectItem}
                                        selectedItem={selectedItem === 1}
                                    />
                                    <ProductionsGridItem
                                        onSelectItem={handleSelectItem}
                                        selectedItem={selectedItem === 1}
                                    />
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
                            <ProductionsDetails
                                title="Infinite Square"
                                startDate="Septembre 2018"
                                endDate="En cours"
                                presentation="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                missions="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                skills={["Webpack", "React", "HTML"]}
                                logo="/img/infinite-square_texte.png"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
});

export default Productions;