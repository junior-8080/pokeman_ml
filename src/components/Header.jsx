import React from 'react';
import Logo from "../pokeman_banner.jpeg";

const Header = () => {
    return (
        <div className='bg-slate-200 p-10'>
            <div>
                <img src={Logo}  width="80px" className="rounded-full"/>
            </div>

        </div>
    );
}

export default Header;
