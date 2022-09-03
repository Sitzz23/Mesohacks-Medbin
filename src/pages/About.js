import React from "react";
import lottie from "lottie-web";
import Blob from "../assets/pinkblob.json";
import VBlob from "../assets/vblob.json";
import BBlob from "../assets/bblob.json";
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

    return (
        <div className='relative'>
            <Logo />
            <Nav />
            <div class='parent w-full'>
                <div class='div1 place-self-center'>
                    <div className='flex flex-col amed'>
                        <h1 className='text-5xl med'>Lorem</h1>
                        <p className='text-5xl med'>Ipsum</p>
                        <p className='text-xl  pt-4 leading-relaxed tracking wide'>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <p className='text-xl leading-relaxed tracking wide'>
                            Lorem ipsum dolor sit amet adipisicing.
                        </p>
                        <Button />
                    </div>
                </div>
                <div class='div2 overflow-hidden m-auto'>
                    <div id='blob' style={{ width: 700, height: 700 }}></div>
                </div>
            </div>
            <div className='w-full mt-40 relative h-[90vh] overflow-hidden'>
                <h1 className='text-7xl amed text-center'>About the Project</h1>
                <div className='overflow-hidden absolute top-0 -right-[15%] -z-30'>
                    <div id='bblob' style={{ width: 400, height: 400 }}></div>
                </div>
                <p className='mx-auto w-3/5 areg text-lg text-center my-20 leading-relaxed tracking wider pb-30'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    hic laborum beatae exercitationem ipsa ducimus totam soluta
                    doloribus officiis explicabo! Veniam, qui? Asperiores
                    debitis consequatur sit itaque perferendis veniam earum
                    distinctio saepe a iste magnam repellat quo quia harum rerum
                    delectus numquam assumenda atque dolorem pariatur, quaerat
                    doloremque. Cupiditate accusantium, aliquam itaque eius
                    tempora, quis, magni error ipsam impedit dolore soluta
                    deserunt culpa! Temporibus iusto doloribus quod! Itaque enim
                    laudantium harum laboriosam porro, voluptatem suscipit
                    aperiam dolore magnam nulla, quibusdam neque, est accusamus.
                    Expedita quaerat nulla ducimus exercitationem voluptatum
                    mollitia quidem quasi quam? Magnam vitae, a asperiores quo,
                    iusto cumque, aliquid ab unde odio ipsum saepe cupiditate
                    iste iure. Exercitationem dolorem in sit possimus harum,
                    commodi est natus rerum, nihil tempore quae voluptatem iure
                    atque incidunt provident obcaecati molestias necessitatibus
                    sapiente illum qui dolorum, saepe et. Obcaecati tempora
                    adipisci, ipsam, suscipit nam ab nulla corrupti, delectus
                    quos enim autem in.
                </p>
                <div className='overflow-hidden absolute -bottom-[15%] -left-[10%] -rotate-45'>
                    <div id='vblob' style={{ width: 400, height: 400 }}></div>
                </div>
            </div>
        </div>
    );
};

export default About;
