import React from "react";

interface LoaderProps {

}

const Loader = ({}: LoaderProps) => {
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
            <span className="loader_txt">JG</span>
        </div>
    );
}

export default Loader;