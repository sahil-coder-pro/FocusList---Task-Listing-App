  import { useEffect, useState } from 'react';
  import {TodoProvider, useTodo} from './contexts';
  import { TodoForm, TodoItem } from './components';
  import './App.css'


  function App() {
    const [todos, setTodos] = useState([]) ;

    const addTodo = (todo) => {
      if (todos.filter((todoInArr) => todoInArr.todoMsg === todo.todoMsg).length === 1) alert("a todo with same data already exists")
        
      else setTodos([{id: Date.now(), ...todo}, ...todos]) ;
    }

    const updateTodo = (id, updatedTodo) => {
      // todos.filter((todoInArr) => todoInArr.id === id)[0].todoMsg = updatedTodoMsg ;
      setTodos(todos.map((todoInArr) => todoInArr.id === id ? updatedTodo : todoInArr)) ;
    }

    const deleteTodo = (id) => {
      setTodos(todos.filter((todoInArr) => todoInArr.id !== id));
    }

    const toggleComplete = (id) => {
      setTodos(todos.map((todoInArr) => todoInArr.id === id ? {...todoInArr, completed: !todoInArr.completed} : todoInArr))
    }

    const deleteAllTodo = () => {
      setTodos([]) ;
    }

    
    
      // retrieve todos from localStorage
      useEffect(() => {
        // console.log("todos", localStorage.getItem("todos")) ;
        const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos")) ; 
        if (todosFromLocalStorage && todosFromLocalStorage.length > 0) {
          setTodos(todosFromLocalStorage) ;
        }
      }, [])
      
      // save todos to local storage
      useEffect(() => {
        // console.log("saving")
        localStorage.setItem("todos", JSON.stringify(todos)) ;
        // console.log("retrival", localStorage.getItem("todos"))
      }, [todos])
      
    

    return (
      <TodoProvider value = {{todos, addTodo, deleteTodo, toggleComplete, updateTodo, deleteAllTodo}}>
        <div className=' p-12 pt-16 pb-0  bg-main-page-bg2 bg bg-no-repeat bg-cover   relative h-screen overflow-hidden  '>

          {/* <div className="absolute w-full h-96  p-5 bg-white top-0 left-0 bg-white/5 rounded-full"></div> */}

          <div className=" bg-white/35 backdrop-blur-xl min-h-screen py-8 rounded-t-3xl h-full overflow-y-scroll shadow-2xl no-scrollbar">

            <div className="w-full max-w-3xl mx-auto rounded-lg px-4 py-3 text-white ">
              <h1 className="text-6xl font-bold text-center mt-2">Welcome to <span className='text-7xl bg-clip-text bg-gradient-to-t from-[#4b06df] to-[#d316f0] text-white/0'>Focus List </span></h1>
              <h2 className="text-2xl  text-center mt-3 mb-8 text-white/80">Add your focus tasks and strive to accomplish them.</h2>

              <div className="mb-4 ">
                {/* Todo form goes here */}
                <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3  ">
          
                {/*Loop and Add TodoItem here */}
              
                {
                  todos.map((todoInArr) => {
                    // console.log("just before sending", todoInArr) ;
                    return <div className='w-full'>

                      <TodoItem key = {todoInArr.id} todo = {todoInArr}/>
                    </div>
                    })
                }
              </div>
            </div>
          </div>
        </div>

        

      </TodoProvider>
    )
  }

  export default App
