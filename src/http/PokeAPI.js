import React from "react";
import $host from "./index";
import { render } from '@testing-library/react';
import ServerError from "../views/error/ServerError";


export const fetchAll = async (offset) => {
    try {
        const { data } = await $host.get(`/pokemon/?offset=${offset}&limit=20`);

    return data;
    } catch (error) {
        if(error.toJSON().message === 'Network Error'){
            render(<ServerError/>)
        }
    }
    
}


export const fetchOne = async (id) => {
    const { data } = await $host.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

    return data;
}