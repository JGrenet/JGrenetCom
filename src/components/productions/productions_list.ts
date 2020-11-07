export interface Production {
    key: string;
    startDate: string;
    endDate: string | null;
    skills: string[];
    logo: string;
    txtlogo: string;
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
        txtlogo: "/img/infinite_square_logo_text.png"
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
        txtlogo: "/img/hokifish_logo_text.png"
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
        txtlogo: "/img/hokifish_logo_text.png"
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
        txtlogo: "/img/lumapps_logo_text.png"
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
        txtlogo: "/img/pernod_ricard_logo_text.png"
    },
    {
        key: "talentsoft",
        startDate: "03/2020",
        endDate: "11/2020",
        skills: [
            "React",
            "Webpack",
            "Typescript",
            "MobX",
            "HTML5",
            "CSS3",
            "Git",
            "Material-UI"
        ],
        logo: "/img/talentsoft_logo.png",
        txtlogo: "/img/talentsoft_logo_text.png"
    },
    {
        key: "jeremygrenet.com",
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
        txtlogo: "/img/jeremygrenet_logo_text--black.png"
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
            "Sass"
        ],
        logo: "/img/pinty_logo.png",
        txtlogo: "/img/pinty_logo_text.png"
    },
]