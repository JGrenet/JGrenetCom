import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import type { TabKeys } from "../../stores/TabStore";
import { Tab } from "../../stores/TabStore";
import useStores from "../../stores";
import MobileTabItem from "./MobileTabItem";

interface MobileNavbarProps {
    closeMenu: () => void;
}
const MobileNavbar = observer(({ closeMenu }: MobileNavbarProps): JSX.Element => {
    const { localeStore, tabStore } = useStores();
    const appKeys = localeStore.keys;
    const tabKeys: TabKeys[] = ((Object.keys(Tab).filter((i) => isNaN(Number(i)))) as TabKeys[]);

    const handleDownloadCV = useCallback(() => {
        window.open(`/files/CV-jeremy-grenet-${localeStore.locale}.pdf`, "_blank");
    }, []);

    return (
        <nav className="mobile-navbar">
            <ul className="mobile-navbar_container">
                {tabKeys.map((t: TabKeys, index: number) =>
                    <MobileTabItem
                        key={index}
                        tab={Tab[t]}
                        label={appKeys[`TAB_${t}`]}
                        selected={Tab[t] === tabStore.selectedtab}
                        onClick={closeMenu}
                    />
                )}
                <li
                    className="mobile-navbar_container__item mobile-navbar_container__item--action"
                    onClick={handleDownloadCV}
                >
                    {appKeys["ACTION_DOWNLOAD_CV"]}
                </li>
            </ul>
        </nav>
    )
});


export default MobileNavbar;