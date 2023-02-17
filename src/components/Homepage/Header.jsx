import React from 'react';
import { Link } from 'react-router-dom';
// import Logo1 from "../../pokeman_banner.jpeg";
import Logo from "../../images/element-images/dark.png";


const Header = () => {
    return (
        <div className="flex justify-between py-2">
            <Link to="/">
                <div className="pl-5">
                    <img src={Logo} width="80px" className="rounded-full" alt="logo" />
                </div>
            </Link>
            <p className="font-bold text-4xl flex items-center">Gotta Guess'em All!</p>
            <div></div>
        </div>
    );
}

export default Header;
