import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Card from '../Components/Cards/Card';
import SearchBar from '../Components/SearchBar/SearchBar';
import ShowPokedex from '../Components/Results/ShowPokedex';
import getPokemons from '../Functions/pokedex';


export const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async (limit = 25, offset = 0) => {
        try {
          let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
          const response = await fetch(url);
          const data = await response.json();
        //   console.log(data);
          return data;
        } catch (err) {}
      };

    const fetchPokemons = async () => {
        try{
            const data = await getPokemons();
            // console.log(data);
            setPokemons(data.results);
        }
        catch(err){}
    }

    useEffect(() => {
        fetchPokemons();
    },[])

    return(
        <div>
        <Header/>
        <SearchBar/>
        <ShowPokedex pokemons={pokemons}/>
        <Card/> 
        </div>
    );
};

export default Pokemon;