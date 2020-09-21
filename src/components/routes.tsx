import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import useStores from "../stores";

const Routes = observer((): JSX.Element => {
    const { tabStore } = useStores();
    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                addEndListener={handleAddEnd}
                classNames='animation-fade'
                key={tabStore.selectedtab}
                timeout={500}
            >
                    {tabStore.getTabComponent()}
            </CSSTransition>
        </SwitchTransition>
    );
})

export default Routes;