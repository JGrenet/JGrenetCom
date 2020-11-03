import React from "react";
import useStores from "../../stores";
import clsx from "clsx";

interface SkillsGridItemProps {
    label: string;
    iconUrl: string;
}

export const SkillsGridItem = ({
    label,
    iconUrl
}: SkillsGridItemProps): JSX.Element => {
    const { responsiveStore } = useStores();

    return (
        <div
            className={"skills-grid_item skills-grid-item"}
        >
            <div className="skills-grid-item_flip-card flip-card">
                <div className={clsx(
                        "flip-card_front",
                        {["flip-card_front--white"]: responsiveStore.isMobile && responsiveStore.backgroundColor === "black"}
                    )}
                >
                    <img src={iconUrl} className="flip-card_front__logo"/>
                </div>
                <div className={clsx(
                        "flip-card_back",
                        {["flip-card_back--white"]: responsiveStore.isMobile && responsiveStore.backgroundColor === "black"}
                    )}
                >
                    {label}
                </div>
            </div>
        </div>
    )
}