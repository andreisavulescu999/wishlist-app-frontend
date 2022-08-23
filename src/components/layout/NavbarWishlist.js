import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'react';
import { AiOutlineUser } from 'react-icons/ai';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarWishlist() {
  const pages = {
    link1:{
      name:"Login",
      link:"/login"
    },
    link2:{
      name:"Register",
      link:"/register"
    }
  };
  
  //pages.entries(page => console.log(page));
  // $link = $link + '<Nav.Link href="/"'+$page.link+'>'+$page.name+'</Nav.Link>';             
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        {/* <Navbar.Brand href="/"><Image source={require('../../assets/logo.png')} /> Wishlist App</Navbar.Brand> */}
        <Navbar.Brand href="/">Wishlist App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>  
              <Nav.Link href="/group">Groups</Nav.Link> 
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/wishlists">Wishlists</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="/profile"><AiOutlineUser/></Nav.Link>
      </Container>
    </Navbar>
  );
}
 
export default NavbarWishlist;