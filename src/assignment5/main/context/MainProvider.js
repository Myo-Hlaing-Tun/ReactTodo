// import React and hooks
import React, { createContext, useState } from 'react';

export const MainContext = createContext();

const MainProvider = ({children}) => {
    // pageContent is obtained from navbar page using getTopic function
    const [pageContent, setPageContent] = useState(null);

    const getTopic = (data) => {
        setPageContent(data);
    }

    return (
        <MainContext.Provider value={{pageContent, getTopic}}>
            {children}
        </MainContext.Provider>
    )
}
export default MainProvider;