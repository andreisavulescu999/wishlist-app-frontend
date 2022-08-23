import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'
import { axios } from "axios";

import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

function RegisterForm() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const data = new Object();
  const setBirthday = (birthday) => {
      data.birthday = birthday;
  };
  const setEmail = (email) => {
    data.email = email;
};
  const setUsername = (username) => {
      data.username = username;
  };

  const setFirstName = (first_name) => {
      data.first_name = first_name;
  };

  const setLastName = (last_name) => {
      data.last_name = last_name;
  };

  const setPassword = (password) => {
    data.password = password;
    console.log(data);
  };  

  const RetypePassword = (retype_password) => {
    if(data?.password !== retype_password)
    {
      return (<Alert key='danger' variant='danger'>
              Passwords don't match
    </Alert>);
    }
  };

    const newUser = async(data) => {
      axios.post(`https://locallhost:3001/user/create`, { data })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
      console.log(data);
      // const resp = await loginUser(email,password);
      // if (resp.token) {
      //     // setToken(resp.token);
      //     navigate('/profile');
      // }
      navigate('/login');
  }

  return (
    <Card>
      <Card.Title  pt={3}>Register</Card.Title>
      <Form>
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChangeText={(username) => setUsername(username)}/>
      </Form.Group> 
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" placeholder="Enter Firstname" onChangeText={(first_name) => setFirstName(first_name)}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter Lastname" onChange={(last_name) => setLastName(last_name)}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" placeholder="Date" onChange={(date) => setBirthday(date)}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(email) => setEmail(email)}/>
      </Form.Group>
      <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(password) => setPassword(password)}/>
      </Form.Group>
      <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Retype Password</Form.Label>
        <Form.Control type="password" placeholder="RetypePassword" onChange={(retype_password) => RetypePassword(retype_password)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onSubmit={newUser(data)}>
        Submit
      </Button>
    </Form>
    </Card>
  );
}

export default RegisterForm;