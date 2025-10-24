import { createContext, useState } from "react";


export const StuContext = createContext
export const StuProvider = ({children})=>{
    const [student, setStudent] = useState({
        id:123,
        name:"linda", 
        gender:"Female",
        address:"Kampot"
    })
    return (
        <StuContext.Provider value={{student, setStudent}}>
            {children}
        </StuContext.Provider>
    )
}