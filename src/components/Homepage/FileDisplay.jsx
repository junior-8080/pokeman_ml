import React from 'react';
import ModelFile from "../../images/file.png";
import PokemaFile from "../../images/image.png";

const FileDisplay = ({ handleDelete, type }) => {
    return (
        <p className="text-center py-20 border-dashed border-4 border-[#fca8c2]">
            <div className="w-[15%] mr-auto ml-auto">
                <img src={type === "pokemon" ? PokemaFile : ModelFile} width={"100%"} alt="file-uploaded" />
                <button className="mt-2 py-1 px-4 text-base bg-[#ec0d57] text-white rounded-lg" onClick={() => handleDelete()}><i class="fa-regular fa-trash-can"></i></button>
            </div>

        </p>
    );
}

export default FileDisplay;
