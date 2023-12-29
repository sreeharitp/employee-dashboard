import React, { useState } from 'react';
import { FiArrowRight, FiArrowLeft, FiPlus, FiX } from 'react-icons/fi';

const Documents = ({ formData, setForm, nextStep, prevStep }) => {

    const [files, setFiles] = useState([]);
    const handleChange = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
        setFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files).map((file) => URL.createObjectURL(file))]);
    };
    const handleRemove = (index) => setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };
console.log(formData);
    return (
        <div>
            <h2 className='font-light text-[16px] text-[#6C757D] mb-5'>Documents</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-4 items-center">
                    {!!files.length && (
                        <div className='flex gap-4 flex-wrap'>
                            {files.map((url, index) => (
                                <div key={index} className='relative group'>
                                    <img src={url} alt={`File preview ${index + 1}`} className='h-[100px] w-[100px] rounded-[4px]' />
                                    <button onClick={() => handleRemove(index)} className='absolute top-1 right-1 p-0.5 bg-[#0000004c] text-[#d6d9da] rounded-full hidden group-hover:block'>
                                        <FiX /></button>

                                </div>
                            ))}
                        </div>
                    )}
                    <div className='relative cursor-pointer h-[100px] w-[100px] border flex items-center justify-center rounded-[4px]'>
                        <FiPlus size={40} className='text-[#c2c9cf]' />
                        <input type="file" className='absolute opacity-0 top-0 px-4 mb-3 mt-1 h-[100px] w-[100px]'
                            name="docs"
                            value={formData.docs}
                            onChange={handleChange} />
                    </div>

                </div>
                <div className='flex items-center justify-between mt-5'>
                    <button onClick={prevStep} type="submit" className='btn btn-gray'><FiArrowLeft />Previous </button>
                    <button type="submit" className='btn btn-blue'>Next <FiArrowRight /></button>
                </div>


            </form>
        </div>
    );
};

export default Documents;
