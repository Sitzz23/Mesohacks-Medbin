import React from "react";
import VBlob from "../assets/vblob.json";
import BBlob from "../assets/bblob.json";
import lottie from "lottie-web";
import { Logo, Nav, Cursor, Play } from "../components";
import Game1 from "../assets/game1.jpeg";
import Game2 from "../assets/game2.jpeg";

const Game = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#bblob"), // the dom element that will contain the animation
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: BBlob, // the path to the animation json
        });
    }, []);
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#vblob"), // the dom element that will contain the animation
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: VBlob, // the path to the animation json
        });
    }, []);
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#blob"), // the dom element that will contain the animation
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: BBlob, // the path to the animation json
        });
    }, []);

    return (
        <>
            <Logo />
            <Nav />
            <Cursor />
            <div className='p-8 relative'>
                <div className='amed text-5xl p-4 relative'>Medic Mario</div>
                <div className='absolute right-[15em] top-[2em]'>
                    <Play />
                </div>
                <p className='areg text-lg px-4'>
                    Here are the screenshots of the game app that helps in
                    understanding waste management better.
                </p>
                <div className='overflow-hidden absolute -top-[10%] -right-[13%] -rotate-45'>
                    <div id='bblob' style={{ width: 400, height: 400 }}></div>
                </div>
            </div>
            <div className='p-8 relative overflow-hidden'>
                <div className='overflow-hidden absolute -bottom-[10%] -right-[10%]'>
                    <div id='blob' style={{ width: 400, height: 400 }}></div>
                </div>
                <img
                    src={Game1}
                    alt='game screenshots'
                    width='60%'
                    className='mx-auto p-8 nue mb-8'
                />
                <img
                    src={Game2}
                    alt='game screenshots'
                    width='60%'
                    className='mx-auto p-8 nue'
                />
                <div className='overflow-hidden absolute top-[15%] -left-[10%] -rotate-45'>
                    <div id='vblob' style={{ width: 400, height: 400 }}></div>
                </div>
            </div>
        </>
    );
};

export default Game;
