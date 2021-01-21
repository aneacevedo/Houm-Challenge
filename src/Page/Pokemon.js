import React from 'react';
import Header from '../Components/Header/Header';
import Card from '../Components/Cards/Card';
import SearchBar from '../Components/SearchBar/SearchBar';


export const Pokemon = () => {

    return(
        <div>
        <Header/>
        <SearchBar/>
        <Card/> 
        </div>
    );
};

export default Pokemon;