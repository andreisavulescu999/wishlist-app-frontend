import React, { useState } from "react";

export const GeneralContext = React.createContext({});

export const GeneralProvider = (props) => {
    const [token, setToken] = useState(null);
    const [users, setUsers] = useState(null);
    
    if((users) && (token))
    {
        localStorage.setItem('User',users);
        localStorage.setItem('token',token);
    }
    else
    {
        if(localStorage.getItem('token',token) && (localStorage.setItem('User',users)))
        {
            setToken(localStorage.getItem('token',token));
            setUsers(localStorage.setItem('User',users));
        }
    }
    
    return (
        <GeneralContext.Provider
            value={{
                token,
                setToken,
                users,
                setUsers,
            }}
        >
            {props.children}
        </GeneralContext.Provider>
    );
};

// export default {GeneralContext};