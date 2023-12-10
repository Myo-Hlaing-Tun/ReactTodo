import React, { useReducer} from "react";
// import { TodoContext } from "./TodoProvider";

export default function TodoForm(){
    // searchInput is to control search input, todoinput is to control todo input
    // import todoList for list rendering, getTodo is function to get new todolist from todoinput and remove todo is function to remove completed todo lists
    const [searchInput,setSearchInput] = React.useState('');
    const [todoInput,setTodoInput] = React.useState('');
    const [editTodo,setEditTodo] = React.useState('');
    const [isedited,setIsedited] = React.useState(false);

    const todoListReducer = (state,action) => {
        switch(action.type){
            case 'addTodo' : action.payload.preventDefault();
                            return todoInput && [...state,todoInput];
            case 'removeTodo' :  return state.filter((item,index)=> index!==action.payload);
            case 'editTodo' : return state.filter((item,index)=>index!==action.payload);
            case 'updateTodo' : return [...state,editTodo];
            default: return '';
        }
    }

    const [todoList, dispatch] = useReducer(todoListReducer,[]);

    // if todoinput is empty, user can't add blank in todo list. after adding todo, todoinput will be reseted 
    // function addTodo(e){
    //     e.preventDefault();
    //     todoInput && getTodo(todoInput);
    //     setTodoInput('');
    // }
    // function searchTodo is to control searchInput
    function searchTodo(e){
        setSearchInput(e.target.value);
    }
   
    return (
        <>
            <form className="todo">
                <h3><span><i class="fa-solid fa-list"></i></span>Todo App</h3>
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search Todo"
                    className="mb-12"
                    value={searchInput}
                    onChange={searchTodo} />
                <input
                    type="text"
                    id="newTodo"
                    name="newTodo"
                    placeholder="Enter new todo"
                    className="mb-12"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)} />
                <button className="mb-12" onClick={(e) => dispatch({ type: 'addTodo', payload: e })}>Add Todo</button>
                <div>
                    <h3 className="list-title"><span><i class="fa-solid fa-list"></i></span>Our Todo List</h3>
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
                        todoList.map((item, index) => {
                            return (
                                item.indexOf(searchInput) > -1 &&
                                <span className="flex" key={index}>
                                    <p className="search">{item}</p>
                                    <section>
                                        <i className="fa-regular fa-pen-to-square" onClick={()=>{setEditTodo(item)
                                                                                                setIsedited(!isedited)
                                                                                                dispatch({type: 'editTodo', payload: index})}}></i>
                                        <i className="fa-solid fa-trash" onClick={() => dispatch({ type: 'removeTodo', payload: index })}></i>
                                    </section>
                                </span>
                            )
                        })}
                </div>
            </form>
            {
                isedited &&
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input
                        type="text"
                        id="editTodo"
                        name="editTodo"
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                    />
                    <button onClick={()=> {setIsedited(!isedited) 
                                    dispatch({type: 'updateTodo', payload: editTodo})}}>Update Todo List</button>
                </form>
            }
           
        </> 
    )
}