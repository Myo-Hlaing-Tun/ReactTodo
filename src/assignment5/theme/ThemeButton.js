// import React and hook
import React, { useContext } from "react";
// import required context
import { ThemeContext } from "./context/ThemeProvider";

export default function ThemeButton(){
    // theme will be passed from themecontext
    // switchTheme will switch between light and dark theme
    const {theme, switchTheme} = useContext(ThemeContext);
    return(
        <div className="button-dark">
            <div className={theme} onClick={switchTheme}></div>
        </div>
    )
}