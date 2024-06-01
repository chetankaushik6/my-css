import React from 'react'

const Todo = ({todo,onDelete}) => {
  return (
    <div>
       <h4>{todo.sn }</h4>
       <h3>{todo.title}</h3>
       <p>{todo.desc}</p>
        {/* <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>Delete</button> */}
        {/* <button className='btn btn-sm btn-danger' onClick={onDelete}>Delete</button> */}
    
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    
    </div>
  )
}

export default Todo;
