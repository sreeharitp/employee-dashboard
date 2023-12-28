import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Emergency = ({ formData, setForm, nextStep, prevStep }) => {
    const handleChange = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div>
            <h2 className='font-light text-[16px] text-[#6C757D] mb-5'>Emergency Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <div className='flex-1'>
                        <label htmlFor="">Email Address</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Email Address'
                            name="email"
                            value={formData.email}
                            onChange={handleChange} />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Phone Number'
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className='flex-1'>
                        <label htmlFor="">Address</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Address'
                            name="address"
                            value={formData.address}
                            onChange={handleChange} />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="">Country</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Country'
                            name="country"
                            value={formData.country}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className='flex-1'>
                        <label htmlFor="">State</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='State'
                            name="state"
                            value={formData.state}
                            onChange={handleChange} />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="">Zip Code</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Zip Code'
                            name="zip"
                            value={formData.zip}
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

export default Emergency;
