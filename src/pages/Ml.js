import React, { useCallback, useState } from "react";
import cuid from "cuid";
import { Logo, Nav, Drop, ImageGrid } from "../components";

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
            <div className='p-8 max-h-screen'>
                <span className='text-5xl amed '>Lorem, ipsum.</span>
                <p className=' w-3/5 areg text-lg  my-5 leading-relaxed tracking wider'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis consequuntur eius perspiciatis voluptatem
                    molestiae numquam dolorum nobis, debitis soluta quae optio
                    doloremque exercitationem, explicabo sequi quasi doloribus
                    id ipsa saepe architecto quo quia quod eligendi ad
                    blanditiis. Culpa neque, est illo laborum repudiandae, natus
                    molestiae veritatis saepe itaque, consequuntur omnis?
                </p>
            </div>
            <div className='px-8 text-center fit'>
                <div className='px-8 flex justify-center'>
                    <Drop
                        className='w-fit'
                        onDrop={onDrop}
                        accept={"image/*"}
                    />
                    <ImageGrid images={images} />
                </div>
            </div>
        </>
    );
};

export default Ml;
