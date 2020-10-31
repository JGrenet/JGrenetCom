import React, { useCallback } from "react";
import clsx from "clsx";

interface ButtonProps {
    onClick?: () => void;
    label: string;
    inForm?: boolean;
    size?: "medium" | "big";
}

const Button = ({
    onClick,
    label,
    inForm = false,
    size = "big"
}: ButtonProps): JSX.Element => {
    
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onClick && onClick();
    }, [onClick])

    return (
        <button
            className={clsx(
                "button",
                {["button--big"]: size === "big"},
                {["button--medium"]: size === "medium"}
            )}
            onClick={handleClick}
            type={inForm ? "submit" : "button"}
        >
            {label}
        </button>
    );
}

export default Button;