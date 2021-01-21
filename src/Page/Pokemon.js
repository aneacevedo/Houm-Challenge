import React from 'react';
import Header from '../Components/Header/Header';
import Card from '../Components/Cards/Card';
import { useState, useEffect } from 'react';
import { getAllPokemons, getThePokemons } from '../Functions/pokedex';


export const Pokemon = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [nextPokemon, setNextPokemon] = useState('');
    const [prevPokemon, setPrevPokemon] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemons(initialUrl);
            console.log(response.results);
            setNextPokemon(response.next);
            setPrevPokemon(response.previous);
            await loadingPokemons(response.results);
            // console.log(pokemon);
            setLoading(false);
        }
        fetchData();
    }, []);

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemons(nextPokemon);
        await loading(data.results);
        setNextPokemon(data.next);
        setPrevPokemon(data.previous);
        setLoading(false);
      }
    
      const prev = async () => {
        if (!prevPokemon) return;
        setLoading(true);
        let data = await getAllPokemons(prevPokemon);
        await loading(data.results);
        setNextPokemon(data.next);
        setPrevPokemon(data.previous);
        setLoading(false);
      }

    const loadingPokemons = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
                let pokemonRecord = await getThePokemons(pokemon);
                return pokemonRecord;
            })
        );
        setPokemonData(_pokemonData);
    };
    // console.log(pokemonData);

    return(
        <div>
        <Header/>
       <div> 
           { 
           loading ? <h2>Cargando...</h2> :
                (
                <div>
                    <div className="btn">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
              </div>
              <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </div>
            {/* <div className="btn">
              <button onClick={prevPokemon}>Prev</button>
              <button onClick={nextPokemon}>Next</button>
            </div> */}
               </div> )};
        </div>
        </div>
    );
};

export default Pokemon;