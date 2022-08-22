import React from "react";
import FooterWishlist from "./FooterWishlist";
import NavbarWishlist from "./NavbarWishlist";

const Layout =({children}) => {

    return
        <NavbarWishlist></NavbarWishlist>
        {children}
        <FooterWishlist></FooterWishlist>
}

export default Layout;