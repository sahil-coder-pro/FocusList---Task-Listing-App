import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todoMsg: "todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {}, 
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    deleteAllTodo: () => {}
}) ;

export const useTodo = () => {
    return useContext(TodoContext) ;
}

export const TodoProvider = TodoContext.Provider ;