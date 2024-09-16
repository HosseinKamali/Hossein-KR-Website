import { createContext, useContext,useState } from "react";
import { titleNavbar } from "../../data/data";


const AppContext = createContext()

export const useAppContext=()=>{
    return useContext(AppContext)
}

export const AppProvider = ({children})=>{

    const[title,setTitle]=useState(titleNavbar)

  const [ isOpenMenue , setIsOpenMenu]=useState(false)

    return(
        <AppContext.Provider
         value={{
            title,
            setTitle,
            isOpenMenue,
            setIsOpenMenu
         }}>
            {children}
        </AppContext.Provider>
    )
}