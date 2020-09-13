import React, { useCallback } from 'react';
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
}: TabItemProps): JSX.Element  => {

    const handleSelectItem = useCallback(() => {
        onSelectItem(index)
    }, [onSelectItem, index])

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