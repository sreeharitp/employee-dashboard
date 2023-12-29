import React from 'react';
import { FiArrowRight,FiArrowLeft } from 'react-icons/fi';

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
                <input type="file" className='w-full px-4 mb-3 mt-1'
                    name="docs"
                    value={formData.docs}
                    onChange={handleChange} />
                <div className='flex items-center justify-between mt-5'>
                    <button onClick={prevStep} type="submit" className='btn btn-gray'><FiArrowLeft />Previous </button>
                    <button type="submit" className='btn btn-blue'>Next <FiArrowRight /></button>
                </div>


            </form>
        </div>
    );
};

export default Documents;
