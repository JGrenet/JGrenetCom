import React, { useContext } from "react";
import LocaleStore from "./LocaleStore";

interface Context {
    localeStore: LocaleStore
}

const contextValue: Context = {
    localeStore: new LocaleStore(),
};
 
export const AppContext = React.createContext<Context>(contextValue);


const useStores = (): Context => {
    return useContext(AppContext);
}

export default useStores;