import React, { useState } from 'react';
import PokemanBanner from "../pokeman_banner.jpeg";

import Auth from './Auth';



const Banner = () => {

    const [isAuthModalOpen, setAuthModal] = useState(false);

    return (
        <div className="bg-[#284053]">
            <div className="bg-[#284053] flex w-[60%] mr-auto ml-auto py-20 px-10 rounded-xl">
                <div className="w-[40%] rounded-2xl">
                    <img src={PokemanBanner} className="rounded-full" />
                </div>
                <div>
                    <p className="text-5xl  px-10  he text-center">Who's that Pokemon?<br /> What element types?</p>
                </div>
                {/* <Auth isOpen={isAuthModalOpen} handleCancel={() => setAuthModal(false)} /> */}
            </div>
        </div>
    );

}

export default Banner;
