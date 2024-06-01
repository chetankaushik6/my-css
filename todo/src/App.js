import './App.css';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
// import Todo from './MyComponents/Todo';
import { useState,useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import { 
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link, 
} from 'react-router-dom';
import About from './MyComponents/About';

function App() {
  let initTodo;
     if(localStorage.getItem("todos")===null){
        initTodo = [];
     }
     else{
       initTodo =JSON.parse(localStorage.getItem("todos"));
     }

   const [todos,setTodos]=useState([initTodo]);
   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
   },[todos]);


   

   const onDelete=(todo)=>{
       console.log('deleted of todo',todo);
      //  let index =todos.indexOf(todo);
      // todos.splice(index,1);
   
             setTodos(todos.filter((e)=>{
                 return e!==todo;
             }))

            //  localStorage.getItem('todos',JSON.stringify(todos));
            localStorage.setItem("todos",JSON.stringify(todos));
    }

    const addTodo=(title,desc)=>{
      console.log('I am adding this todo',title,desc);
      let sn;
      if(todos.length===0){
        sn=1;
      }
      else{
        // sn=todos[todos.length-1].sn + 1;
        sn=todos[todos.length-1].sn + 1;
      }
      
      const myTodo={
           sn:sn, 
           title:title,
           desc:desc,
      }
      setTodos([...todos,myTodo]);
      console.log('.....',myTodo);

                   
       
    }

  return (
            <Router>
                     <Header title='About'/>
                      
                       <Routes>
                           <Route exact path="/" element={ 
                            
                                <>
                                      <AddTodo addTodo={addTodo}/>
                                     <Todos todos={todos} onDelete={onDelete}/>
                                </>
                            }/>

                           <Route exact path="/about" element={<About/>}/>
                              
                          
                       </Routes>
                     
                      
                       {/* <Switch>
                           <Route exact path='/' render={()=>{
                              return (
                                <>
                                   <AddTodo addTodo={addTodo}/>
                                   <Todos todos={todos} onDelete={onDelete}/>          
                                </>
                              )
                           }}></Route>
                           <Route path='/About'>
                                 <About/>
                            </Route>
                           
                       </Switch> */}
                    
                             
                     <Footer/>
            </Router>
  );
}

export default App;
