import React from "react";
import FooterWishlist from "./FooterWishlist";
import NavbarWishlist from "./NavbarWishlist";
import Container from "react-bootstrap/esm/Container";
import Router from "../routes/Router";


const Layout =({children}) => {    
    return(
        <div className="App">
        <NavbarWishlist></NavbarWishlist>
        <br></br>
        <br></br>
        <br></br>
        <Container fluid="md" pt={6}>  
        <Router>
        {children}            
        </Router>
        </Container>
        <br></br>
        <footer>
        <FooterWishlist></FooterWishlist>
        </footer>
        </div>
    );    
}

export default Layout;