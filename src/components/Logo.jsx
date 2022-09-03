import React from "react";
import Log from "../assets/log.png";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/'>
            <div className='flex gap-5 p-4'>
                <img src={Log} alt='logo' width='50' height='45' />
                <div className='abold text-4xl pt-[4px]'>MedBin</div>
            </div>
        </Link>
    );
};

export default Logo;
