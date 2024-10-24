import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../sass/header.scss";
import Logo from "../assets/logo.png";

function Header() {
    const location = useLocation();

    return (
        <div className="flex-space-between">
            <img src={Logo} alt="logo" className='logo'/>
            <div className="flex-space-between header-link">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A propos</Link>
            </div>
        </div>
    
    );
  }
  
  export default Header;
  