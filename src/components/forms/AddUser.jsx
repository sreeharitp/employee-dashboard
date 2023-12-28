import React, { useState } from 'react'
import Popup from '../popup/Popup'
import AddButton from '../popup/AddButton'
import { FiPlus, FiX } from "react-icons/fi";
import MainForm from './add_user/MainForm';


const AddUser = () => {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <AddButton setOpen={setIsOpen} data="User" role="addData" />
            <Popup setOpen={setIsOpen} open={isOpen}>
                <div className='px-5 py-3 flex items-center justify-between border-b border-[#e2e7f1]'>
                    <div className='text-[16px] font-semibold'>Add User</div>
                    <FiX onClick={closeModal} className='text-[#58606b] cursor-pointer' />
                </div>
                <div className='px-5 py-3'>
                    <MainForm />
                </div>
            </Popup>
        </>
    )
}

export default AddUser