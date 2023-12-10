// import react and hook
import React, { useContext, useEffect } from "react";
// import required context
import { TodoContext } from "./context/TodoProvider";

export default function TodoForm(){
    // searchInput is to control search input, todoinput is to control todo input
    // import todoList for list rendering, getTodo is function to get new todolist from todoinput and remove todo is function to remove completed todo lists
    const [searchInput,setSearchInput] = React.useState('');
    const [todoInput,setTodoInput] = React.useState('');
    const {todoList,getTodo,removeTodo} = useContext(TodoContext);

    // if todoinput is empty, user can't add blank in todo list. after adding todo, todoinput will be reseted 
    function addTodo(e){
        e.preventDefault();
        todoInput && getTodo(todoInput);
        setTodoInput('');
    }
    // function searchTodo is to control searchInput
    function searchTodo(e){
        setSearchInput(e.target.value);
            // document.querySelectorAll('p.search')[i].innerHTML = result;
    }

    // whenever search input changes, search key word in the todo list will be highlighted
    useEffect(()=>{
        let result = todoList.filter((item)=>item.includes(searchInput));
        for(let i=0; i<result.length;i++){
            let requierdHTML = result[i].split(searchInput).join(`<span id="yellowLighted">${searchInput}</span>`);
            document.querySelectorAll('p.search')[i].innerHTML = requierdHTML;
        }
    },[searchInput]);
   
    return (
        <form className="todo">
            <h3><span><i className="fa-solid fa-list"></i></span>Todo App</h3>
            <input 
                type="text" 
                id="search" 
                name="search" 
                placeholder="Search Todo"
                className="mb-12"
                value={searchInput}
                onChange={searchTodo}/>
            <input 
                type="text" 
                id="newTodo" 
                name="newTodo" 
                placeholder="Enter new todo" 
                className="mb-12" 
                value={todoInput}
                onChange={(e)=>setTodoInput(e.target.value)}/>
            <button className="mb-12" onClick={addTodo}>Add Todo</button>
            <div>
                <h3 className="list-title"><span><i className="fa-solid fa-list"></i></span>Our Todo List</h3>
                {/* if todoList is empty list will show, list is empty. List rendering is done using todoList from Todocontext */}
                {
                    todoList.length === 0 &&
                    <p>Our List is empty</p>
                }
                {/* if todolist is present, list rendering is done
                if you enter words in searchinput, only todolists containing keyword will be displayed
                there is trash icon in the list and clicking trash icon will remove corresponding todolist */}
                {   
                todoList.length > 0 &&
                todoList.map((item,index)=>{
                    return(
                        item.indexOf(searchInput) > -1 &&
                        <span className="flex" key={index}>
                            <p className="search">{item}</p>
                            <i className="fa-solid fa-trash" onClick={()=>removeTodo(item)}></i>
                        </span>
                    )
                })
            }
            </div>
        </form>
    )
}