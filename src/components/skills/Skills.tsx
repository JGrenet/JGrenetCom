import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import useStores from "../../stores";
import clsx from "clsx";
import { Tab } from "../../stores/TabStore";
import { SkillsGridItem } from "./SkillsGridItem";
import skillsList from "./skills_list";

const Skills = observer(() => {
    const { localeStore, responsiveStore, tabStore } = useStores();
    const [recover, setRecover] = useState<boolean>(false);
    const appKeys = localeStore.keys;

    const handleRecoverScroll = useCallback((event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        event.stopPropagation();
    }, []);

    useEffect(() => {
        if (tabStore.selectedtab === Tab.SKILLS) {
            setTimeout(() => {
                setRecover(true);
            }, 100);
        } else {
            setRecover(false);
        }
    }, [tabStore.selectedtab, setRecover]);

    return (
        <div id="skills" className="skills tab-content">
            <div className="skills_content">
                <div className={clsx(
                        "skills_content__description",
                        {["skills_content__description--black"]: responsiveStore.backgroundColor === "white"}
                    )}
                >
                    <h2>{appKeys["SKILLS_TAB_TITLE"]}</h2>
                    <p>{appKeys["SKILLS_TAB_CONTENT"]}</p>
                </div>
            </div>
                <div
                    className={clsx(
                        "skills_recover",
                        !responsiveStore.isMobile && recover && "skills_recover--open"
                    )}
                    onWheel={handleRecoverScroll}
                >
                <div
                    className={clsx(
                        "skills_recover__content recover",
                        {["recover--white"]: !responsiveStore.isMobile || responsiveStore.backgroundColor === "white"}
                    )}
                >
                    <div className="recover_content">
                        <div className="recover_content__container">
                            <div className="recover_content__container___grid skills-grid">
                                {skillsList.map((skill) => 
                                    <SkillsGridItem
                                        label={skill}
                                        iconUrl={`/icon/${skill.toLowerCase()}${responsiveStore.isMobile && responsiveStore.backgroundColor === "black" ? "_black" : ""}.png`}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
});

export default Skills;