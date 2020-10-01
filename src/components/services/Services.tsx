import { observer } from "mobx-react-lite";
import React, { CSSProperties, useCallback, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { SHELL_PADDING } from "../../utils/globals";
import useStores from "../../stores";
import ServiceItem from "./ServiceItem";

type ServicesType = {
    [key: string]: CSSProperties
}

const Services = observer(() => {
    const { localeStore, responsiveStore } = useStores();
    const appKeys = localeStore.keys;
    const shellWidth = document.documentElement.clientWidth - (SHELL_PADDING * 2);
    const shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);
    const [selectedItem, setSelectedItem] = useState<number>(0);

    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

    const styles: ServicesType = {
        services: {
            width: (shellWidth / 2) - 15
        },
        illustrations: {
            width: (shellWidth / 2) - 15,
            height: shellHeight,
            right: -((shellWidth / 2) - 15) - 30
        }
    }

    return (
        <div className="services tab-content" style={styles.services}>
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
                        selected={selectedItem === 0}
                        selectItem={setSelectedItem}
                    />
                    <ServiceItem
                        index={2}
                        img={"/icon/back_office"}
                        title={appKeys["SERVICES_ITEM_BACKOFFICE_TITLE"]}
                        content={appKeys["SERVICES_ITEM_BACKOFFICE_CONTENT"]}
                        selected={selectedItem === 0}
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
                        style={styles.illustrations}
                    >
                    </div>
                </CSSTransition>
            )}
        </div>       
    )
});

export default Services;