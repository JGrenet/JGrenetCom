import { observer } from "mobx-react-lite";
import React, { useCallback, useMemo } from "react";
import clsx from "clsx";

interface ServiceItemProps {
    index: number;
    img: string;
    content: string;
    selected: boolean;
    selectItem: (index: number) => void;
    title: string;
}

const ServiceItem = observer(({
    index,
    img,
    title,
    content,
    selected,
    selectItem
}: ServiceItemProps) => {
    
    const handleHover = useCallback(() => {
        selectItem(index);
    }, [selectItem, index]);

    const imgUrl = useMemo(() => selected ? img + "_selected.png" : img + ".png",
        [selected, img]
    );

    return (
        <div
            className={clsx(
                "services-list_item",
                {["services-list_item--selected"]: selected}
            )}
            onMouseOver={handleHover}
        >
            <div className="services-list_item__icon">
                <img src={imgUrl} alt="service_icon" />
                <span>{title}</span>
            </div>
            <div className="services-list_item__separator" />
            <p className="services-list_item__content" dangerouslySetInnerHTML={{__html: content}} />
        </div>
    )
});

export default ServiceItem;