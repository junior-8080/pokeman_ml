import React from 'react';

const ElementList = ({images}) => {
    return (
        <div className="flex py-2 bg-[#284053] border-2 border-[#fed2e1] rounded-lg w-[60%]">
            {
                images.map((image) => <img src={image} width={"15%"}/>)
            }
        </div>
    );
}

export default ElementList;
