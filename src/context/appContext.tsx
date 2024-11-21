import React, { useContext, useState } from "react";


const AppContext = React.createContext<any>(null);


const AppProvider = ({children}:{children :any})=>{

    const [Show, setShow] = useState(false);
    const ToggleShow = ()=>{
        setShow(!Show);
    }
    return(
        <AppContext.Provider value={{
            Show,
            ToggleShow,
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext);
  };

export {AppProvider};