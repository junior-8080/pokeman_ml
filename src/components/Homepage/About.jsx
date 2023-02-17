import React, { useState } from 'react';
import ElementList from './ElementList';
import { firstSet, secondSet, thirdSet } from './elements';
import PredictionStep from './PredictionStep';
import { Modal } from 'antd';


const About = () => {
    const [start, setStart] = useState(false);
    return (
        <div className="w-full">
            <div className="mb-40 mt-20 flex justify-center">
                <button className='bg-[#fed2e1] border-4 border-[#284053] py-5 px-8 rounded-md text-black text-6xl font-semibold'
                    onClick={() => setStart(true)}
                >Start !</button>
            </div>
            <div className="flex items-center mb-40  -ml-6">
                <ElementList images={firstSet} />
                <p className="text-4xl pl-6">Create Account</p>
            </div>
            <div className="flex justify-between">
                <div></div>
                <div className="flex items-center mb-40 -mr-6">
                    <p className="text-4xl pr-6 ">Upload ML <br /> Models &<br /> Pokemons</p>
                    <ElementList images={secondSet} />
                </div>
            </div>
            <div className="flex align-center items-center mb-40 -ml-6">
                <ElementList images={thirdSet} />
                <p className="text-4xl pl-6">Battle other <br /> ML <br />Enthusiasts</p>
            </div>
            <p className="text-center text-4xl mb-40">ML Master</p>
            <Modal
                open={start}
                onCancel={() => setStart(false)}
                footer={[]}
                width="50%"
                destroyOnClose={true}
                title={<p className="text-center text-2xl py-3">Steps To Test Your ML!</p>}
            >
                <PredictionStep />
            </Modal>
        </div>
    );
}

export default About;
