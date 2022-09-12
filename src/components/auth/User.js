import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// import Alert from 'react-bootstrap/Alert'
import { FindUser,EditUser } from '../../api/user';

import { useNavigate, useParams } from "react-router-dom";

import React, { useState,useEffect } from "react";

function User() {
  let id = useParams();
  const navigate = useNavigate();

  const [user,setUser] = useState([]);

  // const RetypePassword = (retype_password) => {
  //   if(password !== retype_password)
  //   {
  //     return (<Alert key='danger' variant='danger'>
  //             Passwords don't match
  //   </Alert>);
  //   }
  // };
    const Edit = async() => {
      let data = user;
      const updatedUser = await EditUser(id.id,data);
      navigate(`/user/:${id.id}`);
    };
  useEffect(() => {
      const getEditUser = async(id) => {
        const user = await FindUser(id); 
        setUser(user.data);
      };
      getEditUser(id.id);
    },
    [FindUser]
    );
  
  return (
    <Card>
      <Card.Title  pt={3}>User update</Card.Title>
      <Form>
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={user.username} placeholder="Enter username" onChange={(username) => setUser((prev) => ({...prev, username: username.target.value}))}/>
      </Form.Group> 
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" value={user.first_name} placeholder="Enter Firstname" onChange={(first_name) => setUser((prev) => ({...prev, first_name: first_name.target.value}))}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" value={user.last_name} placeholder="Enter Lastname" onChange={(last_name) => setUser((prev) => ({...prev, last_name: last_name.target.value}))}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" value={user.birthday} placeholder="Date" onChange={(date) => setUser((prev) => ({...prev, date: date.target.value}))}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" value={user.age} placeholder="Age" onChange={(age) => setUser((prev) => ({...prev, age: age.target.value}))}/>
      </Form.Group>  
      <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={user.email} placeholder="Enter email" onChange={(email) => setUser((prev) => ({...prev, email: email.target.value}))}/>
      </Form.Group>
      <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={null} placeholder="Password" onChange={(password) => setUser((prev) => ({...prev, password: password.target.value}))}/>
      </Form.Group>
      {/* <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
        <Form.Label>Retype Password</Form.Label>
        <Form.Control type="password" value={retype_password} placeholder="RetypePassword" onChange={(retype_password) => RetypePassword(retype_password)}/>
      </Form.Group> */}
      <Button variant=" btn btn-dark" onClick={Edit}>
        Submit
      </Button>
    </Form>
    </Card>
  );
}

export default User;