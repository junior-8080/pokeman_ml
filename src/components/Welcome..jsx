import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MLBanner from "../machine-learning-1.png";
import PokemanBanner from "../pokeman-banner.png";
import FileUploaderModal from './FileUploader';

const Welcome = () => {
    const username = "Nino"

    const [isUploaderModalOpen,setUploaderModal] = useState(false);

    return (
        <div className="mt-10">
            <p className="text-center text-5xl text-[#fed2e1]">Welcome! {username}</p>
            <div className="mb-10 mt-20 flex justify-center">
                <button className='bg-[#fed2e1] border-4 border-[#284053] py-3 px-8 rounded-3xl text-black text-3xl font-semibold mr-10' onClick={() => setUploaderModal(true)}
                >Upload ML/Pockman!</button>
                  <button className='bg-[#fed2e1] border-4 border-[#284053] py-6 px-8 rounded-3xl text-black text-3xl font-semibold ml-10'
                >Start Prediction </button>
            </div>
            <div className="flex justify-center mt-20">
                <Link to="/deck-ml">
                    <div className=" border border-primary_blue py-10 mr-10 cursor-pointer hover:scale-105 hover:transition ease-in-out delay-400 h-96 bg-white rounded-2xl">
                        <p className="text-5xl text-primary_yellow text-center font-semibold py-10">ML MODEL DECK</p>
                        <div className="flex justify-center">
                            <img src={MLBanner} width="30%" />
                        </div>
                    </div>
                </Link>
                <Link to="/deck-pokeman">
                    <div className="border border-primary_yellow py-10 cursor-pointer hover:scale-105 hover:transition ease-in-out delay-400 h-96 bg-white rounded-2xl">
                        <p className="text-5xl text-primary_blue text-center font-semibold py-10">POKEMAN DECK</p>
                        <div className="flex justify-center" >
                            <img src={PokemanBanner} width="30%" />
                        </div>
                    </div>
                </Link>
            </div>
            <FileUploaderModal  isOpen={isUploaderModalOpen} handleCancel={() => setUploaderModal(false)} />
        </div>
    );
}

export default Welcome;
