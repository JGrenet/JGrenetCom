import React, { useMemo } from "react";
import useStores from "../../stores";
import { ExperienceType } from "./productions_list";

interface ProductionsDetailsProps {
    title: string;
    startDate: string;
    endDate: string | null;
    presentation: string;
    missions: string;
    skills: string[];
    logo: string;
    experienceType: ExperienceType;
}

export const ProductionsDetails = ({
    title,
    startDate,
    endDate,
    presentation,
    missions,
    skills,
    logo,
    experienceType
}: ProductionsDetailsProps): JSX.Element => {

    const { localeStore } = useStores();

    const getExperienceTypeLabel = useMemo(() => {
        switch (experienceType) {
            case ExperienceType.FULL_TIME:
                return localeStore.keys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_FULL_TIME"];
            case ExperienceType.INFINITE_SQUARE_MISSION:
                return localeStore.keys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_INFINITE_SQUARE_MISSION"];
            case ExperienceType.EPITECH_PROJECT:
                return localeStore.keys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_EPITECH_PROJECT"];
            case ExperienceType.FREE_PROJECT:
                return localeStore.keys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_FREE_PROJECT"];
            case ExperienceType.FREELANCE:
                return localeStore.keys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_FREELANCE"];
        }
    }, [experienceType, localeStore.keys]);

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
            <div className="productions-details_section productions-details_section--first">
                <div className="productions-details_section__type-chip">
                    {getExperienceTypeLabel}
                </div>
            </div>
            <div className="productions-details_section">
                <span className="productions-details_section__title">
                    PRESENTATION
                </span>
                <p className="productions-details_section__content" dangerouslySetInnerHTML={{__html: presentation}} />
            </div>
            <div className="productions-details_section">
                <span className="productions-details_section__title">
                    MISSIONS
                </span>
                <p className="productions-details_section__content" dangerouslySetInnerHTML={{__html: missions}} />
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