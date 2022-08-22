import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleClick = async() => {
  //     const resp = await loginUser(email,password);
  //     if (resp.token) {
  //         // setToken(resp.token);
  //         navigate('/profile');
  //     }
  // }
  return (
    <Card>
      <Card.Title>Register</Card.Title>
      <Form>
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChangeText={(username) => setUsername(username)}/>
      </Form.Group> 
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" placeholder="Enter Fistname" onChangeText={(first_name) => setUsername(first_name)}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter Lastname" onChangeText={(last_name) => setUsername(last_name)}/>
      </Form.Group>   
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChangeText={(email) => setEmail(email)}/>
      </Form.Group>
      <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChangeText={(password) => setPassword(password)}/>
      </Form.Group>
      <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Retype Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChangeText={(password) => setPassword(password)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
  );
}

export default RegisterForm;