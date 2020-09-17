import React from "react";
import useStores from "../../stores";
import { locales } from "../../stores/LocaleStore";
import LanguageItem from "./LanguageItem";
import { observer } from "mobx-react-lite";

const LanguageSelector = observer((): JSX.Element => {
    const { localeStore } = useStores();

    return (
        <div className="language-selector">
            { locales.map((l, index) => {
                <LanguageItem
                    label={l.label}
                    localeCode={l.code}
                    selected={localeStore.locale === l.code}
                />
                {index !== locales.length - 1 && <div className="language-selector_separator"></div>}
            })} 
        </div>
    );
});

export default LanguageSelector;
