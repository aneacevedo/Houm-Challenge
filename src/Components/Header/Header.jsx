import React from 'react';
import './Header.css';
import Logo from '../../img/houmLogo.png';

export const Header = () => {
    return(
        <div className='headerContainer'>
            <div className='title-cont'>
            <h1 className='title'>POKÈDEX</h1>
            <img src={Logo} alt='logo-houm' className='Logo'/>
            </div>
        </div>
    );
};
export default Header;