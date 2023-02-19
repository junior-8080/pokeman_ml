import React from 'react';
import PokemanBanner from "../../images/pokeman_banner.jpeg"


const Banner = () => {

    return (
        <div className="bg-[#284053]">
            <div className="bg-[#284053] flex w-[60%] mr-auto ml-auto py-20 px-10 rounded-xl">
                <div className="w-[40%] rounded-2xl">
                    <img src={PokemanBanner} className="rounded-full" alt="banner-logo" />
                </div>
                <div>
                    <p className="text-5xl  px-10 text-center mb-4">Which Pokemon?</p>
                    <p className="text-5xl  px-10 text-center"> Which element types?</p>
                </div>
            </div>
        </div>
    );

}

export default Banner;
