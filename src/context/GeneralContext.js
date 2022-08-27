import React, { useState } from "react";
import Layout from "../components/layout/Layout";
const GeneralContext = React.createContext();

const GeneralProvider = props => {
    const [token, setToken] = useState(null);
    const [users, setUsers] = useState([]);

    return (
        <>
         <Layout>
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
        </Layout>
        </>

    );
};

export { GeneralContext, GeneralProvider };