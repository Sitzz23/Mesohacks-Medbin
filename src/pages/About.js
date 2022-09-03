import React from "react";
import lottie from "lottie-web";
import Blob from "../assets/pinkblob.json";
import { Logo, Nav, Button } from "../components";

const About = () => {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#blob"), // the dom element that will contain the animation
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: Blob, // the path to the animation json
        });
    }, []);

    return (
        <>
            <Logo />
            <Nav />
            <div class='parent w-full'>
                <div class='div1 place-self-center'>
                    <div className='areg flex flex-col'>
                        <h1 className='text-5xl amed'>Lorem</h1>
                        <p className='text-5xl amed'>Ipsum</p>
                        <p className='text-xl pt-4'>is simply dummy text of </p>
                        <Button />
                    </div>
                </div>
                <div class='div2 overflow-hidden m-auto'>
                    <div id='blob' style={{ width: 700, height: 700 }}></div>
                </div>
            </div>
        </>
    );
};

export default About;
