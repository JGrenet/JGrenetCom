import { observer } from "mobx-react-lite";
import React from "react";
import clsx from "clsx";
import Logo from "../logo/Logo";
import useStores from "../../stores";

interface TimelineItemProps {
    year: string | string[];
    logo?: string;
    bottom: number;
    label: string;
    applogo?: boolean;
}

const TimelineItem = observer(({
    year,
    logo,
    bottom,
    label,
    applogo = false
}: TimelineItemProps): JSX.Element => {
    const { responsiveStore } = useStores();
    const yearLength = Array.isArray(year) ?
        (parseInt(year[1]) - parseInt(year[0])) : 1;

    return (
        <div
            className="timeline-item"
            style={{
                bottom: `${bottom}%`,
                height: responsiveStore.shellWidth <= 1100 ? yearLength * 30 : yearLength * 50
            }}
        >
            {!applogo && logo && (
                <img
                    className="timeline-item_logo"
                    alt="experience_logo"
                    src={logo}
                />
            )}
            {applogo && (
                 <Logo
                    size={40}
                    wordMark={!responsiveStore.isMobile}
                    variant="white"
                    className="timeline-item_logo"
                />
            )}
            <div className={clsx(
                "timeline-item_point",
                {
                    ["timeline-item_point--single"]: yearLength === 1,
                    ["timeline-item_point--multiple"]: yearLength > 1,
                }
            )} />
            {yearLength === 1 && (
                <div className="timeline-item_arrow">
                    <div className="timeline-item_arrow__year">
                        {year}
                    </div>
                </div>
            )}
            {yearLength > 1 && (
                <div className="timeline-item_arrows">
                    <div className="timeline-item_arrow">
                        <div className="timeline-item_arrow__year">
                            {year[0]}
                        </div>
                    </div>
                    <div className="timeline-item_arrow">
                    <div className="timeline-item_arrow__year">
                            {year[1]}
                        </div>
                    </div>
                </div>
            )}
            <div className="timeline-item_name">{label}</div>
        </div>
    );
})

export default TimelineItem;