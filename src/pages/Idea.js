import React from "react";
import { Logo, Nav, Cursor } from "../components";

const Idea = () => {
    return (
        <>
            <Logo />
            <Nav />
            <Cursor />
            <div className='p-16 max-h-screen text-center'>
                <span className='text-6xl amed '>The Idea</span>
            </div>
        </>
    );
};

export default Idea;
