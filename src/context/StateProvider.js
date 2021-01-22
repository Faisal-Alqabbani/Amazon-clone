import React, { useReducer, useContext, createContext } from "react";

// prepares the datalayer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//  pull information from the dataLayer. let's very easy.

export const useStateValue = () => useContext(StateContext);
