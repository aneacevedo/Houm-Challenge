import React from 'react';
import './Card.css'
import typeColors from '../Colors/typeColors'

function Card({ pokemon }) {
    return (
        <div className='BgPage'>
        {/* <div className='ContainerBg'> */}
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
                        <p>{pokemon.weight}</p>
                    </div>
                    <div className='CardHeight'>
                        <p className='titles'>Altura:</p>
                        <p>{pokemon.height}</p>
                    </div>
                    <div className='CardAbility'>
                        <p className='titles'>Habilidad:</p>
                        <p>"{pokemon.abilities[0].ability.name}"</p>
                    </div>
                </div>
            </div>
            {/* </div> */}
            </div>
        );
    }
    
export default Card;
