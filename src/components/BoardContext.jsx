/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useReducer } from "react";
import { useContext } from "react";
import { boardReducer, initialBoard } from "../boardReducer";



export const BoardContext = createContext();

export function useBoard(){
    return useContext(BoardContext);
}
export function BoardProvider({children}){
    const [state, dispatch] = useReducer(boardReducer,initialBoard)
    return(
        <BoardContext.Provider value={{state,dispatch}}>
            {children}
        </BoardContext.Provider>
    );
}