import React, { CSSProperties, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { SHELL_PADDING } from "../../utils/globals";
import NavBar from "../navbar/NavBar";

type ShellStyle = {
    [key: string]: CSSProperties
}

const Shell = (): JSX.Element => {
    const shellWidth = document.documentElement.clientWidth - (SHELL_PADDING * 2);
    const shellHeight = document.documentElement.clientHeight - (SHELL_PADDING * 2);
    const shellBorderWidth = (shellWidth * 2) + (shellHeight * 2);
    const style: ShellStyle = {
        shell: {
            width: shellWidth,
            height: shellHeight
        },
        rect: {
            strokeDasharray: shellBorderWidth,
            strokeDashoffset: shellBorderWidth
        }
    }

    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

    return (
        <div className="shell" style={style.shell}>
            <CSSTransition
                addEndListener={handleAddEnd}
                classNames='animation-stroke'
                appear
                in
                timeout={1500}
            >
                <svg>
                    <rect
                        x="0"
                        y="0"
                        style={style.rect}
                    />
                </svg>
            </CSSTransition>
            <div className="shell_logo stroke-hidder">

            </div>
            <div className="shell_language stroke-hidder">
                
            </div>
            <div className="shell_contact-btn stroke-hidder">
                
            </div>
            <NavBar />
        </div>
    );
}

export default Shell;