import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineUser } from 'react-icons/ai';
import {BsFillChatRightTextFill,BsFillPeopleFill,BsFillBasket3Fill,BsListStars} from "react-icons/bs";
//import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/images/logo2.png';

function NavbarWishlist() {         
  return (
    <Navbar className='gradient-color' fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img width={260} src={logo} ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
              <Nav.Link href="/chat"><BsFillChatRightTextFill/> Chat</Nav.Link>
              <Nav.Link href="/group"><BsFillPeopleFill/> Groups</Nav.Link> 
              <Nav.Link href="/products"><BsFillBasket3Fill/> Products</Nav.Link>
              <Nav.Link href="/wishlists"><BsListStars/> Wishlists</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="/profile"><AiOutlineUser className='text-white'/></Nav.Link>
      </Container>
    </Navbar>
  );
}
 
export default NavbarWishlist;