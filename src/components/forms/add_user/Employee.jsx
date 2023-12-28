import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Employee = ({ formData, setForm, nextStep, prevStep }) => {
    const handleChange = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div>
            <h2 className='font-light text-[16px] text-[#6C757D] mb-5'>Employee Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <div className='flex-1'>
                        <label htmlFor="">Department</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Department'
                            name="department"
                            value={formData.department}
                            onChange={handleChange} />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="">Role</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Role'
                            name="role"
                            value={formData.role}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className='flex-1'>
                        <label htmlFor="">Joined Date</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Joined Date'
                            name="join_date"
                            value={formData.join_date}
                            onChange={handleChange} />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="">Salary</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Salary'
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange} />
                    </div>
                </div>

                <div className='flex items-center justify-between mt-5'>
                    <button onClick={prevStep} type="submit" className='btn btn-gray'>Previous </button>
                    <button type="submit" className='btn btn-blue'>Next <FiArrowRight /></button>
                </div>


            </form>
        </div>
    );
};

export default Employee;
