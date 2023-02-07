import React from 'react';
import Decks from '../components/Decks';
import Header from '../components/Homepage/Header';





const decks = [{ name: "Dec1" }, { name: "Dec2" }, { name: "Dec3" }, { name: "Dec4" }, { name: "Dec5" }, { name: "Dec6" }, { name: "Dec7" }, { name: "Dec8" }, { name: "Dec9" }];



const ModelDeck = () => {
    return (
        <div>
            <Header />
            <Decks decks={decks} type="ml" />
        </div>
    );
}

export default ModelDeck;
