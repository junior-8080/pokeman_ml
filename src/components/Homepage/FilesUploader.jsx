import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";


const FilesUploader = ({ type, handleFileUpload }) => {

    const [selectedFile, setSelectedFile] = useState(null)

    const fileTypes = type === "pokeman" ? ["JPG", "PNG", "GIF"] : ["JPG", "PNG", "GIF"];


    const handleChange = (files) => {
        setSelectedFile(files)
        handleFileUpload(type, files)
    }

    const handleDrop = (files) => {
        selectedFile(files)
        handleFileUpload(type, files)
    }

    return (<div>
        {!selectedFile && <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={false} onDrop={handleDrop}>
            <p className="text-center py-20 border-dashed border-2 border-[#fed2e1] cursor-pointer text-lg font-bold">Select File / Drag & Drop</p>
        </FileUploader>}
    </div>)
}

export default FilesUploader;