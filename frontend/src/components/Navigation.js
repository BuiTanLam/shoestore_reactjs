import React from "react";
// import { Link } from "react-router-dom";
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


const Navigation = () => {
    return ( 
        <nav id="site-navigation" className="main-navigation site-navigation hidden-xs hidden-sm hidden-md col-12">
            <ul className="nav-menu">
            <li className="menu-item">
                <a href="/">Giày nike</a>
                <ul className="submenu">
                    <li id="submenu-item" className="submenu-item">
                        <a href="/">Nike jordan</a></li>
                    <li id="submenu-item" className="submenu-item">
                        <a href="/">Air force 1</a></li>
                </ul>
            </li>
            <li id="menu-item" className="menu-item">
                <a href="/">Giày Adidas</a>
                <ul className="submenu">
                    <li className="submenu-item">
                        <a href="/">Super star</a></li>
                    <li className="submenu-item">
                        <a href="/">Prophere</a></li>
                </ul>
            </li>
            <li id="menu-item" className="menu-item">
                <a href="/">Giày Converse</a>
            </li>
            <li id="menu-item" className="menu-item">
                <a href="/">VANS</a>
            </li>
            <li id="menu-item" className="menu-item">
                <a href="/">MLB</a>
            </li>
            <li id="menu-item" className="menu-item">
                <a href="/">Dép</a>
            </li>
    </ul>
        </nav>
    );
};

export default Navigation;