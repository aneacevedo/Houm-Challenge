import React from 'react';
import './Card.css'

export const Card = ({ pokemon }) => {

    return(
        <div className='bgPage'>
        <div className='containerBg'>
        <div className='cardBox'>
            {/* <img className='pokeImg' src={pokemon.sprites.front_default} alt=""/> */}
            <div className='dataBox'>
           <h2>{pokemon.name}</h2>
                <p>{pokemon.id}</p>
                {/* <p>{types.type.name}</p> */}
                <p>{pokemon.weight}</p>
            </div>
        </div>
        </div>
        </div>
    );
    }
export default Card;