import React from 'react';
import './Header.css';

export const Header = () => {
    return(
        <div className='headerContainer'>
            <div className='title-cont'>
            <h1 className='title'>POKÈDEX</h1>
            </div>
            <div>
                <select></select>
                <select></select>
                <select></select>
            </div>
        </div>
    );
};
export default Header;