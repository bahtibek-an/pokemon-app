import axios from "axios";

const $host = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export default $host;