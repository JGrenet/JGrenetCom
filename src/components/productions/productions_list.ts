export enum ExperienceType {
    FULL_TIME = 1,
    INFINITE_SQUARE_MISSION,
    EPITECH_PROJECT,
    FREE_PROJECT,
    FREELANCE,
    INTERNSHIP
}

export interface Production {
    key: string;
    startDate: string;
    endDate: string | null;
    skills: string[];
    logo: string;
    txtlogo: string;
    experienceType: ExperienceType;
    outlink?: string;
    githubLink?: string;
}

export const productions_list: Production[] = [
    {

        key: "infinite_square",
        startDate: "09/2018",
        endDate: null,
        skills: [
            "React",
            "Webpack",
            "Typescript",
            "Babel",
            "MobX",
            "HTML5",
            "CSS3",
            "Redux",
            "Angular",
            "Git",
            "Sass",
            "Less"
        ],
        logo: "/img/infinite_square_logo.png",
        txtlogo: "/img/infinite_square_logo_text.png",
        experienceType: ExperienceType.FULL_TIME
    },
    {
        key: "hokifish_site_vitrine",
        startDate: "01/2019",
        endDate: "02/2019",
        skills: [
            "Gulp",
            "Typescript",
            "HTML5",
            "CSS3",
            "Git",
            "Less"
        ],
        logo: "/img/hokifish_logo.png",
        txtlogo: "/img/hokifish_logo_text.png",
        experienceType: ExperienceType.INFINITE_SQUARE_MISSION,
        outlink: "https://hokifish.com"
    },
    {
        key: "hokifish_web_app",
        startDate: "09/2018",
        endDate: "03/2019",
        skills: [
            "React",
            "Webpack",
            "Typescript",
            "HTML5",
            "CSS3",
            "Redux",
            "Git",
            "Less"
        ],
        logo: "/img/hokifish_logo.png",
        txtlogo: "/img/hokifish_logo_text.png",
        experienceType: ExperienceType.INFINITE_SQUARE_MISSION
    },
    {
        key: "lumapps",
        startDate: "06/2019",
        endDate: "12/2019",
        skills: [
            "React",
            "AngularJs",
            "Webpack",
            "Typescript",
            "HTML5",
            "CSS3",
            "Redux",
            "Git",
            "Sass"
        ],
        logo: "/img/lumapps_logo.png",
        txtlogo: "/img/lumapps_logo_text.png",
        experienceType: ExperienceType.INFINITE_SQUARE_MISSION
    },
    {
        key: "pernod_ricard_les_embiez",
        startDate: "02/2020",
        endDate: "03/2020",
        skills: [
            "React",
            "Webpack",
            "Typescript",
            "Babel",
            "HTML5",
            "CSS3",
            "Git",
            "Sass"
        ],
        logo: "/img/pernod_ricard_logo.png",
        txtlogo: "/img/pernod_ricard_logo_text.png",
        experienceType: ExperienceType.INFINITE_SQUARE_MISSION
    },
    // {
    //     key: "talentsoft",
    //     startDate: "03/2020",
    //     endDate: "11/2020",
    //     skills: [
    //         "React",
    //         "Webpack",
    //         "Typescript",
    //         "MobX",
    //         "HTML5",
    //         "CSS3",
    //         "Git",
    //         "Material-UI"
    //     ],
    //     logo: "/img/talentsoft_logo.png",
    //     txtlogo: "/img/talentsoft_logo_text.png",
    //     experienceType: ExperienceType.INFINITE_SQUARE_MISSION
    // },
    {
        key: "jeremygrenet_com",
        startDate: "09/2020",
        endDate: "11/2020",
        skills: [
            "React",
            "Webpack",
            "Typescript",
            "MobX",
            "HTML5",
            "CSS3",
            "Snowpack",
            "Git",
            "Sass",
        ],
        logo: "/img/jeremygrenet_logo--black.png",
        txtlogo: "/img/jeremygrenet_logo_text--black.png",
        experienceType: ExperienceType.FREE_PROJECT,
        outlink: "https://jeremygrenet.com",
        githubLink: "https://github.com/JGrenet/JGrenetCom"
    },
    {
        key: "pinty",
        startDate: "09/2017",
        endDate: "02/2019",
        skills: [
            "Angular",
            "Typescript",
            "HTML5",
            "CSS3",
            "Git",
            "Sass",
            "Trello",
            "Adobe XD",
            "Adobe Photoshop"
        ],
        logo: "/img/pinty_logo.png",
        txtlogo: "/img/pinty_logo_text.png",
        experienceType: ExperienceType.EPITECH_PROJECT
    },
    {
        key: "mrmarguerite",
        startDate: "03/2018",
        endDate: "04/2018",
        skills: [
            "HTML",
            "CSS",
            "Sass",
            "Bootstrap",
            "Grunt",
            "Git",
            "Javascript"
        ],
        logo: "/img/mrmarguerite_logo.png",
        txtlogo: "/img/mrmarguerite_logo_text.png",
        experienceType: ExperienceType.FREELANCE
    },
    {
        key: "meolia",
        startDate: "11/2016",
        endDate: "03/2017",
        skills: [
            "HTML",
            "CSS",
            "JQuery",
            "Google Maps APIs",
            "Leaflet.js"
        ],
        logo: "/img/meolia_logo.png",
        txtlogo: "/img/meolia_logo_text.png",
        experienceType: ExperienceType.INTERNSHIP
    },
    {
        key: "mgmobile",
        startDate: "09/2015",
        endDate: "12/2015",
        skills: [
            "HTML",
            "CSS",
            "JQuery",
            "PHP",
            "SQL"
        ],
        logo: "/img/mgmobile_logo.png",
        txtlogo: "/img/mgmobile_logo_text.png",
        experienceType: ExperienceType.INTERNSHIP
    },
]