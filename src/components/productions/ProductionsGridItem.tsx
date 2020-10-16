import React from "react";
import clsx from "clsx";

interface ProductionsGridItemProps {
    onSelectItem: () => void;
    selectedItem: boolean;
}

export const ProductionsGridItem = ({
    onSelectItem,
    selectedItem
}: ProductionsGridItemProps): JSX.Element => {
    return (
        <div
            className={clsx(
                "productions-grid_item",
                {["productions-grid_item--selected"]: selectedItem}
            )}
            onClick={onSelectItem}
        >
            <div className="productions-grid_item__logo"></div>
        </div>
    )
}