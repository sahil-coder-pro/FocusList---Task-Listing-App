import React, { useRef, useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
    // console.log("just after reaching", todo) ;
    // console.log("data in todo", todo.todoMsg) ;

    const [isTodoEditable, setIsTodoEditable] = useState(false) ;
    const [todoMsg, setTodoMsg] = useState(todo.todoMsg) ;

    // console.log("in todoitem", todoMsg) ;

    // const [todoCompleted, setTodoCompleted] = useState(todo.completed) ;

    // const todoDivRef = useRef() ;

    const {deleteTodo, toggleComplete, updateTodo} = useTodo() ;

    const editTodo = () => {
        // console.log(e.target) ;
        // console.log(todoMsg) ;

        // updateTodo()
        updateTodo(todo.id, {...todo, todoMsg: todoMsg})
        // console.log(onUpdateContent.current.id );
        
        
        setIsTodoEditable(false);
    }



    return (
        <div
            id={todo.id}
            // ref={todoDivRef}
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-white/20" : "bg-white/50"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                // value={todoCompleted}
                checked={todo.completed}
                onChange={() => {
                    // setTodoCompleted(!todoCompleted) ; // this is for dom updation
                    if (!isTodoEditable) toggleComplete(todo.id) ; // this was for todos state updation
                    else alert("first save the changes in the todo")
                }}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 bg-gray-50 justify-center items-center hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={(e) => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo(e);
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;