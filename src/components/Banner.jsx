import React, { useState } from 'react';
import MLBanner from "../ml2.png";
import PokemanBanner from "../pk.jpg";

import Auth from './Auth';



const Banner = () => {

    const [isAuthModalOpen, setAuthModal] = useState(false);

    return (
        <div className="py-20 w-full bg-slate-200">
            <div className="flex justify-center border">
                <div className="flex">
                    <img src={MLBanner} />
                    <img src={PokemanBanner} />
                </div>
            </div>
            <div className="flex justify-center">
                <button className="text-3xl border-solid border-2 px-8 py-3  rounded-md text-primary_yellow font-semibold bg-primary_blue mt-20 hover:bg-primary_yellow hover:text-primary_blue" onClick={() => setAuthModal(true)}>Test ML Model</button>
            </div>
            <Auth isOpen={isAuthModalOpen} handleCancel={() => setAuthModal(false)} />
        </div>
    );

}

export default Banner;
