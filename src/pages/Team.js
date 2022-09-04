import React from "react";
//import lottie from "lottie-web";
import { Logo, Nav, Cursor } from "../components";

const Team = () => {
    return (
        <>
            <Logo />
            <Nav />
            <Cursor />
            <div className='p-16 max-h-screen text-center'>
                <span className='text-6xl amed '>Meet the Creators</span>
            </div>
            <div className='flex justify-evenly p-16 '>
                <div className='flex-col flex text-center '>
                    <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
                    <div className='areg text-2xl pt-2'>Inzamam</div>
                    <div className='amed'>App Developer</div>
                </div>
                <div className='flex-col flex text-center '>
                    <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
                    <div className='areg text-2xl pt-2'>Gautam</div>
                    <div className='amed'>ML Developer</div>
                </div>
                <div className='flex-col flex text-center '>
                    <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
                    <div className='areg text-2xl pt-2'>Sitanshu</div>
                    <div className='amed'>Web Developer</div>
                </div>
                <div className='flex-col flex text-center '>
                    <div className='w-[200px] h-[200px] rounded-full bg-black'></div>
                    <div className='areg text-2xl pt-2'>Bhurva</div>
                    <div className='amed tex-lg'>UI/UX designer</div>
                </div>
            </div>
        </>
    );
};
export default Team;
