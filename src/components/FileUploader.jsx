import React, { useState } from "react";
import { Modal, Radio } from "antd";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const FileUploaderModal = ({ isOpen, handleCancel }) => {
    console.log("🚀 ~ file: FileUploader.jsx:13 ~ FileUploader ~ isOpen", isOpen)

    const [value, setValue] = useState("ml");

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const handleChange = (files) => {
        console.log(files);
    }

    const  handleDrop = (file) => {

    }

    return <Modal
        open={isOpen}
        onCancel={handleCancel}
        footer={[]}
        width="35%"
        destroyOnClose={true}
        title={<p className="text-center text-xl py-3">Upload Your Model/Pokeman File</p>}
    >
        <div className="my-5">
            <p className="text-lg font-bold">Select type:</p>
            <Radio.Group onChange={onChange} value={value} >
                <Radio value={"pokeman"}>Pokeman</Radio>
                <Radio value={"ml"}>Model</Radio>
            </Radio.Group>
        </div>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={false} onDrop={handleDrop}>
            <p className="text-center py-12 border-dashed border-2 border-[#fed2e1] cursor-pointer text-lg font-bold">Select File / Drag & Drop</p>
        </FileUploader>

    </Modal>

}

export default FileUploaderModal;