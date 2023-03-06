import React from 'react';
import { elementsCollections } from './elements';
import Check from "../../images/check.png";
import Bomb from "../../images/bomb.png";
import None from "../../images/none.png";


const ResultBoard = ({ prediction }) => {

    const {
        predictedElementType1,
        predictedElementType2,
        actualElementType1,
        actualElementType2,
        pokemonName,
        pokemonUrl,
        isPredictionCorrect
    } = prediction
    const actualElements = [actualElementType1, actualElementType1];
    const predictElements = [predictedElementType1, predictedElementType2];

    return (
        <div>
            <div className="flex justify-center">
                <p>{pokemonName}</p>
                <img src={pokemonUrl} alt="predicted-element"  width={"250px"}/>
            </div>
            <div className="flex justify-between items-start py-10">
                <ElementPredicted title="Your Model Prediction" elements={predictElements} />
                <div className="w-[100px] pt-24">
                    <img src={isPredictionCorrect ? Check : Bomb} alt="result-img" />
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
