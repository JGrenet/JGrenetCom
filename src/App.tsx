import React, { useState, useEffect, useCallback } from "react";
import Loader from "./components/loader/Loader";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Shell from "./components/shell/Shell";
import useStores from "./stores";

const App = (): JSX.Element  => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { tabStore } = useStores();
    const [scrollDisabled, setScrollDisabled] = useState(false);
    
    useEffect(() => {
        // Fake Loading
        (async () => setTimeout(() => {
            setIsLoaded(true);
        }, 4000))();
    }, [setIsLoaded]);

    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

    const handleScroll = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
        if (!scrollDisabled) {
            setScrollDisabled(true);
            if (event.deltaY > 0) {
                tabStore.goNextTab();
            } else {
                tabStore.goPreviousTab();
            }
            setTimeout(() => {
                setScrollDisabled(false);
            }, 500)
        }
    }, [tabStore, scrollDisabled, setScrollDisabled]);

    return (
        <div className="app" onWheel={handleScroll} >
            <SwitchTransition mode="out-in">
                <CSSTransition
                    addEndListener={handleAddEnd}
                    classNames='animation-fade'
                    key={isLoaded ? "loading" : "loaded"}
                    timeout={500}
                >
                    <>
                        {!isLoaded && <Loader />}
                        {isLoaded && <Shell />}
                    </>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}
    
export default App;
    