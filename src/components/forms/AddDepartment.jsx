import React, { useState } from 'react'
import Popup from '../popup/Popup'
import AddButton from '../popup/AddButton'
import { FiPlus, FiX } from "react-icons/fi";


const AddDepertment = () => {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <AddButton setOpen={setIsOpen} data="Department" role="addData" />
            <Popup setOpen={setIsOpen} open={isOpen} >
                <div className='px-5 py-3 flex items-center justify-between border-b border-[#e2e7f1]'>
                    <div className='text-[16px] font-semibold'>Add Depertment</div>
                    <FiX onClick={closeModal} className='text-[#58606b] cursor-pointer' />
                </div>
                <div className='px-5 py-3'>
                    <form action="" >
                        <label htmlFor="">Depertment Name</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Depertment Name' />
                        <label htmlFor="">Depertment Head</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Depertment Head' />
                        <label htmlFor="">Description</label>
                        <textarea rows="3" placeholder='Description' className='px-4 py-2'></textarea>
                        <button className='btn btn-blue mt-2 w-full'><FiPlus />Add Depertment</button>
                    </form>
                </div>
            </Popup>
        </>
    )
}

export default AddDepertment