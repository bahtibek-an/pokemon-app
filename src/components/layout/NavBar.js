import React, {useContext, useState} from 'react';
import "./NavBar.css";
import {NavLink, useHistory} from "react-router-dom";
import {POKEMON_ROUTE, ROOT_ROUTE} from "../../utils/consts";
import {Context} from "../../store/PokemonStore";


const NavBar = () => {
    const [ search, setSearch ] = useState('');
    const [ filterItems, setFilterItems ] = useState([]);
    const [ pokemonsData,  ] = useContext(Context);
    const history = useHistory();

    const searchItem = ( event ) => {
        setSearch(event.target.value.trim());
        if (event.target.value) {
            const filteredArray = pokemonsData.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );

            const arrayUnique = [...new Map(filteredArray.map(item =>
                [item["url"], item])).values()];

            setFilterItems(() => arrayUnique)
        } else {
            setFilterItems([]);
        }
    }

    const redirect = (item) => {
        setFilterItems([]);
        history.push(POKEMON_ROUTE + item.url.split("/")[6])
    }


    return (
        <nav className="navbar" >
            <ul>
                <li className="logo" >
                    <NavLink to={ROOT_ROUTE}>
                        Pokemons
                    </NavLink>
                </li>
                <li className="search-icon" >
                    <input
                        value={search}
                        onChange={searchItem}
                        type="search"
                        placeholder="Search"
                    />
                    {filterItems.length
                        ?
                        <ul className="autocomplete-bar">
                            {filterItems.map(item =>
                                <li
                                    key={item.url}
                                    onClick={() => redirect(item)}
                                >
                                    { item.name }
                                </li>
                            )}
                        </ul>
                        :
                        null
                    }
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;