import React, { createContext, useState } from "react";

// setting the themecontext for theme switch
export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('black');

    // switchTheme function will be passed to themebutton page and clicking button will switch between dark and light theme
    // after switching the dark theme, the text color should be white. for ease of changing text color in css, set id to control text color in css
    const switchTheme = () => {
        document.getElementById('root').style.backgroundColor = theme;
        document.querySelector("div.App").setAttribute("id",theme);
        setTheme(prev => prev === 'black' ? 'white' : 'black');
    }
    // passing theme and switchTheme to other pages
    return(
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;