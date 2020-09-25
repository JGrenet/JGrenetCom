import React, { CSSProperties } from "react";
import clsx from "clsx";

type LogoStyle = {
    [key: string]: CSSProperties
}

interface LogoProps {
    size: number;
    wordMark?: boolean;
    variant: "white" | "dark";
}

const Logo = ({ size, wordMark = false, variant = "white" }: LogoProps): JSX.Element => {

    const style: LogoStyle = {
        icon: {
            height: size,
            width: size
        },
        text: {
            fontSize: (size / 1.8)
        },
        wordMark: {
            fontSize: (size / 4.5)
        }
    }

    return (
        <div className="logo">
            <div className={clsx("logo_icon", {["dark"]: variant === "dark"})} style={style.icon}>
                <span className={clsx("logo_icon__text", {["dark"]: variant === "dark"})} style={style.text}>
                    JG
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