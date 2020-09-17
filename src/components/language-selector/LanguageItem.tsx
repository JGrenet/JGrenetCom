import React, { useCallback } from "react";
import useStores from "../../stores";
import clsx from "clsx";

interface LanguageItemProps {
    label: string;
    localeCode: string;
    selected: boolean;
}

const LanguageItem = ({
    label,
    localeCode,
    selected
}: LanguageItemProps): JSX.Element => {
    const { localeStore } = useStores();

    const updateLocate = useCallback(() => {
        localeStore.updateLocale(localeCode)
    }, [localeStore, localeCode]);

    return (
        <div 
            className={clsx("language-selector_locale", 
                {["language-selector_locale--selected"]: selected})}
            onClick={updateLocate}
        >
            {label}
        </div>
    );
}

export default LanguageItem;
