import React from 'react';
import ElementList from './Homepage/ElementList';
import Element from "../element2.png";


const About = () => {
    return (
        <div>
            <div className="mb-40 mt-20 flex justify-center">
                <button className='bg-[#fed2e1] border-4 border-[#284053] py-3 px-8 rounded-sm text-black text-2xl font-semibold'>Start!</button>
            </div>
            <div className="flex items-center mb-40  -ml-6">
                <ElementList images={[Element, Element, Element, Element, Element, Element]} />
                <p className="text-4xl pl-6">Create Account</p>
            </div>
            <div className="flex align-center items-center mb-40 ml-auto">
                <p className="text-4xl pr-6 ml-auto">Upload ML <br /> Models &<br /> Pokemons</p>
                <ElementList images={[Element, Element, Element, Element, Element, Element]} />
            </div>
            <div className="flex align-center items-center mb-40 -ml-6">
                <ElementList images={[Element, Element, Element, Element, Element, Element]} />
                <p className="text-4xl pl-6">Battle other <br /> ML <br />Enthusiasts</p>
            </div>
            <p className="text-center text-4xl mb-40">ML Master</p>
        </div>
    );
}

export default About;
