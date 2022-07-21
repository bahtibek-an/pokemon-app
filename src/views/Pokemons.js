import React, {Suspense, useContext, useEffect, useState} from 'react';
import {fetchAll} from "../http/PokeAPI";
import Loader from "../components/layout/Loader";
import {Context} from "../store/PokemonStore";
const PokemonsList = React.lazy(() => import("../components/PokemonsList"));

const Pokemons = () => {
    const [ pokemonsData, setPokemonsData ] = useContext(Context);
    const [ offset, setOffset ] = useState(0);

    useEffect(() => {
        fetchAll(offset)
            .then(data =>
                setPokemonsData(prev => [...prev, ...data.results]));
    }, [offset]);


    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            setOffset(offset + 20);
        }
    };


    return (
        <div className="container" >
            <Suspense fallback={<Loader/>}>
                <PokemonsList pokemonsData={pokemonsData}/>
            </Suspense>
        </div>
    );
};

export default Pokemons;