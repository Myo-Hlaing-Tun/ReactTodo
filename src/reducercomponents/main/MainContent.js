import React, { useContext } from "react";
import { MainContext } from "./MainProvider";
import Temperature from "../temperature/Temperature";
import RegisterForm from "../register/RegisterForm";
import TodoForm from "../todo/TodoForm";

// this is the page showing the main form and boxes
export default function MainContent(){
    const {pageContent} = useContext(MainContext);
    return (
        <main>
            {/* if the user click the navtab, the corresponding page will be displayed. If the user clicks nothing, nothing will be shown */}
            {
                pageContent === "Todo" ? <TodoForm/> :
                pageContent === "Form" ? <RegisterForm/> : 
                pageContent === "Temperature" ? <Temperature/> : ''
            } 
        </main>
    )
}