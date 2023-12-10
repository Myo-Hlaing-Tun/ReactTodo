// import React and hooks
import React, { useContext } from "react";
// import context
import { MainContext } from "./context/MainProvider";
// import components
import Temperature from "./components/temperature/Temperature";
import RegisterForm from "./components/register/RegisterForm";
import TodoForm from "./components/todo/TodoForm";

// this is the page showing the main form and boxes
export default function MainContent(){
    const {pageContent} = useContext(MainContext);
    return (
        <main>
            {/* animated words which will appear and disappear over time */}
            <div className="mainAnimation1 twinkle">
                <p className="todoAnimation">Todo</p>
                <p className="registerAnimation">Register</p>
                <p className="temperatureAnimation">T Converter</p>
            </div>
            <div className="mainAnimation2 twinkle">
                <p className="todoAnimation">Todo</p>
                <p className="registerAnimation">Register</p>
                <p className="temperatureAnimation">T Converter</p>
            </div>
            <div className="mainAnimation3 twinkle">
                <p className="todoAnimation">Todo</p>
                <p className="registerAnimation">Register</p>
                <p className="temperatureAnimation">T Converter</p>
            </div>
            <div className="mainAnimation4 twinkle">
                <p className="todoAnimation">Todo</p>
                <p className="registerAnimation">Register</p>
                <p className="temperatureAnimation">T Converter</p>
            </div>
            <div className="mainAnimation5 twinkle">
                <p className="todoAnimation">Todo</p>
                <p className="registerAnimation">Register</p>
                <p className="temperatureAnimation">T Converter</p>
            </div>
            <div className="mainAnimation6 twinkle">
                <p className="todoAnimation">Todo</p>
                <p className="registerAnimation">Register</p>
                <p className="temperatureAnimation">T Converter</p>
            </div>
            <div className="mainAnimation7 twinkle">
                <p className="todoAnimation">Todo</p>
                <p className="registerAnimation">Register</p>
                <p className="temperatureAnimation">T Converter</p>
            </div>
            {/* if the user click the navtab, the corresponding page will be displayed. If the user clicks nothing, nothing will be shown */}
            {
                pageContent === "Todo" ? <TodoForm/> :
                pageContent === "Form" ? <RegisterForm/> : 
                pageContent === "Temperature" ? <Temperature/> : ''
            } 
        </main>
    )
}