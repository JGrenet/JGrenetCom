import { observer } from "mobx-react-lite";
import React from "react";
import useStores from "../../stores";
import Button from "../button/Button";

const Home = observer(() => {
    const { localeStore, responsiveStore } = useStores();
    const appKeys = localeStore.keys;

    //TODO Inverser le front-end avec la premiere phrase en Anglais !
    return (
        <div className="home tab-content">
            
            <div className="home_content">
                <div className="home_content__main-content">
                    <h1 className="bold">{appKeys["HOME_HELLO"]}</h1>
                    <h2>{appKeys["HOME_NAME"]}</h2>
                    <h2>
                    {appKeys["HOME_JOB"]} <span className="yellow bold">{appKeys["HOME_FRONT_END"]}</span>
                    </h2>
                    <h4>{appKeys["HOME_CATCHPHRASE"]}</h4>
                </div>
            </div>
            <div className="home_image">
                <img src="./img/photo_pro.jpg" alt="photo_pro"/>
            </div>
            {responsiveStore.isMobile && (
                <div className="home_contact">
                    <Button label={appKeys["ACTION_CONTACT_ME"]} />
                </div>
            )}
        </div>       
    )
});

export default Home;