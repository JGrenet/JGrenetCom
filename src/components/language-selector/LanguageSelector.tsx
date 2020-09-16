import React from "react";
import useStores from "src/stores";

const LanguageSelector = (): JSX.Element => {
    const { localeStore } = useStores();

    return (
        <div className="language-selector">
            <div className="language-selector_locale language-selector_locale--selected">
                Fr
            </div>
            <div className="language-selector_separator"></div>
            <div className="language-selector_locale">
                En
            </div>
        </div>
    );
}

export default LanguageSelector;
