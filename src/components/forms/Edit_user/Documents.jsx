import React from 'react';
import { FiArrowLeft, FiArrowRight, FiPlus } from 'react-icons/fi';

const Documents = ({ formData, setForm, nextStep, prevStep }) => {
    const handleChange = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div>
            <h2 className='font-light text-[16px] text-[#6C757D] mb-5'>Documents</h2>
            <form onSubmit={handleSubmit}>
                <div className='relative cursor-pointer h-[100px] w-[100px] border flex items-center justify-center rounded-[4px]'>
                    <FiPlus size={40} className='text-[#c2c9cf]' />
                    <input type="file" className='absolute opacity-0 top-0 px-4 mb-3 mt-1 h-[100px] w-[100px]'
                        name="docs"
                        value={formData.docs}
                        onChange={handleChange} />
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
