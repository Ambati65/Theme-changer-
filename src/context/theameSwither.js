import React ,{useContext,createContext} from "react";

export const Theame=createContext({
    theame:"light",
    darkTheame: ()=>{},
    LightTheame:()=>{},
})

export const ThemeProvider=Theame.Provider;

export default function useTheame(){
    return useContext(Theame);
}

