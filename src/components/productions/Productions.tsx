import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState }  from "react";
import { Tab } from "../../stores/TabStore";
import useStores from "../../stores";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import clsx from "clsx";
import { ProductionsGridItem } from "./ProductionsGridItem";
import { ProductionsDetails } from "./ProductionsDetails";
import { observer } from "mobx-react-lite";
import { Production, productions_list } from "./productions_list";

const Productions = observer((): JSX.Element => {
    const { responsiveStore, tabStore, localeStore } = useStores();
    const appKeys = localeStore.keys;
    const [recover, setRecover] = useState<boolean>(false);
    const [isRecoverOpen, setIsRecoverOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const productionsRef = useRef<HTMLDivElement >(null);

    const openRecover = useCallback(() => {
        setIsRecoverOpen(true);
    }, [setIsRecoverOpen]);

    const closeRecover = useCallback(() => {
        setIsRecoverOpen(false);
    }, [setIsRecoverOpen])

    const handleProductionsScroll = useCallback(() => {
        if (productionsRef.current) {
            const offset = productionsRef.current?.offsetTop - window.scrollY;
            if (offset <= 400 && offset >= 0 && responsiveStore.backgroundColor === "black") {
                responsiveStore.updateBackgroundColor("white");
            } else if (responsiveStore.backgroundColor === "white" && offset > 400) {
                responsiveStore.updateBackgroundColor("black");
            }
        }
    }, [productionsRef, responsiveStore]);

    useLayoutEffect(() => {
        window.addEventListener("scroll", handleProductionsScroll);

        return () => window.removeEventListener("scroll", handleProductionsScroll);
    }, [handleProductionsScroll]);

    useEffect(() => {
        if (tabStore.selectedtab === Tab.PRODUCTIONS) {
            setTimeout(() => {
                setRecover(true);
            }, 100);
        } else {
            setRecover(false);
        }
    }, [tabStore.selectedtab, setRecover])

    const handleRecoverScroll = useCallback((event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        event.stopPropagation();
    }, []);

    const handleSelectItem = useCallback((event: React.MouseEvent<HTMLImageElement, MouseEvent>, itemIndex?: number) => {
        if (itemIndex === undefined || (itemIndex === selectedItem && isRecoverOpen === true)) {
            closeRecover();
            if (responsiveStore.isMobile) {
                document.getElementsByTagName('body')[0].classList.remove("stop-scrolling");
            }
        } else if (itemIndex !== undefined) {
            setSelectedItem(itemIndex);
            openRecover();
            if (responsiveStore.isMobile) {
                document.getElementsByTagName('body')[0].classList.add("stop-scrolling");
            }
        }
    }, [setSelectedItem, responsiveStore, isRecoverOpen, openRecover, closeRecover, selectedItem]);

    const productions_items = useMemo(() =>
        productions_list.map((production: Production, index: number) =>
            <ProductionsGridItem
                key={index}
                onSelectItem={handleSelectItem}
                index={index}
                selectedItem={selectedItem === index && isRecoverOpen}
                logoPath={production.logo}
            />
    ), [handleSelectItem, selectedItem, isRecoverOpen]);

    return (
        <div
            id="productions"
            className="productions tab-content"
            ref={productionsRef}
        >
            <div className="productions_content">
                <div className={clsx(
                        "productions_content__description",
                        {["productions_content__description--black"]: responsiveStore.backgroundColor === "white"}
                    )}
                >
                    <h2>{appKeys["PRODUCTIONS_TAB_TITLE"]}</h2>
                    <p dangerouslySetInnerHTML={{__html: appKeys["PRODUCTIONS_TAB_CONTENT"]}} />
                </div>
            </div>
            {!responsiveStore.isMobile && (
                <div
                    className={clsx(
                        "productions_recover",
                        recover && "productions_recover--open"
                    )}
                    onWheel={handleRecoverScroll}
                >
                    <div className="productions_recover__content recover">
                        <div className="shell_logo stroke-hidder dark recover-logo">
                            <Logo size={60} wordMark variant="dark"/>
                        </div>
                        <NavBar variant="dark"/>
                        <div className="recover-content">
                            <div className="recover-content_container">
                                <div className="recover-content_container__grid productions-grid">
                                    {productions_items}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "productions_recover__productions-details",
                            {["productions_recover__productions-details--open"]: isRecoverOpen}
                        )}
                    >
                        <div className="productions_recover__productions-details___container">
                            <img
                                src="./icon/cancel.svg"
                                className="productions_recover__productions-details___container____close"
                                alt="menu"
                                onClick={handleSelectItem}
                            />
                            <ProductionsDetails
                                production={productions_list[selectedItem]}
                            />
                        </div>
                    </div>
                </div>
            )}
            {responsiveStore.isMobile && (
                <>
                    <div className="productions_mobile-grid">
                        {productions_items}
                    </div>
                    {isRecoverOpen && (
                        <div className="productions_mobile-details-container">
                            <img
                                src="./icon/cancel.svg"
                                className="productions_mobile-details-container__close"
                                alt="menu"
                                onClick={handleSelectItem}
                            />
                            <ProductionsDetails
                                production={productions_list[selectedItem]}
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    )
});

export default Productions;