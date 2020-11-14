import React, { useState, useEffect, useCallback } from "react";
import Loader from "./components/loader/Loader";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Shell from "./components/shell/Shell";
import useStores from "./stores";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react-lite";

const App = observer((): JSX.Element  => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { tabStore, localeStore } = useStores();
    const [scrollDisabled, setScrollDisabled] = useState(false);

    const appKeys = localeStore.keys;
    
    useEffect(() => {
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
            <Helmet>
                <title>{appKeys["SITE_META_TITLE"]}</title>
                <meta name="description" content={appKeys["SITE_META_DESCRIPTION"]} />
            </Helmet>
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
});
    
export default App;
    