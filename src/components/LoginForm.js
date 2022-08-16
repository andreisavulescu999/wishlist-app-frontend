import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import loginUser from '/server/src/controllers/user.js'
import React, { useState } from "react";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleClick = async() => {
      const resp = await loginUser(email,password);
      if (resp.token) {
          // setToken(resp.token);
          navigate('/profile');
      }
  }
  return (
    <Card>
      <Card.Title>Login</Card.Title>
      <Form>
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChangeText={(email) => setEmail(email)}/>
      </Form.Group>
      <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChangeText={(password) => setPassword(password)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out"/>
      </Form.Group>
      <Button onClick={handleClick} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
  );
}

export default LoginForm;