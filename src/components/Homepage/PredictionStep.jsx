import React, { useState } from 'react';
import FileDisplay from './FileDisplay';
import FilesUploader from './FilesUploader';
import { Steps, Input, Radio, InputNumber } from 'antd';


const options = [
    { label: 'TensorFlow', value: 'tensorflow' },
    { label: 'Scikit-Learn', value: 'scikit-learn' },
    { label: 'PyTorch', value: 'pytorch' },
];

const cnnTypes = [
    { label: 'CNN', value: 'CNN' },
    { label: 'ANN', value: 'ANN' },
];




const PredictionStep = ({ handlePrediction, predicting }) => {

    const [current, setCurrent] = useState(0);
    const [modelFileData, setModelFileData] = useState(null);
    const [pokemonFileData, setpokemonFileData] = useState(null);
    const [mlLirary, setMlLibrary] = useState("");
    const [pokemonName, setPokemonName] = useState("");
    const [nnType,setNNType] = useState("");
    const [threshold, setThreshold] = useState("")



    const handleFileUpload = (type, fileData) => {
        if (type === "model") {
            setModelFileData(fileData)
        }
        if (type === "pokemon") {
            setpokemonFileData(fileData)
        }

    }

    const steps = [
        // {
        //     key: "model",
        //     title: 'Prediction Meta Data',
        //     content: <div>
        //         <div className="mb-6">
        //             <p className="text-lg font-semibold py-2">Select Your Model Library</p>
        //             <Radio.Group options={options} onChange={(e) => setMlLibrary(e.target.value)} value={mlLirary} />
        //             {!mlLirary && <p className="text-[#ec0d57]">Model Library Required</p>}
        //         </div>
        //         <div>
        //             <p className="text-lg font-semibold py-2">Enter Your Pokemon Name:</p>
        //             <Input placeholder="Please type in the correct english name of your Pokemon!" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
        //             {!pokemonName && <p className="text-[#ec0d57]">Pokemon Name Required</p>}

        //         </div>
        //     </div>
        // },
        {
            key: "model",
            title: 'Upload Model',
            content: <div>
                <div className="mb-6">
                    <p className="text-lg font-semibold py-2">Select Your Model Library</p>
                    <Radio.Group options={options} onChange={(e) => setMlLibrary(e.target.value)} value={mlLirary} />
                    {!mlLirary && <p className="text-[#ec0d57]">Model Library Required</p>}
                </div>
                <div className="mb-6">
                    <p className="text-lg font-semibold py-2">Select NN Type</p>
                    <Radio.Group options={cnnTypes} onChange={(e) => setNNType(e.target.value)} value={nnType} />
                    {!nnType && <p className="text-[#ec0d57]">Model Library Required</p>}
                </div>
                <div className="mb-6">
                    <p className="text-lg font-semibold py-2">Model Threshold</p>
                    <InputNumber placeholder="Please prediction threshold" value={threshold} onChange={(e) => setThreshold(e.target.value)} />
                    {!threshold && <p className="text-[#ec0d57]">Model Library Required</p>}
                </div>
                {!modelFileData ? <FilesUploader type="model" handleFileUpload={(type, fileData) => handleFileUpload(type, fileData)}
                    handleMlLibrary={(value) => setMlLibrary(value)} mlLirary={mlLirary} />
                    : <FileDisplay handleDelete={() => setModelFileData(null)} />}
            </div>,
        },
        {
            key: "pokemon",
            title: 'Upload Pokemon',
            content: <div>
                <div className="mb-6">
                    <p className="text-lg font-semibold py-2">Enter Your Pokemon Name:</p>
                    <Input placeholder="Please type in the correct english name of your Pokemon!" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
                    {!pokemonName && <p className="text-[#ec0d57]">Pokemon Name Required</p>}

                </div>
                {!pokemonFileData ? <FilesUploader type="pokemon" handleFileUpload={(type, fileData) => handleFileUpload(type, fileData)}
                    handlePokemon={(value) => setPokemonName(value)} pokemonName={pokemonName} /> : <FileDisplay type="pokemon" handleDelete={() => setpokemonFileData(null)} />}
            </div>
            ,

        }
    ];



    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.key,
        title: item.title,
    }));

    const predict = () => {
        const data = {
            modelFileData,
            pokemonFileData,
            pokemonName,
            mlLirary,
            nnType,
            threshold,
        }
        handlePrediction(data);
    }

    return (
        <div className="px-10">
            <Steps current={current} items={items} />
            <div>{steps[current].content}</div>

            <div
                className="mt-20"
            >
                <div className="flex justify-center">
                    {current > 0 && (
                        <button
                            onClick={() => prev()}
                            className="bg-[#fed2e1] font-semibold py-2 px-4 text-lg rounded-md mr-4"
                        >
                            Previous Step
                        </button>
                    )}
                    {(current < steps.length - 1 ) && (
                        <button className="bg-[#fed2e1] font-semibold py-2 px-4 text-lg rounded-md" onClick={() => next()}>
                            Next Step
                        </button>
                    )}
                    {(modelFileData && pokemonFileData && pokemonName && mlLirary) && (
                        <button className="bg-[#fed2e1] font-semibold py-2 px-4 text-lg ml-10 rounded-md" onClick={predict} disabled={(!modelFileData || !pokemonFileData || predicting)}>
                            {predicting ? "Please wait..." : "Predict"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PredictionStep;
