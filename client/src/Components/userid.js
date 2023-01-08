import { createContext, useState } from 'react';

const UseridContext = createContext({});

export const UseridProvider = ({ children }) => {
    const [userid, setUserid] = useState({});

    return (
        <UseridContext.Provider value={{ userid, setUserid }}>
            {children}
        </UseridContext.Provider>
    );
};

export default UseridContext;
