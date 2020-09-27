import { observer } from "mobx-react-lite";
import React from "react";
import useStores from "../../stores";

const Home = observer(() => {
    const { responsiveStore } = useStores();

    return (
        <div className="home tab-content">
            <div className="home_content">
                <div className="home_content__main-content">
                    <h1 className="bold">Bonjour!</h1>
                    <h2>Je m'appelle Jérémy</h2>
                    <h2>
                        Je suis développeur <span className="yellow bold">Front-End</span>
                    </h2>
                    <h4>Voyons ensemble comment nous pouvons mener vos projets à bien.</h4>
                </div>
            </div>
            <div className="home_image">
                <img src="./img/photo_pro.jpg" alt="photo_pro"/>
            </div>
            {responsiveStore.isMobile && <div className="home_contact"></div>}
        </div>       
    )
});

export default Home;