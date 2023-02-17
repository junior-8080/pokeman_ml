import React from 'react';

const ElementList = ({ images }) => {
    return (
        <div className="py-2 bg-[#284053] border-2 border-[#fed2e1] rounded-lg">
            <div className="flex justify-around">
                {
                    images.map((image) => <img src={image} width={"15%"} alt="pokeman-elements"/>)
                }
            </div>
        </div>
    );
}

export default ElementList;
