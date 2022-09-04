import React from "react";
import Button from "./Upload";
import { useDropzone } from "react-dropzone";

function Drop({ onDrop, accept, open }) {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({
            accept,
            onDrop,
        });
    const files = acceptedFiles.map((file) => (
        <ul className='p-8 hidden'>
            <li key={file.path} className={"areg"}>
                {file.path} - {file.size} bytes
            </li>
        </ul>
    ));

    return (
        <div className='w-fit' {...getRootProps({ className: "dropzone" })}>
            <input className='input-zone' {...getInputProps()} />
            <div className='flex mx-auto w-fit gap-8'>
                <div className='nue  p-8 '>
                    <div className=' text-center border-dotted border-2 border-black rounded-[30px] p-10 mb-4 mx-auto'>
                        {isDragActive ? (
                            <p className='areg text-lg'>Release to drop...</p>
                        ) : (
                            <p className='areg text-lg'>
                                Drag and drop files,
                                <br /> or click to select
                            </p>
                        )}
                    </div>
                    <Button onClick={open} />
                </div>
                <div>{files}</div>
            </div>
        </div>
    );
}
export default Drop;
