import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useHistory } from "react-router-dom";
import {fetchOne} from "../http/PokeAPI";
import "./style.css";
import Loader from "../components/layout/Loader";
import PokemonDetails from "../components/pokemonLayouts/PokemonDetails";
import { ROOT_ROUTE, POKEMON_ROUTE } from './../utils/consts';

const PokemonPage = () => {
    const { id } = useParams();
    const [ pokemonData, setPokemonData] = useState({});
    const [ loading, setLoading ] = useState(true);
    const history = useHistory();


    useEffect(() => {
        fetchOne(id)
            .then(data => setPokemonData(data))
            .then(data => setLoading(false));
    }, [id]);

    if (loading) return <Loader/>;

    return (
        <div 
            className="container"
            style={{padding: "2rem"}}
        >
            <section className="pokemon-item">
                <div className='navigation-bar'>
                    <NavLink 
                        className="link"
                        to={ROOT_ROUTE}
                    >
                        Main Page
                    </NavLink>
                    <div 
                        className='next-link'
                        onClick={() => history.push(POKEMON_ROUTE + ( Number(id) + 1 ))}
                    >
                            NEXT POKEMON
                    </div>
                </div>
                <div className="pokemon-title"><h1>{pokemonData.name}</h1></div>
                <div className="pokemon-card">
                    <div className="pokemon-img">
                        <img
                            height={400}
                            width={400}
                            src={pokemonData.sprites.other.dream_world.front_default}
                            alt={""}
                        />
                    </div>
                    <PokemonDetails pokemonData={pokemonData}/>
                </div>
            </section>
        </div>
    );
};

export default PokemonPage;