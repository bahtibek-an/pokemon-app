import React from 'react';

const PokemonDetails = ({ pokemonData }) => {
    return (
        <div className="pokemon-details">
            <div className="pokemon-details-item">
                <ul className="pokemon-characteristics">
                    <li>
                        <span className="title">ID</span>
                        <br/>
                        <span className="value">{pokemonData.id}</span>
                    </li>
                    <li>
                        <span className="title">Height</span>
                        <br/>
                        <span className="value">{pokemonData.height}</span>
                    </li>
                    <li>
                        <span className="title">Weight</span>
                        <br/>
                        <span className="value">{pokemonData.weight}</span>
                    </li>
                </ul>
            </div>
            <div className="pokemon-details-item">
                <ul className="pokemon-characteristics">
                    <li>
                        <span className="title">Abilities</span>
                        <br/>
                        {pokemonData.abilities.map(({ability}) =>
                            <div
                                key={ability.url}
                                style={{textTransform: "capitalize"}}
                                className="value"
                            >
                                {ability.name}
                            </div>
                        )}
                    </li>
                </ul>
                <ul className="pokemon-characteristics">
                    <li>
                        <span className="title">Type</span>
                        <br/>
                        {pokemonData.types.map((type) =>
                            <div
                                key={type.slot}
                                style={{textTransform: "capitalize"}}
                                className="value"
                            >
                                {type.type.name}
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PokemonDetails;