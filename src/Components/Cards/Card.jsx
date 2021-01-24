import React from 'react';
import './Card.css'
import typeColors from '../Colors/typeColors'

function Card({ pokemon }) {
    return (
        <div className='BgPage'>
        <div className='Container-Bg'>
        <div className='CardBox'>
            <div className='CardImg'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
        {/* <div className='CardName'> */}
            <h2 className='CardName'>
        {pokemon.name}
        </h2>
        {/* </div> */}
        <div className='CardTypes'>
                {
                pokemon.types.map(type => {
                    return (
                         <div className='CardType' style={{ backgroundColor: typeColors[type.type.name] }}>
                                <p>{type.type.name}</p>
                            </div>
                    )
                        })
                    }
                </div>
                <div className='CardInfo'>
                    <div className='CardWeight'>
                        <p className='titles'>Peso:</p>
                        <p className='DataAnswer'>{pokemon.weight}</p>
                    </div>
                    <div className='CardHeight'>
                        <p className='titles'>Altura:</p>
                        <p className='DataAnswer'>{pokemon.height}</p>
                    </div>
                    <div className='CardAbility'>
                        <p className='titles'>Habilidad:</p>
                        <p className='DataAnswer'>"{pokemon.abilities[0].ability.name}"</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
    
export default Card;
