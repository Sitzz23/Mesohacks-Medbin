import React from "react";
import { Logo, Nav, Cursor, Play } from "../components";

const Game = () => {
    return (
        <>
            <Logo />
            <Nav />
            <Cursor />
            <div className='p-8'>
                <div className='amed text-5xl p-4 relative'>Lorem Ipsum</div>
                <div className='absolute right-[15em] top-[7.6em]'>
                    <Play />
                </div>
                <p className='areg text-lg px-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    laborum ipsum sapiente consectetur amet <br />
                    dolorem? Harum minus vel tempore, itaque qui ducimus rem cum
                    dicta aut inventore. Iusto, praesentium! Sunt.
                </p>
            </div>
        </>
    );
};

export default Game;
