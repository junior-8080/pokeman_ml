import React from 'react';
import { Link } from 'react-router-dom';
import MLBanner from "../machine-learning-1.png";
import PokemanBanner from "../pokeman-banner.png";

const Welcome = () => {
    const username = "Nino"
    return (
        <div className="mt-40">
            <p className="text-center text-5xl text-primary_dark">Welcome! {username}</p>
            <div className="flex justify-center mt-20">
                <Link>
                    <div className=" border border-primary_blue py-10 mr-10 cursor-pointer hover:scale-110 hover:transition ease-in-out delay-400 h-96">
                        <p className="text-5xl text-primary_yellow text-center font-semibold py-10">ML MODEL DECK</p>
                        <div className="flex justify-center">
                            <img src={MLBanner} width="30%" />
                        </div>
                    </div>
                </Link>
                <Link to="/decks">
                    <div className="border border-primary_yellow py-10 cursor-pointer hover:scale-110 hover:transition ease-in-out delay-400 h-96">
                        <p className="text-5xl text-primary_blue text-center font-semibold py-10">POKEMAN DECK</p>
                        <div className="flex justify-center" >
                            <img src={PokemanBanner} width="30%" />
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Welcome;
