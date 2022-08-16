import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";


function FooterWishlist() {


  return (
    <Container fluid="md">
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
                <a href="/register">Register</a>   
            </Col>
            <Col md={3}>
                <a href="/register">About us</a>   
            </Col> 
        </Row>
    </Container>
  );
}



export default FooterWishlist;
