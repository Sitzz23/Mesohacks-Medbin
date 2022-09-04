import React from "react";
import { Logo, Nav, Cursor, Play } from "../components";

const Game = () => {
    return (
        <>
            <Logo />
            <Nav />
            <Cursor />
            <div className='p-8'>
                <div className='amed text-5xl p-4 relative'>Medic Mario</div>
                <div className='absolute right-[15em] top-[7.6em]'>
                    <Play />
                </div>
                <p className='areg text-lg px-4'>
                    Here are the screenshots of the game app that helps in
                    understanding waste management better.
                </p>
            </div>
        </>
    );
};

export default Game;
