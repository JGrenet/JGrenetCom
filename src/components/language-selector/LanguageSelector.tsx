import React from "react";

const LanguageSelector = (): JSX.Element => {
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
