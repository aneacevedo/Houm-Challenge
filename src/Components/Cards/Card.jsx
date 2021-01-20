import React from 'react';
import './Card.css'
import { useState, useEffect } from 'react';
// import axios from 'axios';

export const Card = () => {
    // const [pokemon, setPokemon] = useState('bulbasaur');
    // const { history } = props;
    const [pokemonData, setPokemonData] = useState([]);
    // const [pokemonType, setPokemonType] = useState('');

    // useEffect(() => {
    //     axios
    //     .get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    //     .then(function (response){
    //         const { data } = response;
    //         const { results } = data;
    //         const newPokemonData = {};
    //         results.forEach((pokemon, index) => {
    //             newPokemonData[index + 1] = {
    //                 id: index + 1,
    //                 name: pokemon.name,
    //                 sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    //                     index + 1
    //                   }.png`,
    //                 weight: pokemon.weight,
    //             };
    //         });
    //         setPokemonData(newPokemonData);
    //     });
    // }, []);
    // console.log(setPokemonData);
    
    // const getPokemonCard = (pokemonId) => {
    // const { id, name, sprite, weight } = pokemonData[pokemonId];
    // }


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
    //console.log(pokemonData)
    // console.log(pokemons)

    
    return(
        <div className='bgPage'>
        <div className='containerBg'>
        <div className='cardBox'>
            <img className='pokeImg'/>
            <div className='dataBox'>
                {pokemonData.map((item) => 
                        <h2 className='pokeName' key={item.id}>{item.name}</h2>
                    
                        
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