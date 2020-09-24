import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import clsx from "clsx";
import type { Tab } from '../../stores/TabStore';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';

interface TabItemProps {
    tab: Tab;
    //label: TabKeys;
    label: string;
    selected: boolean;
    variant: "white" | "dark",
    updateUnderlinePosition: () => void;
}

const TabItem = observer(({
    tab,
    label,
    selected,
    variant = "white",
    updateUnderlinePosition
}: TabItemProps): JSX.Element  => {
    const { tabStore } = useStores();
    const handleSelectItem = useCallback(() => {
        tabStore.selectTab(tab);
    }, [tabStore, tab])
    const tabItemRef = useRef<HTMLLIElement >(null);
    const [prevTabItemPositions, setPrevTabItemPositions] = useState<DOMRect | null>(null);

    useLayoutEffect(() => {
        if (tabItemRef?.current) {
            const tabItemPositions = tabItemRef.current.getBoundingClientRect();
            if (tabItemPositions.top !== prevTabItemPositions?.top) {
                setPrevTabItemPositions(tabItemPositions);
                updateUnderlinePosition()
            }
        }
    }, [label, updateUnderlinePosition, tabItemRef, prevTabItemPositions]);

    return (
        <li 
            onClick={handleSelectItem}
            className={clsx(
                "navbar_container__item",
                {["selected"]: selected,
                ["dark"]: variant === "dark"}
            )}
            ref={tabItemRef}
            
        >
            {label}
        </li> 
    );
});
    
export default TabItem;