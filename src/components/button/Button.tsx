import React, { useCallback } from "react";
import clsx from "clsx";

export interface ButtonProps {
    onClick?: () => void;
    label: string;
    inForm?: boolean;
    size?: "medium" | "big";
    className?: string;
    disabled?: boolean;
}

const Button = ({
    onClick,
    label,
    inForm = false,
    size = "big",
    disabled = false,
    className
}: ButtonProps): JSX.Element => {
    
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onClick && onClick();
    }, [onClick])

    return (
        <button
            className={clsx(
                "button",
                className,
                {
                    ["button--big"]: size === "big",
                    ["button--medium"]: size === "medium",
                    ["button--disabled"]: disabled
                }
            )}
            onClick={handleClick}
            type={inForm ? "submit" : "button"}
            disabled={disabled}
        >
            {label}
        </button>
    );
}

export default Button;