import { observer } from "mobx-react-lite";
import React from "react";
import useStores from "../../stores";
import TimelineItem from "./TimelineItem";

const Career = observer((): JSX.Element => {
    const { localeStore } = useStores();
    const appKeys = localeStore.keys;

    return (
        <div
            className="career tab-content"
        >
            <div className="career_description career_content">
                <div className="career_description__content">
                    <h2>{appKeys["CAREER_TAB_TITLE"]}</h2>
                    <p>
                        {appKeys["CAREER_TAB_DESCRIPTION"]}
                    </p>
                </div>
            </div>
            <div className="career_timeline career_content">
                <div className="timeline">
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