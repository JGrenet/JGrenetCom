import React from "react";

const Loader = (): JSX.Element => {
    return (
        <div className="loader">
            <svg>
                <rect
                    x="0"
                    y="0"
                    fill="none"
                    width="100%"
                    height="100%"
                />
            </svg>
            <span className="loader_txt">Jg</span>
        </div>
    );
}

export default Loader;