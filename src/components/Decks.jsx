import React from 'react';

const Decks = ({ decks, type }) => {
    return (
        <div className="max-w-6xl ml-auto mr-auto text-primary_dark">
            <div>
                <p className="text-center text-4xl py-20">See Your {type === "ml" ? "ML Model Deck!" : "ML Model Deck!"}</p>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {
                    decks.map((deck) => <div className="border-2 border-primary_yellow py-10 px-5 hover:border-primary_blue cursor-pointer">
                        <div className="flex justify-center">
                            <img src={deck.image}  width="30%"/>
                        </div>
                        <p className=" text-xl font-semibold text-center py-10 ">{deck.name}</p>
                    </div>)
                }
            </div>
        </div>

    );
}

export default Decks;
