// import { createContext } from "react";

// export const mainContext = createContext({
//     empty:true,
// });

import React, {Component, createContext} from "react";



export const mainContext = createContext();

class mainContextProvider extends Component{

    state = {
       
        name: "nona",
        avatar:"https://reqres.in/img/faces/8-image.jpg"
    };

   
    render() {
        return(
            <mainContext.Provider
            value={{...this.state}}
            >
              {this.props.children}  
            </mainContext.Provider>
        )
    }

}

export default mainContextProvider;