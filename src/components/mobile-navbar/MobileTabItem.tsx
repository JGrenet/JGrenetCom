import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import type { Tab } from "../../stores/TabStore";
import useStores from "../../stores";
import clsx from "clsx";

interface MobileTabItemProps {
    tab: Tab;
    label: string;
    selected: boolean;
}

const MobileTabItem = observer(({
    tab,
    label,
    selected,
}: MobileTabItemProps): JSX.Element => {
    const { tabStore } = useStores();

    const handleUpdateSelectTab = useCallback(() => {
        tabStore.selectTab(tab, true);
    }, [tabStore, tab]);

    return (
        <li
            className={clsx(
                "mobile-navbar_container__item",
                {["mobile-navbar_container__item--selected"]: selected}
            )}
            onClick={handleUpdateSelectTab}
        >
            {label}
        </li>
    )
});


export default MobileTabItem;