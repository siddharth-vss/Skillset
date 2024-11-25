import React, { useContext, useState } from "react";


const AppContext = React.createContext<any>(null);


const AppProvider = ({children}:{children :any})=>{

    const [Show, setShow] = useState(false);
    const [Mode, setMode] = useState('dark')
    const ToggleShow = ()=>{
        setShow(!Show);
    }
    const ToggleMode = ()=>{
        if(Mode === 'dark'){
            setMode('light');
        }else{
            setMode('dark');
        }
    }
    return(
        <AppContext.Provider value={{
            Show,
            Mode,
            ToggleShow,
            ToggleMode
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext);
  };

export {AppProvider};