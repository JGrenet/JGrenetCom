import React, { CSSProperties } from "react";
import clsx from "clsx";

type LogoStyle = {
    [key: string]: CSSProperties
}

interface LogoProps {
    size: number;
    wordMark?: boolean;
    variant: "white" | "dark";
    className?: string;
    onClick?: () => void;
}

const Logo = ({
    size,
    wordMark = false,
    variant = "white",
    className,
    onClick
}: LogoProps): JSX.Element => {
    const style: LogoStyle = {
        icon: {
            height: size,
            width: size
        },
        text: {
            fontSize: (size / 1.8)
        },
        wordMark: {
            fontSize: (size / 4)
        }
    }

    return (
        <div className={clsx("logo", className)} onClick={onClick}>
            <div className={clsx("logo_icon", {["dark"]: variant === "dark"})} style={style.icon}>
                <span className={clsx("logo_icon__text", {["dark"]: variant === "dark"})} style={style.text}>
                    Jg
                </span>
            </div>
            {wordMark && (
                <span className={clsx("logo_wordMark", {["dark"]: variant === "dark"})} style={style.wordMark}>
                    Jérémy Grenet
                </span>
            )}
        </div>
    )
}

export default Logo;