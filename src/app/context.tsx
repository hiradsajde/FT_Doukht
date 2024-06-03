"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/graphql/client";
import { createContext, useReducer , useEffect} from "react";

export const cartContext: any = createContext([]);

export function Provider({ children }: { children: React.ReactNode }) {
  const reducer = (state: any, action: any) => {
    switch (action.do) {
      case "init":
        return {...state , slugs : action.payload}
      case "open":
        return { ...state, open: true };
        
      case "close":
        return { ...state, open: false };
        
      case "add":
        if (state.slugs.includes(action.slug)) {
          return { ...state };
        }
        return { ...state, slugs: [...state.slugs, action.slug] };
        
      case "remove":
        return {...state , slugs : state.slugs.splice(state.slugs.indexOf(action.slug), 1)};
        
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, { slugs: [], open: false });
  useEffect(() => {
    if(JSON.parse(sessionStorage.getItem('cart') || "{}")){
      dispatch({do:'init' , payload:JSON.parse(sessionStorage.getItem('cart') || "{}")})
    }
  } , [])
  useEffect(() => {
    sessionStorage.setItem('cart' , JSON.stringify(state.slugs))
  } , [state])
  return (
    <ApolloProvider client={client}>
      <cartContext.Provider value={[state, dispatch]}>
        {children}
      </cartContext.Provider>
    </ApolloProvider>
  );
}
