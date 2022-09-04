import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className='amed text-lg fixed flex gap-3 -right-[6.5rem] top-[10rem] -rotate-90'>
            <Link to='/team'>
                <div>Team</div>
            </Link>

            <div className=''>•</div>
            <Link to='/ml'>
                <div>The ML</div>
            </Link>

            <div>•</div>
            <Link to='/game'>
                <div>Game</div>
            </Link>
            <div>•</div>
            <Link to='/idea'>
                <div>Idea</div>
            </Link>
        </div>
    );
};

export default Nav;

//
