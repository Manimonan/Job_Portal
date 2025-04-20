import React, { createContext } from 'react';

export const AppContext = createContext();

export const AppConcextProvier =(props)=>{

    const value ={

    }

    return(
        <AppContext.Provider value ={value}>
            {props.children}
        </AppContext.Provider>
    )
}