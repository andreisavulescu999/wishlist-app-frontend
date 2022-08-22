import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../App";
import RegisterForm from "./auth/RegisterForm";
import LoginForm from "./components/auth/LoginForm";

const User = () => {
    
    return (
        <div>
            <p> User is this.
                </p>
        </div>
    )
}


const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/home" element={<App/>} />
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/register" element={<RegisterForm/>} />
                <Route path="/user" element={<User />}>
                        <Route path="/:id" element={<User />} >
                            <Route path="/edit" element={<LoginForm/>} />
                            {/* <Route path="/delete" element={<LoginForm/>} /> */}
                        </Route>
                </Route>
                <Route path="/group" element={<User />}>
                        <Route path="/:id" element={<User />} >
                            <Route path="/edit" element={<LoginForm/>} />
                            {/* <Route path="/delete" element={<LoginForm/>} /> */}
                        </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;