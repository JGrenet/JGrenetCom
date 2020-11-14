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

    const appKeys = localeStore.keys;

    const getExperienceTypeLabel = useMemo(() => {
        switch (experienceType) {
            case ExperienceType.FULL_TIME:
                return appKeys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_FULL_TIME"];
            case ExperienceType.INFINITE_SQUARE_MISSION:
                return appKeys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_INFINITE_SQUARE_MISSION"];
            case ExperienceType.EPITECH_PROJECT:
                return appKeys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_EPITECH_PROJECT"];
            case ExperienceType.FREE_PROJECT:
                return appKeys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_FREE_PROJECT"];
            case ExperienceType.FREELANCE:
                return appKeys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_FREELANCE"];
            case ExperienceType.INTERNSHIP:
                return appKeys["PRODUCTIONS_DETAILS_EXPERIENCETYPE_INTERNSHIP"];
            default:
                return "";
        }
    }, [experienceType, appKeys]);

    return (
        <div className="productions-details">
            <div className="productions-details_meta">
                <div className="productions-details_meta__infos">
                    <span className="productions-details_meta__infos___title">
                        {title}
                    </span>
                    <span className="productions-details_meta__infos___date">
                        {startDate} - {endDate || appKeys["PRODUCTIONS_DETAILS_ENDDATE_ONGOING"]}
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
                    {appKeys["PRODUCTIONS_DETAILS_PRESENTATION"]}
                </span>
                <p className="productions-details_section__content" dangerouslySetInnerHTML={{__html: presentation}} />
            </div>
            <div className="productions-details_section">
                <span className="productions-details_section__title">
                    {appKeys["PRODUCTIONS_DETAILS_MISSIONS"]}
                </span>
                <p className="productions-details_section__content" dangerouslySetInnerHTML={{__html: missions}} />
            </div>
            <div className="productions-details_section">
                <span className="productions-details_section__title">
                    {appKeys["PRODUCTIONS_DETAILS_SKILLS_AND_TOOLS"]}
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