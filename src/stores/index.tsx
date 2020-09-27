import React, { useContext } from "react";
import LocaleStore from "./LocaleStore";
import ResponsiveStore from "./ResponsiveStore";
import TabStore from "./TabStore";

interface Context {
    localeStore: LocaleStore,
    tabStore: TabStore,
    responsiveStore: ResponsiveStore
}

const contextValue: Context = {
    localeStore: new LocaleStore(),
    tabStore: new TabStore(),
    responsiveStore: new ResponsiveStore()
};

export const AppContext = React.createContext<Context>(contextValue);


const useStores = (): Context => {
    return useContext(AppContext);
}

export default useStores;