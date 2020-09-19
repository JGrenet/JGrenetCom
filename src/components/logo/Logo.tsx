import React, { CSSProperties } from "react";

type LogoStyle = {
    [key: string]: CSSProperties
}

interface LogoProps {
    size: number;
    wordMark?: boolean;
}

const Logo = ({ size, wordMark = false }: LogoProps): JSX.Element => {

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
            <div className="logo_icon" style={style.icon}>
                <span className="logo_icon__text" style={style.text}>
                    JG
                </span>
            </div>
            {wordMark && (
                <span className="logo_wordMark" style={style.wordMark}>
                    Jérémy Grenet
                </span>
            )}
        </div>
    )
}

export default Logo;