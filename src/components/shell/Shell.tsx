import React, { CSSProperties, useCallback } from "react";
import { CSSTransition } from "react-transition-group";

type ShellStyle = {
    [key: string]: CSSProperties
}

interface ShellProps {

}

const Shell = ({}: ShellProps) => {
    const shellWidth = document.documentElement.clientWidth - 200;
    const shellHeight = document.documentElement.clientHeight - 200;
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
        </div>
    );
}

export default Shell;