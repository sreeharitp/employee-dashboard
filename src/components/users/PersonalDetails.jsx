import React, { useState } from 'react';
import { HiMiniPencilSquare } from "react-icons/hi2";


const PersonalDetails = () => {
    const user = {
        first_name: 'Jonathan',
        last_name: 'Samuel',
        email: 'johnathan@example.com',
        phone: '123-456-7890',
        address: "ABC Street No.6 NHG",
        country: "United States",
        state: "California",
        zip: "34546",
    };
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // Add logic to save the edited user data (e.g., make an API call)
        // After saving, set isEditing to false
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };


    return (
        <>
            <div className="flex items-center gap-3 border-b border-[#E5E7EB]  px-5 py-3 ">
                <h2 className='font-semibold text-[15px]'>Personal Details</h2>
                <button onClick={handleEditClick} className='text-[#6C757D] text-sm'><HiMiniPencilSquare /></button>
            </div>
            <div className="flex flex-col justify-between h-[410px]">
                <form onSubmit="" className='p-5'>
                    <div className="flex gap-4">
                        <div className='flex-1'>
                            <label htmlFor="">First Name</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="first_name"
                                value={editedUser.first_name}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="last_name"
                                value={editedUser.last_name}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className='flex-1'>
                            <label htmlFor="">Email Address</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="email"
                                value={editedUser.email}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="phone"
                                value={editedUser.phone}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className='flex-1'>
                            <label htmlFor="">Address</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="address"
                                value={editedUser.address}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="">Country</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="country"
                                value={editedUser.country}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className='flex-1'>
                            <label htmlFor="">State</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="state"
                                value={editedUser.state}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="">Zip Code</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="zip"
                                value={editedUser.zip}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                    </div>

                </form>
                <div className='px-5' >
                    {isEditing &&
                        <div className="flex gap-4 items-center justify-end">
                            <button className='btn btn-gray' onClick={() => setIsEditing(!isEditing)}>Cancel</button>
                            <button className='btn btn-blue' onClick={handleSaveClick}>Save</button>
                        </div>
                    }
                </div>
            </div>


        </>
    );
};

export default PersonalDetails;
