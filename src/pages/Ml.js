import React, { useCallback, useState } from "react";
import cuid from "cuid";
import { Logo, Nav, Drop, ImageGrid, Dialog, Blink } from "../components";

const Ml = () => {
    const [images, setImages] = useState([]);
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.map((file) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImages((prevState) => [
                    ...prevState,
                    { id: cuid(), src: e.target.result },
                ]);
            };
            reader.readAsDataURL(file);
            return file;
        });
    }, []);

    return (
        <>
            <Logo />
            <Nav />
            <div className='p-8 max-h-screen relative'>
                <span className='text-5xl amed '>Upload Image</span>
                <p className=' w-3/5 areg text-lg  my-5 leading-relaxed tracking wider'>
                    Upload an image to let our ML algorithm do the work.
                </p>
                <div className='absolute right-[10rem] top-[2rem]'>
                    {" "}
                    <a
                        href='https://github.com/Gautam-J/waste-classification'
                        target='_blank'
                    >
                        <Blink />
                    </a>
                </div>
            </div>
            <div className='px-8 text-center fit'>
                <div className='px-8 mb-8 flex justify-center'>
                    <Drop
                        className='w-fit'
                        onDrop={onDrop}
                        accept={"image/*"}
                    />
                    <ImageGrid images={images} />
                </div>

                <Dialog />
            </div>
        </>
    );
};

export default Ml;
