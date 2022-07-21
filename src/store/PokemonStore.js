import React, { useState, createContext } from "react";

const pokemonState = [];

export const Context = createContext();

const Store = ({ children }) => {
    const [ state, setState ] = useState(pokemonState);

    return(
        <Context.Provider value={[ state, setState ]} >
            { children }
        </Context.Provider>
    )
}

export default Store;