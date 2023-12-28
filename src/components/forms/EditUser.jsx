import React, { useState } from 'react'
import Popup from '../popup/Popup'
import AddButton from '../popup/AddButton'
import {  FiX } from "react-icons/fi";
import MainForm from './Edit_user/MainForm';


const EditUser = () => {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <AddButton setOpen={setIsOpen} data="Role" role="editData" />
            <Popup setOpen={setIsOpen} open={isOpen}>
                <div className='px-5 py-3 flex items-center justify-between border-b border-[#e2e7f1]'>
                    <div className='text-[16px] font-semibold'>Edit Role</div>
                    <FiX onClick={closeModal} className='text-[#58606b] cursor-pointer' />
                </div>
                <div className='px-5 py-3'>
                <MainForm />
                </div>
            </Popup>
        </>
    )
}

export default EditUser