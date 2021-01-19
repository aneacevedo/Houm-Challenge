import React from 'react';
import './Card.css'

export const Card = () => {
    return(
        <div className='bgPage'>
        <div className='containerBg'>
        <div className='cardBox'>
            <img className='pokeImg'/>
            <div className='dataBox'>
                <h2>Nombre</h2>
                <p>id</p>
                <p>Type</p>
                <p>weight</p>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Card;