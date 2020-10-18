import React from "react";

interface ProductionsDetailsProps {
    title: string;
    startDate: string;
    endDate: string | null;
    presentation: string;
    missions: string;
    skills: string[];
    logo: string;
}

export const ProductionsDetails = ({
    title,
    startDate,
    endDate,
    presentation,
    missions,
    skills,
    logo
}: ProductionsDetailsProps): JSX.Element => {

    return (
        <div className="productions-details">
            <div className="productions-details_meta">
                <div className="productions-details_meta__infos">
                    <span className="productions-details_meta__infos___title">
                        {title}
                    </span>
                    <span className="productions-details_meta__infos___date">
                        {startDate} - {endDate}
                    </span>
                </div>
                <img src={logo} alt="productions_logo" />
            </div>
            <div className="productions-details_section productions-details_section__presentation">
                <span className="productions-details_section__title">
                    PRESENTATION
                </span>
                <p className="productions-details_section__content">
                    {presentation}
                </p>
            </div>
            <div className="productions-details_section">
                <span className="productions-details_section__title">
                    MISSIONS
                </span>
                <p className="productions-details_section__content">
                    {missions}
                </p>
            </div>
            <div className="productions-details_section">
                <span className="productions-details_section__title">
                    COMPETENCES
                </span>
                <div className="productions-details_section__skills-list skills-list">
                    {skills.map((skill) =>
                        <div className="skills-list_item">{skill}</div>
                    )}
                </div>
            </div>
        </div>
    )
}