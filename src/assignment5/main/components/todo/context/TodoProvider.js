// import react and hooks
import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({children}) => {
    // todolist is obtained from todoform using getTodo function
    const [todoList, setTodoList] = useState([]);

    const getTodo = (data) => {
        setTodoList(prev => [...prev,data]);
    }

    // removeTodo function will filter the removed item and update the new todolist
    const removeTodo = (data) => {
        let updatedList = todoList.filter((element)=>element!==data);
        setTodoList(updatedList);
    }

    return (
        <TodoContext.Provider value={{todoList, getTodo, removeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider;