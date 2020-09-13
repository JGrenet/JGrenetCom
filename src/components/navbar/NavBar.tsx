import React, { CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import TabItem from './Tab';
import { SHELL_PADDING, TAB_PADDING } from "../../utils/globals";

export type Tab = {
    label: string,
    url: string
}

const tabs: Tab[] = [
    {
        label: "contact",
        url: ""
    },
    {
        label: "compétences",
        url: ""
    },
    {
        label: "realisations",
        url: ""
    },
    {
        label: "parcours",
        url: ""
    },
    {
        label: "services",
        url: ""
    },
    {
        label: "accueil",
        url: ""
    },
]

interface NavBarProps {}

const NavBar = ({}: NavBarProps)  => {

    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
    const [underlineStyle, setUnderlineStyle] = useState<CSSProperties>({});
    const navBarContainerRef = useRef<HTMLUListElement >(null);

    useLayoutEffect(() => {
        const selected = document.querySelector(".navbar_container__item.selected")
        console.log("Selected : ", selected);
        if (selected && navBarContainerRef?.current) {
            const selectedPositions = selected.getBoundingClientRect();
            const navBarContainerPostions = navBarContainerRef.current.getBoundingClientRect()

            console.log("Positions : ", selectedPositions);
            console.log("Container Positions : ", navBarContainerPostions);
            setUnderlineStyle({
                width: selected.clientWidth - TAB_PADDING,
                left: ((navBarContainerPostions.bottom - selectedPositions.bottom) + (navBarContainerPostions.top - 100)) + (TAB_PADDING / 2),
            })
        }
    }, [setUnderlineStyle, navBarContainerRef, selectedTabIndex])

    const shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);

    return (
        <nav className="navbar" style={{width: shellHeight}}>
            <ul className="navbar_container" ref={navBarContainerRef}>
                {tabs.map((tab: Tab, index: number) => 
                    <TabItem
                        key={index}
                        index={index}
                        tab={tab}
                        selected={index === selectedTabIndex}
                        onSelectItem={setSelectedTabIndex}
                    />
                )}
            </ul>
            <div className="navbar_underline" style={underlineStyle} />
        </nav>
    );
}
    
export default NavBar;