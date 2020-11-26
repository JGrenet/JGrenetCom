import React from "react";
import clsx from "clsx";
import type { ButtonProps } from "../button/Button";
import Button from "../button/Button";

interface LoadingButtonProps extends Omit<ButtonProps, "inForm"> {
    isLoading: boolean;
}

const LoadingButton = ({
    isLoading,
    ...props
}: LoadingButtonProps): JSX.Element => {

    return (
        <div className="loadingButton">
            <svg className="loadingButton_stroke">
                <rect
                    className={clsx(
                        "loadingButton_stroke__rect",
                        {["loadingButton_stroke__rect--show"]: isLoading}
                    )}
                    x="0"
                    y="0"
                    fill="none"
                    width="100%"
                    height="100%"
                />
            </svg>
            <Button
                className={clsx(
                    "loadingButton_button",
                    {["loadingButton_button--loading"]: isLoading}
                )}
                inForm {...props}
                disabled={isLoading}
            />
        </div>
    );
}

export default LoadingButton;