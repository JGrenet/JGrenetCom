import React, { useMemo } from "react";
import useStores from "../../stores";
import { ExperienceType, Production } from "./productions_list";

interface ProductionsDetailsProps {
    production: Production;
}

export const ProductionsDetails = ({
    production
}: ProductionsDetailsProps): JSX.Element => {

    const { localeStore } = useStores();

    const appKeys = localeStore.keys;

    const getExperienceTypeLabel = useMemo(() => {
        switch (production.experienceType) {
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
    }, [production, appKeys]);

    return (
        <div className="productions-details">
            <div className="productions-details_meta">
                <div className="productions-details_meta__infos">
                    <span className="productions-details_meta__infos___title">
                        {appKeys[`PRODUCTIONS_${production.key.toUpperCase()}_TITLE`]}
                    </span>
                    <span className="productions-details_meta__infos___date">
                        {production.startDate} - {production.endDate || appKeys["PRODUCTIONS_DETAILS_ENDDATE_ONGOING"]}
                    </span>
                </div>
                <img src={production.txtlogo} alt="productions_logo" />
            </div>
            <div className="productions-details_section productions-details_section--first">
                <div className="productions-details_section__type-chip">
                    {getExperienceTypeLabel}
                </div>
                <div className="productions-details_section_outlinks">
                    {production.outlink && (
                        <a className="outlink-chip-container" target="_blank" href={production.outlink}>
                            <div className="productions-details_section__browser-chip outlink-chip">
                                <img src="/icon/browser.png" alt="website" />
                            </div>
                        </a>
                    )}
                    {production.githubLink && (
                        <a className="outlink-chip-container" target="_blank" href={production.githubLink}>
                            <div className="productions-details_section__github-chip outlink-chip">
                                <img src="/icon/github.png" alt="github" />
                            </div>
                        </a>
                    )}
                </div>
            </div>
            <div className="productions-details_section">
                <span className="productions-details_section__title">
                    {appKeys["PRODUCTIONS_DETAILS_PRESENTATION"]}
                </span>
                <p
                    className="productions-details_section__content"
                    dangerouslySetInnerHTML={{__html: appKeys[`PRODUCTIONS_${production.key.toUpperCase()}_INTRODUCING`]}}
                />
            </div>
            <div className="productions-details_section">
                <span className="productions-details_section__title">
                    {appKeys["PRODUCTIONS_DETAILS_MISSIONS"]}
                </span>
                <p
                    className="productions-details_section__content"
                    dangerouslySetInnerHTML={{__html: appKeys[`PRODUCTIONS_${production.key.toUpperCase()}_MISSIONS`]}}
                />
            </div>
            <div className="productions-details_section">
                <span className="productions-details_section__title">
                    {appKeys["PRODUCTIONS_DETAILS_SKILLS_AND_TOOLS"]}
                </span>
                <div className="productions-details_section__skills-list skills-list">
                    {production.skills.map((skill) =>
                        <div key={skill} className="skills-list_item">{skill}</div>
                    )}
                </div>
            </div>
        </div>
    )
}