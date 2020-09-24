import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import TabItem from './TabItem';
import { SHELL_PADDING, TAB_PADDING } from "../../utils/globals";
import { Tab, TabKeys } from '../../stores/TabStore';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';
import clsx from "clsx";

interface NavBarProps {
    variant: "white" | "dark";
}

const NavBar = observer(({ variant = "white" }: NavBarProps): JSX.Element  => {
    const { tabStore, localeStore } = useStores();
    const appKeys = localeStore.keys;
    const navBarContainerRef = useRef<HTMLUListElement >(null);
    const [underlineStyle, setUnderlineStyle] = useState<CSSProperties>();

    const updateUnderlinePosition = (): void => {
        const selected = document.querySelector(".navbar_container__item.selected")
        const containerPositions = navBarContainerRef?.current?.getBoundingClientRect();

        if (selected && containerPositions) {
            const selectedPositions = selected.getBoundingClientRect();
            setUnderlineStyle({
                width: selected.clientWidth - TAB_PADDING,
                left: ((containerPositions.bottom - selectedPositions.bottom) + (containerPositions.top - SHELL_PADDING)) + (TAB_PADDING / 2),
                top: (selectedPositions.left - SHELL_PADDING) + 40
            });
        }
    }

    useEffect(() => {
        if (navBarContainerRef?.current) {
            updateUnderlinePosition();
        }
        //     document.addEventListener("resize", updateUnderlinePosition);
        //     return () => document.removeEventListener("resize", updateUnderlinePosition);
    }, [navBarContainerRef, tabStore.selectedtab])

    const shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);
    const tabKeys: TabKeys[] = ((Object.keys(Tab).filter((i) => isNaN(Number(i)))) as TabKeys[]).reverse();

    return (
        <nav className="navbar" style={{width: shellHeight}}>
            <ul className="navbar_container" ref={navBarContainerRef} >
                {tabKeys.map((t: TabKeys, index: number) => <TabItem
                        key={index}
                        tab={Tab[t]}
                        label={appKeys[`TAB_${t}`]}
                        selected={Tab[t] === tabStore.selectedtab}
                        variant={variant}
                        updateUnderlinePosition={updateUnderlinePosition}
                    />
                )}
            </ul>
            <div
                className={clsx("navbar_underline", {["dark"]: variant === "dark"})}
                style={underlineStyle}
            />
        </nav>
    );
});

export default NavBar;