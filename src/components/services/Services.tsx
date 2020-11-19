import { observer } from "mobx-react-lite";
import React, {useCallback, useMemo, useState } from "react";
import { CSSTransition } from "react-transition-group";
import useStores from "../../stores";
import ServiceItem from "./ServiceItem";
import { Tab } from "../../stores/TabStore";

const Services = observer(() => {
    const { localeStore, responsiveStore, tabStore } = useStores();
    const appKeys = localeStore.keys;
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const imgUrl = useMemo(() => {
        switch (selectedItem) {
            case 0:
                return "/img/code.png";
            case 1:
                return "/img/responsive.png";
            case 2:
                return "/img/admin.png";
        }
    }, [selectedItem])

    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

    return (
        <div id="services" className="services tab-content">
            <div className="services_content">
                <h2>{appKeys["SERVICES_TAB_TITLE"]}</h2>
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
                        title={appKeys["SERVICES_ITEM_MAINTENANCE_TITLE"]}
                        content={appKeys["SERVICES_ITEM_MAINTENANCE_CONTENT"]}
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
                    in={tabStore.selectedtab === Tab.SERVICES}
                    timeout={1500}
                >
                    <div className="services_illustration">
                        <img src={imgUrl} alt="illustration" />
                    </div>
                </CSSTransition>
            )}
        </div>       
    )
});

export default Services;