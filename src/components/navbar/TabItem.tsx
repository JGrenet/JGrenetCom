import React, { useCallback } from 'react';
import clsx from "clsx";
import type { Tab } from '../../stores/TabStore';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';

interface TabItemProps {
    tab: Tab;
    //label: TabKeys;
    label: string;
    selected: boolean;
    variant: "white" | "dark"
}

const TabItem = observer(({
    tab,
    label,
    selected,
    variant = "white"
}: TabItemProps): JSX.Element  => {
    const { tabStore } = useStores();
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
            {label}
        </li> 
    );
});
    
export default TabItem;