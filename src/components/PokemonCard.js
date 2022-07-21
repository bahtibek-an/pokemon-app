import React, {useEffect, useState} from 'react';
import "./style.css";
import {fetchOne} from "../http/PokeAPI";
import {useHistory} from "react-router-dom"
import {POKEMON_ROUTE} from "../utils/consts";

const PokemonCard = ({ data }) => {
    const [ pokemonData, setPokemonData ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const history = useHistory()

    useEffect(() => {
        fetchOne(data.url.split("/")[6])
            .then(data => setPokemonData(data))
            .then(data => setLoading(false))
            .catch(e => console.log(e))
    }, [data.url]);

    if (loading) return;

    return (
        <div className="card">
            <div className="card-item" onClick={() => history.push(POKEMON_ROUTE + pokemonData.id)}>
                <div className="card-img">
                    <img
                        width={150}
                        height={150}
                        alt={""}
                        src={pokemonData.sprites.other.dream_world.front_default}
                    />
                </div>
                <h2 className="card-title" >{pokemonData.name}</h2>
                <ul className="card-info" >
                    {pokemonData.abilities.map(({ability}, index) =>
                        index % 2
                            ?
                            <li key={ability.url} className="ability-1" >{ability.name}</li>
                            :
                            <li key={ability.url} className="ability-2">{ability.name}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PokemonCard;