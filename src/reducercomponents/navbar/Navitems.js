import React, { useContext, useState } from "react";
import { MainContext } from "../main/MainProvider";

export default function Navitems(){
    // list is used for rendering in navbar 
    let list = ["Todo", "Form", "Temperature"];
    // topic is used to get which item was clicked by user in navtab and display them
    const [topic, setTopic] = useState('');
    // the main provider creates maincontext and it controls which page will be displayed(todo or temperature converter,etc.)
    const {getTopic} = useContext(MainContext);

    // clickTab function is for clicking the navtab in navbar
    // after clicking the clicked tab will get class active and others will get no class
    // active class will underline the clicked tab and getTopic function will pass topic data to main page 
    const clickTab= (e) => {
        setTopic(e.target.innerHTML);
        for(let i=0; i< e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].className = '';
        }
        e.target.className = "active";
        getTopic(e.target.innerHTML);
    }
    
    return(
        <div className="main">
            <header>
                {/* the clicked tab will be displayed on top of the page */}
                <h1>{topic}</h1>
                {/* the global theme switch label is written here */}
                <p>Theme Switch</p>
            </header>
            <nav className='header navbar'>
                <ul>
                    {list.map((name,index)=>{
                        return <li 
                        key={index} 
                        onClick={clickTab}
                    >{name}</li>
                    })}
                </ul>
            </nav>
        </div>   
    )
}