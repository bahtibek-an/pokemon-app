import React from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import "./App.css";
import AppRouter from "./components/routing/AppRouter";


const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;