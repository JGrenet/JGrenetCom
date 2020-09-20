import React, { useContext } from "react";
import LocaleStore from "./LocaleStore";
import TabStore from "./TabStore";

interface Context {
    localeStore: LocaleStore,
    tabStore: TabStore
}

const contextValue: Context = {
    localeStore: new LocaleStore(),
    tabStore: new TabStore()
};
 
export const AppContext = React.createContext<Context>(contextValue);


const useStores = (): Context => {
    return useContext(AppContext);
}

export default useStores;