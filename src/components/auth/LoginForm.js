import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import React, { useState,useContext } from "react";
import {LoginUser} from '../../api/user';
import {GeneralContext} from "../../context/GeneralContext.js";


function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const contextuser  = useContext(GeneralContext);

  const Login = async() => {
      const data = {email,password}
      const user = await LoginUser(data);
      if (user) {
        contextuser.setUsers(user.data.user.existingUser.id)
        contextuser.setToken(user.data.user.token);
        navigate('/products');
      }
  }; 
  
  return (
    <Card>
      <Card.Title>Login</Card.Title>
      <Form>
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(email) => setEmail(email.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Password" onChange={(password) => setPassword(password.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out"/>
      </Form.Group>
      <Button variant="primary" onClick={Login}>
        Submit
      </Button>
    </Form>
    </Card>
  );
}

export default LoginForm;