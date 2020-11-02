import { observer } from "mobx-react-lite";
import React from "react";
import useStores from "../../stores";
import TimelineItem from "./TimelineItem";
import clsx from "clsx";

const Career = observer((): JSX.Element => {
    const { localeStore, responsiveStore } = useStores();
    const appKeys = localeStore.keys;

    return (
        <div
            id="career"
            className="career tab-content"
        >
            <div className="career_description">
                <div className="career_description__content">
                    <h2>{appKeys["CAREER_TAB_TITLE"]}</h2>
                    <p>
                        {appKeys["CAREER_TAB_DESCRIPTION"]}
                    </p>
                </div>
            </div>
            <div className="career_timeline">
                <div className={clsx(
                        "timeline",
                        {["timeline--black"]: responsiveStore.backgroundColor === "white"}
                    )}
                >
                     <TimelineItem
                        year="2014"
                        logo={"/img/epitech.png"}
                        bottom={0}
                        label={appKeys["CAREER_TAB_XP_1"]}
                    />
                    <TimelineItem
                        year={["2015", "2017"]}
                        bottom={17}
                        label={appKeys["CAREER_TAB_XP_2"]}
                    />
                    <TimelineItem
                        year="2018"
                        logo={"/img/infinite-square_texte.png"}
                        bottom={51}
                        label={appKeys["CAREER_TAB_XP_3"]}
                    />
                    <TimelineItem
                        year="2019"
                        logo={"/img/epitech.png"}
                        bottom={68}
                        label={appKeys["CAREER_TAB_XP_4"]}
                    />
                    <TimelineItem
                        year="2020"
                        bottom={85}
                        label={appKeys["CAREER_TAB_XP_5"]}
                        applogo
                    />
                </div>
            </div>
        </div>
    );
})

export default Career;