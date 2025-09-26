import React from 'react'
import { useBoard } from './BoardContext'

export default function Trash(){
     const { dispatch } = useBoard();

     const handleDrop = (e) => {
        e.preventDefault();
        const task = e.dataTransfer.getData("task")
        const sourceCol = e.dataTransfer.getData("sourceCol");
        if(task && sourceCol){
            dispatch({
                type: "DELETE_TASK",
                payload: { sourceCol, task }
            })
        }
     };
     const handleDropOver = (e) =>{
        e.preventDefault();
     }
     return(
        <div className='trash'
        onDrop={handleDrop}
        onDragOver={handleDropOver}
        >
            <p className='head'> Delete</p>
            
        </div>
     )
}
