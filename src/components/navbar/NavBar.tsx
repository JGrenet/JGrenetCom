import React, { CSSProperties, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
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
    const [, refresh] = useState({});

    const getUnderlineStyle = (navBarContainerPostions: DOMRect | undefined): CSSProperties => {
        const selected = document.querySelector(".navbar_container__item.selected")

        console.log(navBarContainerPostions);
        if (selected && navBarContainerPostions) {
            const selectedPositions = selected.getBoundingClientRect();
            return ({
                width: selected.clientWidth - TAB_PADDING,
                left: ((navBarContainerPostions.bottom - selectedPositions.bottom) + (navBarContainerPostions.top - SHELL_PADDING)) + (TAB_PADDING / 2),
                top: (selectedPositions.left - SHELL_PADDING) + 40
            });
        }
        return {};
    }

    const forceRefresh = useCallback(() => {
        refresh({});
    }, [refresh])

    const containerPositions = navBarContainerRef?.current?.getBoundingClientRect();
    useEffect(() => {
        if (navBarContainerRef?.current) {
            forceRefresh();
        }
        document.addEventListener("resize", forceRefresh);
        return () => document.removeEventListener("resize", forceRefresh);
    }, [navBarContainerRef, forceRefresh, tabStore.selectedtab, localeStore.locale, containerPositions?.top])

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
                    />
                )}
            </ul>
            {console.log(navBarContainerRef?.current?.getBoundingClientRect().top)}
            <div
                className={clsx("navbar_underline", {["dark"]: variant === "dark"})}
                style={getUnderlineStyle(containerPositions)}
            />
        </nav>
    );
});
    
export default NavBar;