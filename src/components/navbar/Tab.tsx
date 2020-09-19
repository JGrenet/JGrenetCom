import React, { useCallback } from 'react';
import clsx from "clsx";
import type { Tab } from './NavBar';
import useStores from '../../stores';

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
    const { localeStore  } = useStores();

    const appKeys = localeStore.keys;
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
            {appKeys[tab.label]}
        </li> 
    );
}
    
export default TabItem;