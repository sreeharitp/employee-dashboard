import React from 'react';
import { FiArrowRight } from "react-icons/fi";


const PersonalInfo = ({ formData, setForm, nextStep }) => {
  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h2 className=' font-light text-[16px] text-[#6C757D] mb-5'>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className='flex-1'>
            <label htmlFor="">First Name</label>
            <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='First Name'
              name="first_name"
              value={formData.first_name}
              onChange={handleChange} />
          </div>
          <div className='flex-1'>
            <label htmlFor="">Last Name</label>
            <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Last Name'
              name="last_name"
              value={formData.last_name}
              onChange={handleChange} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4">
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
        <div className="flex flex-col sm:flex-row sm:gap-4">
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
        <div className="flex flex-col sm:flex-row sm:gap-4">
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
        <div className='flex items-center justify-end mt-5'>
          <button type="submit" className='btn btn-blue'>Next <FiArrowRight /></button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
