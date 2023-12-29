import React from 'react';
import { roles } from '../../../constants';
import { FiArrowLeft } from 'react-icons/fi';

const Roles = ({ formData, setForm, nextStep, prevStep }) => {
    const handleChange = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div>
            <h2 className='font-light text-[16px] text-[#6C757D] mb-5'>Roles</h2>
            <form onSubmit={handleSubmit}>
                {roles.map((items) => (
                    <div className='flex items-center gap-2' key={items.id}>
                        <input type="checkbox" className='cursor-pointer' name="role"
                            value={formData.role}
                            onChange={handleChange} />
                        <label htmlFor="" className='text-[#58606b] text-[13px]'>{items.title}</label>
                    </div>
                ))}
                <div className='flex items-center justify-between mt-5'>
                <button onClick={prevStep} type="submit" className='btn btn-gray'><FiArrowLeft />Previous </button>
                    <button type="submit" className='btn btn-blue' onClick={handleSubmit}>Submit</button>
                </div>


            </form>
        </div>
    );
};

export default Roles;
