"use client"

import { createContext, useState } from 'react';

export const ContextName = createContext();

const Context = ({ children }) => {

    const [allProduct, setAllProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    

    const contextValue = {allProduct, setAllProduct,loading, setLoading}
    
    return (
        <ContextName.Provider value={contextValue}>
            {children}
        </ContextName.Provider>
    );
};

export default Context;