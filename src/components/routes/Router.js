import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import RegisterForm from "../auth/RegisterForm.js";
import LoginForm from "../auth/LoginForm.js";
import Product from "../product/Product";
import Wishlist from "../wishlist/Wishlist";
import Chat from '../chat/Chat.js';
import User from '../auth/User.js';
import Profile from "../auth/profile/Profile.js";
import { Home } from "../../pages/Home.js";
import { Products } from "../../pages/Products.js";

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path=''>
                    <Route path='/'        element={<Home/>} />
                    <Route path='/login'  element={<LoginForm/>} />
                    <Route path='/register' element={<RegisterForm/>} />
                    <Route path='/profile'  element={<Profile/>} />
                    <Route path='/products' element={<Products/>} />
                    <Route path='/product/:id' element={<Product/>} />
                    <Route path='/wishlists' element={<Wishlist/>} />
                    <Route path='/chat' element={<Chat/>} />
                    <Route path='/user'>
                    </Route>
                    <Route path='/user/:id' element={<User/>} />
                </Route>
            </Routes>
        </BrowserRouter>      
            )
};

export default Router;