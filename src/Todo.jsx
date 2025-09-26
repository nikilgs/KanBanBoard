import React, { useState } from 'react'

const Todo = () => {
    const [button, setButton] = useState("");
   

    const handleChange = (e) => setButton(e.target.value);

                        
  return (
    <div>
     <center><h1>KanBan Board</h1>
      <input  className= 'a'type="text" placeholder='Add new task' onClick={handleChange} />
      <button className='b' onClick={button}>Add</button></center> 
      {/* <div className='todo'>To DO</div>
      <div className='process'>In Process</div>
      <div className='Done'>Done</div>
      <div className='trash'>Trash</div> */}
    </div>
  )
}

export default Todo
