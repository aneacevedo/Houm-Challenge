import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Card from '../Components/Cards/Card';
import { getPokemon, getAllPokemon } from '../Functions/pokedex';


function PokeApp() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <>
      <Header />
      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Cargando Pokémons...</h1> : (
          <>
            <div className="btn">
              <button onClick={prev}>Anterior</button>
              <button onClick={next}>Siguiente</button>
            </div>
            <div className="grid-container">
              {pokemonData.map((pokemon, index) => {
                return <Card key={index} pokemon={pokemon} />
              })}
            </div>
            <div className="btn">
              <button onClick={prev}>Anterior</button>
              <button onClick={next}>Siguiente</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default PokeApp;
