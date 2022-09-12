import React, { useState } from "react";

export const GeneralContext = React.createContext({});

export const GeneralProvider = (props) => {
    const [token, setToken] = useState(null);
    const [users, setUsers] = useState(null);
    
    //localStorage ...
    //cookies
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