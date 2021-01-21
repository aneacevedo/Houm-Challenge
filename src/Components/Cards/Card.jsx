import React from 'react';
import './Card.css'
import { useState, useEffect } from 'react';
// import axios from 'axios';

export const Card = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemon, setPokemonDetail] = useState('');


    useEffect(() => {
        // console.log('useEffect')
        pokeData()

    }, [])

    const pokeData = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0')
        const pokemons = await data.json();
        
        // console.log(pokemons.results);
        setPokemonData(pokemons.results)
    }
    // console.log(pokeData)
    // console.log(pokemons)

    
    return(
        <div className='bgPage'>
        <div className='containerBg'>
        <div className='cardBox'>
            <img className='pokeImg'/>
            <div className='dataBox'>
                {pokemonData.map((pokemon, item) => 
                        <h2 className='pokeName' key={item}>{pokemon.name}</h2>
                    
                        
                    )
                }
                <p></p>
                <p>Type</p>
                <p>weight</p>
            </div>
        </div>
        </div>
        </div>
    );
    }
export default Card;