import React from 'react';
import PokemonCard from "./PokemonCard";
import "./style.css";


const PokemonsList = ({ pokemonsData }) => {

    return (
        <section className="pokemons-container" >
            {pokemonsData.map((item, index) =>
                <PokemonCard key={index} data={item}/>
            )}
        </section>
    );
};

export default PokemonsList;