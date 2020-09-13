import React, { useState, useEffect, useCallback } from "react";
import Loader from "./components/loader/Loader";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Shell from "./components/shell/Shell";

interface AppProps {}

const App = ({}: AppProps)  => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Fake Loading
        (async () => setTimeout(() => {
            setIsLoaded(true);
        }, 4000))();
    }, [setIsLoaded]);

    const handleAddEnd = useCallback((node, done) => {
        node.addEventListener("transitionend", done, false);
    }, []);

    return (
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
    );
}
    
export default App;

{/* https://codesandbox.io/s/aged-fast-xffvp?file=/src/App.js:673-686 */}
// https://coursework.vschool.io/react-transitions-with-react-transition-group/
    