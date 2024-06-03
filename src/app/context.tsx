"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/graphql/client";
import { createContext, useReducer , useEffect} from "react";

export const cartContext: any = createContext([]);

export function Provider({ children }: { children: React.ReactNode }) {
  const reducer = (state: any, action: any) => {
    switch (action.do) {
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
        return {...state , slugs : state.slugs.filter((slug : string) => slug !== action.slug)};
      case "reload":
        return {...state , loaded : true}
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, { slugs: [], open: false , loaded : false});
  useEffect(() => {
    state.slugs = JSON.parse(sessionStorage.getItem('cart') ?? "[]")
    dispatch({do : 'reload'})
  } , [])
  useEffect(() => {
    sessionStorage.setItem('cart' , Array.isArray(state.slugs) ? JSON.stringify([...state.slugs]) : "[]")
  } , [state])
  return (
    <ApolloProvider client={client}>
      <cartContext.Provider value={[state, dispatch]}>
        {children}
      </cartContext.Provider>
    </ApolloProvider>
  );
}
