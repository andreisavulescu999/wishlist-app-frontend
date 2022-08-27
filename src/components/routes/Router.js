import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import RegisterForm from "../auth/RegisterForm.js";
import LoginForm from "../auth/LoginForm.js";
import Product from "../product/Product";
import Wishlist from "../wishlist/Wishlist";
import AllProducts from "../product/AllProducts";

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path=''>
                    <Route path='/login'  element={<LoginForm/>} />
                    <Route path='/register' element={<RegisterForm/>} />
                    <Route path='/products' element={<AllProducts/>} />
                    <Route path='/product/:id' element={<Product/>} />
                    <Route path='/wishlists' element={<Wishlist/>} />
                    <Route path='/user'/>
                </Route>
            </Routes>
        </BrowserRouter>      
            )
};

export default Router;