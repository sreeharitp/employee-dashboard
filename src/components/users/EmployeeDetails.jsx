import React, { useState } from 'react';
import { HiMiniPencilSquare } from "react-icons/hi2";


const EmployeeDetails = () => {
    const user = {
        department: 'Sales',
        role: 'Manager',
        join_date: '11/09/2023',
        salary: '30,000 /-',
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
                <h2 className='font-semibold text-[15px]'>Employment Details</h2>
                <button onClick={handleEditClick} className='text-[#6C757D] text-sm'><HiMiniPencilSquare /></button>
            </div>
            <div className="flex flex-col justify-between h-auto sm:h-[410px]">
                <form onSubmit="" className='p-5'>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                        <div className='flex-1'>
                            <label htmlFor="">Depertment</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="department"
                                value={editedUser.department}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="">Role</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="role"
                                value={editedUser.role}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                        <div className='flex-1'>
                            <label htmlFor="">Joined Date</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="join_date"
                                value={editedUser.join_date}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="">Salary</label>
                            <input type="text" className={`w-full px-4 mb-3 mt-1 ${isEditing ? 'border border-[#6C757D]' : ''}`}
                                name="salary"
                                value={editedUser.salary}
                                readOnly={!isEditing}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    

                <div className='mt-4' >
                    {isEditing &&
                        <div className="flex gap-4 items-center justify-end">
                            <button className='btn btn-gray' onClick={() => setIsEditing(!isEditing)}>Cancel</button>
                            <button className='btn btn-blue' onClick={handleSaveClick}>Save</button>
                        </div>
                    }
                </div>
                </form>
            </div>


        </>
    );
};

export default EmployeeDetails;
