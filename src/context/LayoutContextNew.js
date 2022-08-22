import React, { createContext, useState } from "react";



    export const LayoutContextNew = createContext()
    const LayoutContextNewProvider = (props) => {
    const [data, setData] = useState(
        {
            nightmode: false,
        day: {
            color:"#000",
            background:"red",
        },
        night: {
            color:"#fff",
            background:"#000"
        },
        }


    )

    const handleToggle = () => {
        setData((prevState) => ({...prevState,nightmode:!data.nightmode}))
    }

    return(
        <LayoutContextNew.Provider value={{...data,handleToggle}}>
            {props.children }
        </LayoutContextNew.Provider>
    )
    
}
export default LayoutContextNewProvider;