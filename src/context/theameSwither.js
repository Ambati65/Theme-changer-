import React ,{useContext,createContext} from "react";

export const Theame=createContext({
    theameMode:"light",
    darkTheame: ()=>{},
    LightTheame:()=>{},
})

export const ThemeProvider=Theame.Provider;

export default function useTheame(){
    return useContext(Theame);
}

