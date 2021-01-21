import React from 'react';
import { useState } from 'react';
import searchPokemon from '../../Functions/pokedex';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    

    const onChange = (e) => {
        setSearch(e.target.value);
    }
    
    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data)
    }

    return(
        <div>
            <div>
                <input
                placeholder='Buscar Pokémon'
                onChange={onChange}
                />
            </div>
            <div>
                <button
                onClick={onClick}>Buscar</button>
                </div>
                {pokemon &&
                <div>
                    <p>Nombre: {pokemon.name}</p>
                    <p>Peso: {pokemon.weight}</p>
                    <img src={pokemon.sprites.front_default}/>

                </div>}
        </div>
    );
};
export default SearchBar;