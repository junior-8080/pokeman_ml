import React from 'react';
import { elementsCollections } from './elements';
import Check from "../../images/check.png";
import Bomb from "../../images/bomb.png";
import None from "../../images/none.png";


const ResultBoard = ({ prediction }) => {

    const {
        predicted_element_type_1,
        predicted_element_type_2,
        correct_element_type_1,
        correct_element_type_2,
        // pokemon_name,
        pokemon_url,
        is_correct_prediction
    } = prediction
    const actualElements = [correct_element_type_1, correct_element_type_2];
    const predictElements = [predicted_element_type_1, predicted_element_type_2];

    return (
        <div>
            <div className="flex justify-center">
                <img src={pokemon_url} alt="predicted-element"  width={"250px"}/>
            </div>
            <div className="flex justify-between items-start py-10">
                <ElementPredicted title="Your Model Prediction" elements={predictElements} />
                <div className="w-[100px] pt-24">
                    <img src={is_correct_prediction ? Check : Bomb} alt="result-img" />
                </div>
                <ElementPredicted title="Actual Element Types" elements={actualElements} />
            </div>
        </div>
    );
}


const ElementPredicted = ({ title, elements }) => {

    return (
        <div>
            <p className="text-2xl text-center py-4 font-semibold">{title}</p>
            <div className="flex">
                {elements.map((element => <div>
                    <img src={elementsCollections[element] || None} alt="predicted-element" />
                </div>
                ))}
            </div>
        </div>
    )
}

export default ResultBoard;
