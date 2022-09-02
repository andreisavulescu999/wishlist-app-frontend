import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

import {FaGoogle,FaFacebookF,FaGooglePlay,FaReact,FaGitAlt} from 'react-icons/fa';

import logo from '../../assets/images/logo2.png';

function FooterWishlist() {

  return (
    <div className='p-4 p-md-0 gradient-color text-white'>
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
            <Col md={6}>
                <img src={logo} width={260}></img>
            </Col>
            <Col md={6}>
                <Row>
                <Col md={3}>
                        <a href="/login">Login</a>
                    </Col>
                    <Col md={3}>
                        <a href="/products">Products</a>
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
            </Col>
        </Row>
        <Row>.</Row>
    </div>
  );
}



export default FooterWishlist;
