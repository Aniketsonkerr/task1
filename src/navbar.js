import React from "react";
import './navbar.css';
import logo from "./factory.png";
import {Link} from "react-scroll";
function NavBar(){
    return(
    <nav className="navBar">
    <img src={logo} alt="logo" className="logo"/>
    <div className="menu">
    <Link className="menuListItem" activeClass="active" to='dashboard' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
    <Link className="menuListItem" activeClass="active" to='productForm' spy={true} smooth={true} offset={-50} duration={500} >Add Product</Link>
   
    </div>
    </nav>
    );
}

export default NavBar;