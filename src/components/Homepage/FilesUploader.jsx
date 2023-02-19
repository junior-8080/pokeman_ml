import { Progress } from "antd";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { verifyFile } from "../../api";
import InvalidFile from "../../images/file-error.png";




const FilesUploader = ({ type, handleFileUpload, }) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [percent, setPercent] = useState(0);




    const fileTypes = type === "pokemon" ? ["JPG", "PNG", "GIF"] : ["h5", "hdf5", "pkl", "pt", "pth"];
    const allowedFiles = type === "pokemon" ? "png,jpg" : "h5,hdf5,pkl,pt,pth";

   




    const handleChange = (files) => {
        setError(false);
        handleFileVerification(files);
    }

    const handleDrop = (files) => {
        handleFileVerification(files);
    }

    const handleFileVerification = async (files) => {
        try {
            setLoading(true);
            setPercent(50);
            const result = await verifyFile(files, type);
            const isValid = result.is_verified_image || result.is_verified_model_file;
            if (isValid) {
                setLoading(false);
                setPercent(100);
                setSelectedFile(files);
                handleFileUpload(type, files);
            } else {
                throw new Error("invalid file")
            }

        } catch (error) {
            setLoading(false)
            setSelectedFile(null)
            setError(true);
            setPercent(0);
        }
    }

    return (<div>
        {(!selectedFile && !isError) && <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={false} onDrop={handleDrop} >
            <div className="text-center py-20 border-dashed border-4 border-[#fca8c2] cursor-pointer text-lg font-bold">
                Select File / Drag & Drop
                <p className="font-thin mt-1 text-sm text-[#687078]">{allowedFiles.replaceAll(",", " ")}</p>
                {isLoading ? <Progress percent={percent} /> : ""}
            </div>
        </FileUploader>}
        {isError && <div className="text-center py-20 border-dashed border-4 border-red-700 text-lg font-bold">
            <div className="w-[15%] mr-auto ml-auto">
                <img src={InvalidFile} width={"100%"} alt="file-uploaded" />
            </div>
            <p className="text-red-700">Invalid File</p>
            <button className="bg-[#fed2e1] py-2 px-2 mt-4 text-sm rounded-md" onClick={() => setError(false)}>Try Again</button>
        </div>}
    </div>)
}

export default FilesUploader;