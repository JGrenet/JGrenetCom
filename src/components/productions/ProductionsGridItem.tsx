import React, { useCallback } from "react";
import clsx from "clsx";

interface ProductionsGridItemProps {
    onSelectItem: (event: React.MouseEvent<HTMLImageElement, MouseEvent>, itemIndex: number) => void;
    index: number;
    selectedItem: boolean;
    logoPath: string;
}

export const ProductionsGridItem = ({
    onSelectItem,
    index,
    selectedItem,
    logoPath
}: ProductionsGridItemProps): JSX.Element => {

    const handleClick = useCallback((event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        onSelectItem(event, index);
    }, [index, onSelectItem])

    return (
        <div
            className={clsx(
                "productions-grid_item",
                {["productions-grid_item--selected"]: selectedItem}
            )}
            onClick={handleClick}
        >
            <img
                className="productions-grid_item__logo"
                src={logoPath}
                alt="company logo"
            />
        </div>
    )
}