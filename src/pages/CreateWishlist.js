import AllProducts from "../components/product/AllProducts";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";




export const CreateWishlist = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>  
        <div class="row">
                <Card>
            <Card.Title>Create Wishlist</Card.Title>
            <Form>
            <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" value={name} placeholder="Enter name" onChange={(name) => setName(name.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
                <Form.Label>Products</Form.Label>
                <Form.Control type="password" value={password} placeholder="Products" onChange={(password) => setPassword(password.target.value)}/>
            </Form.Group>
            {/* <Button variant="primary" onClick={Login}>
                Submit
            </Button> */}
            </Form>
            </Card>
        </div>
        <div class="row">
            <AllProducts></AllProducts> 
        </div>

        </> 


    );
}