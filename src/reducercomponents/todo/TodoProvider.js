// import React, { createContext, useReducer, useState } from "react";

// export const TodoContext = createContext();

// const TodoProvider = ({children}) => {
//     // todolist is obtained from todoform using getTodo function
//     const todoListReducer = (state,action) => {

//     }

//     const [todoList, dispatch] = useReducer(todoListReducer,[]);
//     const getTodo(data) => dispatch{type: getTodo}

//     // removeTodo function will filter the removed item and update the new todolist
//     const removeTodo = (data) => {
//         let updatedList = todoList.filter((name,index)=>index!==data);
//         setTodoList(updatedList);
//     }

//     return (
//         <TodoContext.Provider value={{todoList, getTodo, removeTodo}}>
//             {children}
//         </TodoContext.Provider>
//     )
// }
// export default TodoProvider;