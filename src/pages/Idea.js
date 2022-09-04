import React from "react";
import { Logo, Nav, Cursor } from "../components";
import Grp1 from "../assets/1.png";
import Grp2 from "../assets/2.png";
import Grp3 from "../assets/3.png";

const Idea = () => {
    return (
        <>
            <Logo />
            <Nav />
            <Cursor />
            <div className='p-8'>
                <div className='pb-8 max-h-screen text-center'>
                    <span className='text-6xl amed '>How our ML works</span>
                </div>
                <div className='w-[60%] areg mx-auto text-xl text-center'>
                    Here is a{" "}
                    <a
                        href='https://arxiv.org/abs/1905.02244v5'
                        className='text-violet-600'
                        target='_blank'
                    >
                        research{" "}
                    </a>
                    paper about our technology and a brief explanation below.
                </div>
                <div className='p-8 py-20 relative'>
                    <p className='mt-[5rem] areg w-[60%] leading-relaxed tracking wider text-lg'>
                        MobileNetV3 is used for classifying the waste into
                        different categories, and thereby allowing us to
                        automate waste disposal properly, in such a way that it
                        does little to harm to the environment.
                    </p>
                    <div className='absolute top-[0rem] right-[4rem]'>
                        <img src={Grp1} width='400px' alt='blob' />
                    </div>
                </div>
                <div className='p-8 py-20 relative'>
                    <div className='absolute top-[0rem] left-[4rem]'>
                        <img src={Grp2} width='400px' alt='blob' />
                    </div>
                    <p className='mt-[5rem] areg w-[60%] leading-relaxed tracking wider text-lg ml-[38%]'>
                        MobileNetV3 is a convolutional neural network that is
                        tuned to mobile phone CPUs through a combination of
                        hardware-aware network architecture search (NAS)
                        complemented by the NetAdapt algorithm, and then
                        subsequently improved through novel architecture
                        advances.
                    </p>
                </div>
                <div className='p-8 py-20 relative'>
                    <p className='mt-[5rem] pt-5 areg w-[60%] leading-relaxed tracking wider text-lg'>
                        Advances include: <br />
                        (1) complementary search techniques,
                        <br />
                        (2) new efficient versions of nonlinearities practical
                        for the mobile setting, <br />
                        (3) new efficient network design.
                    </p>
                    <div className='absolute top-[0rem] right-[4rem]'>
                        <img src={Grp3} width='400px' alt='blob' />
                    </div>
                </div>
                <div className='p-8 py-20 relative'>
                    <div className='absolute top-[0rem] left-[4rem]'>
                        <img src={Grp1} width='400px' alt='blob' />
                    </div>
                    <p className='mt-[5rem] areg w-[60%] leading-relaxed tracking wider text-lg ml-[38%]'>
                        The network design includes the use of a hard swish
                        activation and squeeze-and-excitation modules in
                        the MBConv blocks.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Idea;
