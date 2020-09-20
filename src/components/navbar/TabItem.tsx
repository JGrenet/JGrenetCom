import React, { useCallback } from 'react';
import clsx from "clsx";
import type { Tab, TabKeys } from '../../stores/TabStore';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';

interface TabItemProps {
    tab: Tab;
    label: TabKeys;
    selected: boolean;
    variant: "white" | "dark"
}

const TabItem = observer(({
    tab,
    label,
    selected,
    variant = "white"
}: TabItemProps): JSX.Element  => {
    const { localeStore, tabStore } = useStores();
    const appKeys = localeStore.keys;
    const handleSelectItem = useCallback(() => {
        tabStore.selectTab(tab);
    }, [tabStore, tab])

    return (
        <li 
            onClick={handleSelectItem}
            className={clsx(
                "navbar_container__item",
                {["selected"]: selected,
                ["dark"]: variant === "dark"}
            )}
        >
            {appKeys[`TAB_${label}`]}
        </li> 
    );
});
    
export default TabItem;