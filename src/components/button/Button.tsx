import React, { useCallback } from "react";

interface ButtonProps {
    onClick?: () => void;
    label: string;
    inForm?: boolean
}

const Button = ({
    onClick,
    label,
    inForm = false
}: ButtonProps): JSX.Element => {
    
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onClick && onClick();
    }, [onClick])

    return (
        <button
            className="button"
            onClick={handleClick}
            type={inForm ? "submit" : "button"}
        >
            {label}
        </button>
    );
}

export default Button;