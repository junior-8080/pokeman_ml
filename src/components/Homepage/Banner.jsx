import React from 'react';
import PokemanBanner from "../../images/pokeman_banner.jpeg"


const Banner = () => {

    return (
        <div className="bg-[#284053]">
            <div className="bg-[#284053] flex justify-center items-center py-10  border-2 border-black">
                <div className="w-[20%] lg:[40%] rounded-2xl">
                    <img src={PokemanBanner} className="rounded-full" alt="banner-logo" />
                </div>
                <div>
                    <p className="text-5xl  px-10 text-center mb-8">Which Pokemon?</p>
                    <p className="text-5xl  px-10 text-center"> Which element types?</p>
                </div>
            </div>
        </div>
    );

}

export default Banner;
