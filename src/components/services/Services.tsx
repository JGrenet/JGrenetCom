import { observer } from "mobx-react-lite";
import React, { CSSProperties, useCallback, useLayoutEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { SHELL_PADDING } from "../../utils/globals";
import useStores from "../../stores";
import ServiceItem from "./ServiceItem";

type ServicesStyles = {
    [key: string]: CSSProperties
}

const Services = observer(() => {
    const { localeStore, responsiveStore } = useStores();
    const appKeys = localeStore.keys;
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const [serviceStyle, setServiceStyle] = useState<ServicesStyles | null>(null);

    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

    const getServiceStyle = useCallback(() => {
        const shellWidth = document.documentElement.clientWidth - (SHELL_PADDING * 2);
        const shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);

        const getContentWidth = (): number => {
            const contentWidth = shellWidth <= 1400 ? 
            (shellWidth <= 1200 ? shellWidth : (shellWidth * 0.6)) : (shellWidth / 2);
            return shellWidth <= 1200 ? contentWidth : contentWidth - 15;
        }

        const getIllustrationWidth = (): number => {
            const illustrationWidth = shellWidth <= 1400 ? (shellWidth * 0.4) : (shellWidth / 2);
            return illustrationWidth - 15;
        }

        const contentWidth = getContentWidth();
        const illustrationWidth = getIllustrationWidth();

        setServiceStyle({
            services: {
                width: contentWidth
            },
            illustrations: {
                width: getIllustrationWidth(),
                height: shellHeight,
                right: -(illustrationWidth) - 30
            }
        })
    }, []);

    useLayoutEffect(() => {
        getServiceStyle();
        window.addEventListener("resize", () => getServiceStyle());

        return () => window.removeEventListener("resize", () => getServiceStyle());
    }, [getServiceStyle]);

    if (!serviceStyle) return <></>;

    return (
        <div className="services tab-content" style={serviceStyle.services}>
            <div className="services_content" style={{color: "white"}}>
                <h2>My services</h2>
                <div className="services_content__services-list services-list">
                    <ServiceItem
                        index={0}
                        img={"/icon/web_development"}
                        title={appKeys["SERVICES_ITEM_WEBDEV_TITLE"]}
                        content={appKeys["SERVICES_ITEM_WEBDEV_CONTENT"]}
                        selected={selectedItem === 0}
                        selectItem={setSelectedItem}
                    />
                    <ServiceItem
                        index={1}
                        img={"/icon/responsive"}
                        title={appKeys["SERVICES_ITEM_RESPONSIVE_TITLE"]}
                        content={appKeys["SERVICES_ITEM_RESPONSIVE_CONTENT"]}
                        selected={selectedItem === 1}
                        selectItem={setSelectedItem}
                    />
                    <ServiceItem
                        index={2}
                        img={"/icon/back_office"}
                        title={appKeys["SERVICES_ITEM_BACKOFFICE_TITLE"]}
                        content={appKeys["SERVICES_ITEM_BACKOFFICE_CONTENT"]}
                        selected={selectedItem === 2}
                        selectItem={setSelectedItem}
                    />
                </div>
            </div>
            {!responsiveStore.isMobile && (
                <CSSTransition
                    addEndListener={handleAddEnd}
                    classNames='animation-slide-bottom'
                    appear
                    in
                    timeout={1500}
                >
                    <div
                        className="services_illustration"
                        style={serviceStyle.illustrations}
                    >
                    </div>
                </CSSTransition>
            )}
        </div>       
    )
});

export default Services;