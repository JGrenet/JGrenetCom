import React, { CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import TabItem from './TabItem';
import { SHELL_PADDING, TAB_PADDING } from "../../utils/globals";
import { Tab, TabKeys } from '../../stores/TabStore';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';

const NavBar = observer((): JSX.Element  => {

    const { tabStore } = useStores();
    const [underlineStyle, setUnderlineStyle] = useState<CSSProperties>({});
    const navBarContainerRef = useRef<HTMLUListElement >(null);

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

    const TabKeys: TabKeys[] = ((Object.keys(Tab).filter((i) => !Number(i))) as TabKeys[]).reverse();

    return (
        <nav className="navbar" style={{width: shellHeight}}>
            <ul className="navbar_container" ref={navBarContainerRef}>
                {TabKeys.map((t: TabKeys, index: number) => <TabItem
                        key={index}
                        tab={Tab[t]}
                        label={t}
                        selected={Tab[t] === tabStore.selectedtab}
                    />
                )}
            </ul>
            <div className="navbar_underline" style={underlineStyle} />
        </nav>
    );
});
    
export default NavBar;