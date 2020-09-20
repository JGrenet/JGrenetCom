import React, { CSSProperties, useLayoutEffect, useRef, useState } from 'react';
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

    const { tabStore } = useStores();
    const [underlineStyle, setUnderlineStyle] = useState<CSSProperties>({});
    const navBarContainerRef = useRef<HTMLUListElement >(null);

    // TODO Update the dash position on window resize and on language change ! 
    useLayoutEffect(() => {
        const selected = document.querySelector(".navbar_container__item.selected")

        if (selected && navBarContainerRef?.current) {
            const selectedPositions = selected.getBoundingClientRect();
            const navBarContainerPostions = navBarContainerRef.current.getBoundingClientRect()

            setUnderlineStyle({
                width: selected.clientWidth - TAB_PADDING,
                left: ((navBarContainerPostions.bottom - selectedPositions.bottom) + (navBarContainerPostions.top - SHELL_PADDING)) + (TAB_PADDING / 2),
                top: (selectedPositions.left - SHELL_PADDING) + 40
            })
        }
    }, [setUnderlineStyle, navBarContainerRef, tabStore.selectedtab])

    const shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);

    const tabKeys: TabKeys[] = ((Object.keys(Tab).filter((i) => isNaN(Number(i)))) as TabKeys[]).reverse();

    return (
        <nav className="navbar" style={{width: shellHeight}}>
            <ul className="navbar_container" ref={navBarContainerRef}>
                {tabKeys.map((t: TabKeys, index: number) => <TabItem
                        key={index}
                        tab={Tab[t]}
                        label={t}
                        selected={Tab[t] === tabStore.selectedtab}
                        variant={variant}
                    />
                )}
            </ul>
            <div className={clsx("navbar_underline", {["dark"]: variant === "dark"})} style={underlineStyle} />
        </nav>
    );
});
    
export default NavBar;