import React from "react";
import { observer } from "mobx-react-lite";
import type { TabKeys } from "../../stores/TabStore";
import { Tab } from "../../stores/TabStore";
import useStores from "../../stores";
import MobileTabItem from "./MobileTabItem";

const MobileNavbar = observer((): JSX.Element => {
    const { localeStore, tabStore } = useStores();
    const appKeys = localeStore.keys;
    const tabKeys: TabKeys[] = ((Object.keys(Tab).filter((i) => isNaN(Number(i)))) as TabKeys[]);

    return (
        <nav className="mobile-navbar">
            <ul className="mobile-navbar_container">
                {tabKeys.map((t: TabKeys, index: number) =>
                    <MobileTabItem
                        key={index}
                        tab={Tab[t]}
                        label={appKeys[`TAB_${t}`]}
                        selected={Tab[t] === tabStore.selectedtab}
                    />
                )}
            </ul>
        </nav>
    )
});


export default MobileNavbar;