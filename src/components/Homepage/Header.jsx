import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../pokeman_banner.jpeg";

const Header = () => {
    return (
        <div className="flex justify-between py-5">
            <Link to="/">
                <div className="pl-5">
                    <img src={Logo} width="80px" className="rounded-full" />
                </div>
            </Link>
            <p className="font-bold text-4xl">Gotta Guess'em All!</p>
            <div></div>
        </div>
    );
}

export default Header;
