import React, { Fragment } from "react";
import useStores from "../../stores";
import { locales } from "../../stores/LocaleStore";
import LanguageItem from "./LanguageItem";
import { observer } from "mobx-react-lite";

const LanguageSelector = observer((): JSX.Element => {
    const { localeStore } = useStores();

    return (
        <div className="language-selector">
            {locales.map((l, index) => {
                return (
                    <Fragment key={index}>
                        <LanguageItem
                            label={localeStore.keys[l.label]}
                            localeCode={l.code}
                            selected={localeStore.locale === l.code}
                        />
                        {index !== locales.length - 1 && <div className="language-selector_separator"></div>}
                    </Fragment>
                );
            })}
        </div>
    );
});

export default LanguageSelector;
