import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import RegisterForm from "../auth/RegisterForm.js";
import LoginForm from "../auth/LoginForm.js";
import Product from "../product/Product";

import Chat from '../chat/Chat.js';
import User from '../auth/User.js';
import Profile from "../auth/profile/Profile.js";
import { Home } from "../../pages/Home.js";
import { Products } from "../../pages/Products.js";
import { Wishlists } from "../../pages/Wishlists.js";
import { CreateWishlist } from "../../pages/CreateWishlist.js";
import Wishlist from "../wishlist/Wishlist.js";

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
                    <Route path='/wishlists' element={<Wishlists/>} />
                    <Route path='/wishlist/:id' element={<Wishlist/>} />
                    <Route path='/wishlist/create' element={<CreateWishlist/>} />
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