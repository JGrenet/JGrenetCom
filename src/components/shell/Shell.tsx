import React, { useLayoutEffect} from "react";
import useStores from "../../stores";
import { observer } from "mobx-react-lite";
import DesktopShell from "./DesktopShell";
import MobileShell from "./MobileShell";

const Shell = observer((): JSX.Element => {
    const { responsiveStore } = useStores();

    useLayoutEffect(() => {
        window.addEventListener("resize", () => responsiveStore.updateResponsive());
        window.addEventListener("resize", () => responsiveStore.computeShellDimensions());

        return () => {
            window.removeEventListener("resize", () =>  responsiveStore.updateResponsive());
            window.removeEventListener("resize", () =>  responsiveStore.computeShellDimensions());
        }
    }, [responsiveStore]);

    if (responsiveStore.isMobile) {
        return <MobileShell />;
    }

    return <DesktopShell />;
});

export default Shell;