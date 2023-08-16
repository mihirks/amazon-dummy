import React, { Children, createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();


//wrap our app and provide data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


//pull information
export const useStatevalue = () => useContext(StateContext);