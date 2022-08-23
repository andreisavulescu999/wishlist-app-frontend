import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

import {FaGoogle,FaFacebookF,FaGooglePlay,FaReact,FaGitAlt} from 'react-icons/fa';

function FooterWishlist() {


  return (
    <div className='p-4 p-md-0 bg-dark text-white'>
        <Row>
            <Col>
                <FaGoogle></FaGoogle>
            </Col>
            <Col>
                <FaFacebookF></FaFacebookF>
            </Col>
            <Col>
                <FaGooglePlay></FaGooglePlay>
            </Col>
            <Col>
                <FaReact></FaReact>
            </Col>
            <Col>
                <FaGitAlt></FaGitAlt>
            </Col>
        </Row>
        <br></br>
        <h3>Wishlist App</h3>
        <br></br>
        <Row>
            <Col md={3}>
                <img src=".\client\public\logo192.png"></img>
            </Col>
            <Col md={3}>
                <a href="/login">Login</a>
            </Col>
            <Col md={3}>
                <a href="/products">Products</a>
            </Col>
            <Col md={3}>
                <a href="/register">About us</a>   
            </Col>
            <Col md={3}>
                <img src=".\client\public\logo192.png"></img>
            </Col>
            <Col md={3}>
                <a href="/register">Register</a> 
            </Col>
            <Col md={3}>
                <a href="/wishllists">Wishlists</a>
            </Col>
            <Col md={3}>
                <a href="/register">About us</a>   
            </Col>  
        </Row>
    </div>
  );
}



export default FooterWishlist;
