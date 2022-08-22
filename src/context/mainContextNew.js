import React, {Children, createContext, useState } from "react";

export const MainContextNew = createContext()

const MainContextNewProvider = (props) =>{
    const state ={
        name: "nona",
        avatar:"https://reqres.in/img/faces/8-image.jpg"
        
    }
const mainContextValue={
        data:state
    }

    return (
      
        <MainContextNew.Provider value={mainContextValue} >
            {props.children}
        </MainContextNew.Provider>

    )
}

export default MainContextNewProvider;