import { message, Steps } from 'antd';
import React, { useState } from 'react';
import FileDisplay from './FileDisplay';
import FilesUploader from './FilesUploader';



const PredictionStep = () => {

    const [current, setCurrent] = useState(0);
    const [modelFileData, setModelFileData] = useState(null);
    const [pokemanFileData, setPokemanFileData] = useState(null);
    console.log("🚀 ~ file: PredictionStep.jsx:13 ~ PredictionStep ~ pokemanFileData", pokemanFileData)

    const handleFileUpload = (type, fileData) => {
        if (type === "model") {
            setModelFileData(fileData)
        }
        if (type === "pokeman") {
            setPokemanFileData(fileData)
        }
    }

    const steps = [
        {
            key: "model",
            title: 'Upload Model',
            content: !modelFileData ? <FilesUploader type="model" handleFileUpload={(type, fileData) => handleFileUpload(type, fileData)} />
                : <FileDisplay />,
        },
        {
            key: "pokeman",
            title: 'Upload Pokeman',
            content: !pokemanFileData ? <FilesUploader type="pokeman" handleFileUpload={(type, fileData) => handleFileUpload(type, fileData)} />
                : <FileDisplay type="pokeman" />,
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

    return (
        <div className="px-10">
            <Steps current={current} items={items} />
            <div>{steps[current].content}</div>

            <div
                className="mt-20"
            >
                <div className="flex justify-center">
                    {current < steps.length - 1 && (
                        <button className="bg-[#fed2e1] font-semibold py-4 px-4 text-xl rounded-md" onClick={() => next()}>
                            Next Step
                        </button>
                    )}
                    {current > 0 && (
                        <button
                            onClick={() => prev()}
                            className="bg-[#fed2e1] font-semibold py-4 px-4 text-xl rounded-md"
                        >
                            Previous Step
                        </button>
                    )}
                    {(modelFileData && pokemanFileData) && (
                        <button className="bg-[#fed2e1] font-semibold py-4 px-4 text-xl ml-10 rounded-md" onClick={() => message.success('Processing complete!')} disabled={(!modelFileData || !pokemanFileData)}>
                            Proceed To Test
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PredictionStep;
