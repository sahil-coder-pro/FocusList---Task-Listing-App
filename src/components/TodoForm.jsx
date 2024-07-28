import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {

    const [todo, setTodo] = useState("");
    const { addTodo, deleteAllTodo } = useTodo();

    const handleFormSubmission = (e) => {
        e.preventDefault();
        
        // Check if the todo is empty
        if (todo) addTodo({ completed: false, todoMsg: todo });
        
        // Empty the input field
        setTodo(""); 
    }


    return (
        <div>
            <div className='flex '>
                <form onSubmit={handleFormSubmission} className="flex w-full">
                    <input
                        type="text"
                        placeholder="Add a new task"
                        className=" w-full border border-black/10 rounded-l-lg px-4 outline-none duration-150 bg-white/20 py-2 text-2xl placeholder:text-white/80"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="submit"
                        className="rounded-r-lg px-3 py-1 bg-white/55   text-white shrink-0"
                    >
                        ➕
                    </button>
                </form>
            </div>
            <div className='text-center'>
                <button className='mt-6  text-lg bg-white/30 px-8 py-2 rounded-3xl text-white     '
                onClick={deleteAllTodo}
                >
                    Clear All Tasks
                </button>
            </div>
        </div>

    );
}

export default TodoForm;
