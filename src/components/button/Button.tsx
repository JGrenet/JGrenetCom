import React from "react";

interface ButtonProps {
    onClick: ([params]) => void;
}

const Button = (): JSX.Element => {
    return (
        <button className="button"></button>
    );
}

export default Button;