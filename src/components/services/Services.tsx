import { observer } from "mobx-react-lite";
import React from "react";
import useStores from "../../stores";
import Button from "../button/Button";

const Services = observer(() => {
    const { localeStore } = useStores();
    const appKeys = localeStore.keys;

    return (
        <div className="services">
            
        </div>       
    )
});

export default Services;