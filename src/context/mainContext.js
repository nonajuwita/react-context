// import { createContext } from "react";

// export const mainContext = createContext({
//     empty:true,
// });

import React, {Component, createContext} from "react";



export const MainContext = createContext();

class MainContextProvider extends Component{

    state = {
       
        name: "nona",
        avatar:"https://reqres.in/img/faces/8-image.jpg"
    };

   
    render() {

        const mainContextValue={
            data: this.state
        }
        return(
            <MainContext.Provider
            value={mainContextValue}
            >
              {this.props.children}  
            </MainContext.Provider>
        )
    }

}

export default MainContextProvider;