import { message, Modal } from 'antd';
import React, { useState } from 'react';
import { predictMl } from '../../api';
import ElementList from './ElementList';
import { firstSet, secondSet, thirdSet } from './elements';
import PredictionStep from './PredictionStep';
import ResultBoard from './ResultBoard';


const About = () => {
    const [start, setStart] = useState(false);
    const [boardModal, setBoardModal] = useState(false);
    const [prediction, setPrediction] = useState({});
    const [loading, setLoading] = useState(false);

    const handlePrediction = async (data) => {
        try {
            setLoading(true);
            message.info("This might take awhile,kindly wait...")
            const result = await predictMl(data);
            const pokeman_url = URL.createObjectURL(data.pokemonFileData);
            result.pokemon_url = pokeman_url;
            setLoading(false);
            setBoardModal(true);
            setPrediction(result);
            setStart(false);

        } catch (error) {
            setLoading(false)
            message.info('Something went wrong,kindly contact nino.lindenberg@code.berlin')
        }

    }
    return (
        <div className="w-full">
            <div className="mb-40 mt-20 flex justify-center">
                <button className='bg-[#fed2e1] border-4 border-[#284053] py-5 px-8 rounded-md text-black text-6xl font-semibold'
                    onClick={() => setStart(true)}
                >Start !</button>
            </div>
            <div className="flex items-center mb-40  -ml-6">
                <ElementList images={firstSet} />
                <p className="text-4xl pl-6">Follow along SE15 LU</p>
            </div>
            <div className="flex justify-between">
                <div></div>
                <div className="flex items-center mb-40 -mr-6">
                    <p className="text-4xl pr-6 ">Train your own ML Models</p>
                    <ElementList images={secondSet} />
                </div>
            </div>
            <div className="flex align-center items-center mb-40 -ml-6">
                <ElementList images={thirdSet} />
                <p className="text-4xl pl-6">Test its performance</p>
            </div>
            {/* <p className="text-center text-4xl mb-40">ML Master</p> */}
            <Modal
                open={start}
                onCancel={() => setStart(false)}
                footer={[]}
                // className="md:w-[90%] w-[90%]"
                // width={"90%"}
                destroyOnClose={true}
                title={<p className="text-center text-2xl py-3">Steps To Test Your ML!</p>}
            >
                <PredictionStep handlePrediction={handlePrediction} predicting={loading} />
            </Modal>
            <Modal
                open={boardModal}
                onCancel={() => setBoardModal(false)}
                footer={[]}
                width="50%"
                // destroyOnClose={true}
                maskClosable={false}
                title={<p className="text-center text-2xl py-3">Result Board</p>}
            >
                {/* <PredictionStep /> */}
                <ResultBoard prediction={prediction} />
            </Modal>

        </div>
    );
}

export default About;
