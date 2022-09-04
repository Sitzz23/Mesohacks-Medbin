import React from "react";
import { About, Team, Game, Ml, Idea } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/team' element={<Team />} />
                <Route path='/ml' element={<Ml />} />
                <Route path='/game' element={<Game />} />
                <Route path='/idea' element={<Idea />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
