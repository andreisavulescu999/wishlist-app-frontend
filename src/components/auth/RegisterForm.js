import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// import Alert from 'react-bootstrap/Alert'
import { RegisterUser } from '../../api/user';

import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [retype_password] = useState("");
  const [birthday, setBirthday] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");


  // const RetypePassword = (retype_password) => {
  //   if(password !== retype_password)
  //   {
  //     return (<Alert key='danger' variant='danger'>
  //             Passwords don't match
  //   </Alert>);
  //   }
  // };
    const Register = async () => {
      let data = {username,first_name,last_name, birthday, password, email,age};
      const user = await RegisterUser(data);
      console.log(user);
      navigate('/login');
    };


  return (
    <Card>
      <Card.Title  pt={3}>Register</Card.Title>
      <Form>
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={username} placeholder="Enter username" onChange={(username) => setUsername(username.target.value)}/>
      </Form.Group> 
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" value={first_name} placeholder="Enter Firstname" onChange={(first_name) => setFirstName(first_name.target.value)}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" value={last_name} placeholder="Enter Lastname" onChange={(last_name) => setLastName(last_name.target.value)}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" value={birthday} placeholder="Date" onChange={(date) => setBirthday(date.target.value)}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" value={age} placeholder="Date" onChange={(age) => setAge(age.target.value)}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(email) => setEmail(email.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Password" onChange={(password) => setPassword(password.target.value)}/>
      </Form.Group>
      {/* <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Retype Password</Form.Label>
        <Form.Control type="password" value={retype_password} placeholder="RetypePassword" onChange={(retype_password) => RetypePassword(retype_password)}/>
      </Form.Group> */}
      <Button variant=" btn btn-dark" onClick={Register}>
        Submit
      </Button>
    </Form>
    </Card>
  );
}

export default RegisterForm;