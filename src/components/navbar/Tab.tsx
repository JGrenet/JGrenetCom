import React, { useCallback, useLayoutEffect, useState } from 'react';
import clsx from "clsx";
import type { Tab } from './NavBar';

interface TabItemProps {
    onSelectItem: (itemIndex: number) => void;
    index: number;
    tab: Tab;
    selected: boolean
}

const TabItem = ({
    onSelectItem,
    index,
    tab,
    selected
}: TabItemProps)  => {

    const handleSelectItem = useCallback(() => {
        onSelectItem(index)
    }, [onSelectItem])

    return (
        <li 
            onClick={handleSelectItem}
            className={clsx(
                "navbar_container__item",
                {["selected"]: selected}
            )}
        >
            {tab.label}
        </li> 
    );
}
    
export default TabItem;