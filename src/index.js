import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from "./store/PokemonStore";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Store>
        <App />
    </Store>
);
