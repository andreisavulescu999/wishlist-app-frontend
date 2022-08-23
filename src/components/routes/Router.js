import React from "react";
import { BrowserRouter,Routes,Route,useParams  } from "react-router-dom";
import App from "../../App";
import RegisterForm from "../auth/RegisterForm.js";
// import Layout from "../layout/Layout";
import LoginForm from "../auth/LoginForm.js";
import Product from "../product/Product";
import Wishlist from "../wishlist/Wishlist";
import AllProducts from "../product/AllProducts";

const User = () => {
    let {id} = useParams();     
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
                <Route path='' element={<AllProducts/>}>
                    <Route path='/login'  element={<LoginForm/>} />
                    <Route path='/register' element={<RegisterForm/>} />
                    <Route path='/products' element={<AllProducts/>} />
                    <Route path='/product/:id' element={<Product/>} />
                    <Route path='/wishlists' element={<Wishlist/>} />
                    <Route path='/user' element={User}/>
                </Route>
            </Routes>
        </BrowserRouter>      
            )
};

export default Router;