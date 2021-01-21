import React from 'react';

const ShowPokedex = (props) => {
    //console.log(props);
    const { pokemons } = props;
    return(
        <div>
            <div>
                <h1>Pokedex</h1>
                <div>Pages</div>
                <div>
                    {pokemons.map((pokemon, index) => {
                        return (
                            <div key={pokemon.name}>
                                <h3>
                                    Nº: {index+1}
                                </h3>
                                <h2>
                                    {pokemon.name}
                                </h2>

                            </div>
                        )
                    })}
                    {/* <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div> */}
                </div>
            </div>
        </div>
    )
}
export default ShowPokedex;