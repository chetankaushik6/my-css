 import React, { useState } from 'react'
  
const AddTodo = (props) => {
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const submit=(e)=>{
       e.preventDefault();

       if(!title || !desc){
          alert('title or description cannot be blank!');
       }
       else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
       }
       
  }
  return (
    <div className='container my-3'>
      <h3>Add Todo</h3> 
       <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-sn btn-success">Add Todo</button>
</form> 
    </div>
  )
}

export default AddTodo
