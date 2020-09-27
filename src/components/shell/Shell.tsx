import React, { useLayoutEffect} from "react";
import useStores from "../../stores";
import { observer } from "mobx-react-lite";
import DesktopShell from "./DesktopShell";
import MobileShell from "./MobileShell";

const Shell = observer((): JSX.Element => {
    const { responsiveStore } = useStores();

    useLayoutEffect(() => {
        window.addEventListener("resize", () => responsiveStore.updateResponsive());

        return () => {
            window.removeEventListener("resize", () =>  responsiveStore.updateResponsive());
        }
    }, [responsiveStore]);

    if (responsiveStore.isMobile) {
        return <MobileShell />;
    }

    return <DesktopShell />;
});

export default Shell;