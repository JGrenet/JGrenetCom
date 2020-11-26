import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { Tab } from "../../stores/TabStore";
import useStores from "../../stores";
import Button from "../button/Button";

const Home = observer(() => {
    const { localeStore, responsiveStore, tabStore } = useStores();
    const appKeys = localeStore.keys;

    const handleRedirectToContactTab = useCallback(() => {
        tabStore.selectTab(Tab.CONTACT, true);
    }, [tabStore]);

    return (
        <div id="home" className="home tab-content">
            <div className="home_content">
                <div className="home_content__main-content">
                    <h1 className="bold">{appKeys["HOME_HELLO"]}</h1>
                    <h2>{appKeys["HOME_NAME"]}</h2>
                    <h2 dangerouslySetInnerHTML={{__html: appKeys["HOME_JOB"]}} />
                    <h4>{appKeys["HOME_CATCHPHRASE"]}</h4>
                </div>
            </div>
            <div className="home_image">
                <img src="/img/photo_pro.jpg" alt="photo_pro"/>
            </div>
            {responsiveStore.isMobile && (
                <div className="home_contact">
                    <Button label={appKeys["ACTION_CONTACT_ME"]} onClick={handleRedirectToContactTab} />
                </div>
            )}
        </div>       
    )
});

export default Home;