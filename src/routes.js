import { NOT_FOUND, POKEMON_ROUTE, ROOT_ROUTE } from "./utils/consts";
import Pokemons from "./views/Pokemons";
import PokemonPage from "./views/PokemonPage";
import NotFound from "./views/error/NotFound";


export const publicRoutes = [
    {
        path: ROOT_ROUTE,
        Component: Pokemons
    },
    {
        path: POKEMON_ROUTE + ":id",
        Component: PokemonPage
    },
    {
        path: NOT_FOUND,
        Component: NotFound
    }
]