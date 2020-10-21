import React from "react";

interface SkillsGridItemProps {
    label: string;
    iconUrl: string;
}

export const SkillsGridItem = ({
    label,
    iconUrl
}: SkillsGridItemProps): JSX.Element => {
    return (
        <div
            className={"skills-grid_item skills-grid-item"}
        >
            <div className="skills-grid-item_flip-card flip-card">
                <div className="flip-card_front">
                    <img src={iconUrl} className="flip-card_front__logo"/>
                </div>
                <div className="flip-card_back">
                    {label}
                </div>
            </div>
        </div>
    )
}