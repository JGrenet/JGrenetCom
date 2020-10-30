import React, { CSSProperties, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import useStores from "../../stores";
import clsx from "clsx";
import { Tab } from "../../stores/TabStore";
import { SkillsGridItem } from "./SkillsGridItem";

type RecoverStyle = {
    [key: string]: CSSProperties;
}

const RECOVER_OVERFLOW = 50;

const Skills = observer(() => {
    const { localeStore, responsiveStore, tabStore } = useStores();
    const [recoverStyle, setRecoverStyle] = useState<RecoverStyle | null>(null);
    const [recover, setRecover] = useState<boolean>(false);
    const appKeys = localeStore.keys;

    const getRecoverStyle = useCallback(() => {
        setRecoverStyle({
            cover: {
                height: recover ? responsiveStore.shellHeight + RECOVER_OVERFLOW : 0
            },
            coverContent: {
                height: responsiveStore.shellHeight + RECOVER_OVERFLOW
            }
        })
    }, [recover, responsiveStore]);

    const handleRecoverScroll = useCallback((event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        event.stopPropagation();
    }, []);

    useLayoutEffect(() => {
        getRecoverStyle();
        window.addEventListener("resize", () => getRecoverStyle());

        return () => window.removeEventListener("resize", () => getRecoverStyle());
    }, [getRecoverStyle, recover]);

    useEffect(() => {
        if (tabStore.selectedtab === Tab.SKILLS) {
            setRecover(true);
        } else {
            setRecover(false);
        }
    }, [tabStore.selectedtab, setRecover]);

    return (
        <div className="skills tab-content">
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
                    className="skills_recover"
                    style={responsiveStore.isMobile ? undefined : (recoverStyle?.cover || undefined)}
                    onWheel={handleRecoverScroll}
                >
                <div
                    className={clsx(
                        "skills_recover__content recover",
                        {["recover--white"]: responsiveStore.backgroundColor === "white"}
                    )}
                    style={responsiveStore.isMobile ? undefined : (recoverStyle?.coverContent || undefined)}
                >
                    <div className="recover_content">
                        <div className="recover_content__container">
                            <div className="recover_content__container___grid skills-grid">
                                <SkillsGridItem
                                    label="Webpack"
                                    iconUrl="/icon/webpack.png"
                                />
                                <SkillsGridItem
                                    label="Webpack"
                                    iconUrl="/icon/webpack.png"
                                />
                                <SkillsGridItem
                                    label="Webpack"
                                    iconUrl="/icon/webpack.png"
                                />
                                <SkillsGridItem
                                    label="Webpack"
                                    iconUrl="/icon/webpack.png"
                                />
                                <SkillsGridItem
                                    label="Webpack"
                                    iconUrl="/icon/webpack.png"
                                />
                                <SkillsGridItem
                                    label="Webpack"
                                    iconUrl="/icon/webpack.png"
                                />
                                <SkillsGridItem
                                    label="Webpack"
                                    iconUrl="/icon/webpack.png"
                                />
                                <SkillsGridItem
                                    label="Webpack"
                                    iconUrl="/icon/webpack.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
});

export default Skills;