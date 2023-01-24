import React from 'react';
import Decks from '../components/Decks';
import Header from '../components/Header';
import Pokeman1 from "../pk1.jpg";
import Pokeman2 from "../pk2.jpg";



const decks = [{name:"Dec1",image:Pokeman1},
{name:"Dec2",image:Pokeman1},
{name:"Dec3",image:Pokeman2},
{name:"Dec4",image:Pokeman1},
{name:"Dec5",image:Pokeman1},
{name:"Dec6",image:Pokeman1},
{name:"Dec7",image:Pokeman2},
{name:"Dec8",image:Pokeman1},
{name:"Dec9",image:Pokeman2}
];



const ModelDeck = () => {
    return (
        <div>
            <Header />
            <Decks decks={decks} type="pokeman" />
        </div>
    );
}

export default ModelDeck;
