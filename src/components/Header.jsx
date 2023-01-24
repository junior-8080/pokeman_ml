import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../pokeman_banner.jpeg";

const Header = () => {
    return (
        <div className='bg-slate-200'>
            <Link to="/">
                <div className="p-5">
                    <img src={Logo} width="80px" className="rounded-full" />
                </div>
            </Link>
        </div>
    );
}

export default Header;
