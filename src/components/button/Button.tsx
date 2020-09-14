import React from "react";

interface ButtonProps {
    onClick?: () => void;
    label: string;
}

const Button = ({
    onClick,
    label
}: ButtonProps): JSX.Element => {
    return (
        <button className="button" onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;