import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import React, { useState,useContext } from "react";
import {LoginUser} from '../../api/user';
import GeneralContext from "../../context/GeneralContext";


function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setToken  = useContext(GeneralContext);
  const setUsers  = useContext(GeneralContext);

  const Login = () => {
      const user = LoginUser(email,password);
      if (user.token) {
        setToken(user.token);
        setUsers({user});
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