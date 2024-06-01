import React from 'react'
// import Todo from '../MyComponents/Todo'
import Todo from './Todo'

const Todos = (props) => {
  let TodoContainerStyle={
        minHeight:"70vh",
        // border:"2px solid blue",
        margin:"40px auto",
  }
  return (
    <div className='container my-3' style={TodoContainerStyle}>
        <h3>Todos List</h3>
        {/* <Todo todo={props.todo[0]}/> */}
        {/* <Todo todo={props.todo[1]}/> */}
        {/* <Todo todo={props.todo[2]}/> */}

       {props.todos.length===0? "No todos to display":
        
          props.todos.map((todo)=>{
             return (
                  <>
                      <Todo todo={todo} key={todo.sn} onDelete={props.onDelete}/><hr/>
                  </>
             )
          })
        }
    </div>
  )
}

export default Todos
