import React, { useState } from 'react'
import Popup from '../popup/Popup'
import AddButton from '../popup/AddButton'
import { FiSave, FiX } from "react-icons/fi";


const EditDepertment = () => {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <AddButton setOpen={setIsOpen} data="Department" role="editData"/>
            <Popup setOpen={setIsOpen} open={isOpen} >
                <div className='px-5 py-3 flex items-center justify-between border-b border-[#e2e7f1]'>
                    <div className='text-[16px] font-semibold'>Edit Depertment</div>
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
                        <div className="flex gap-4">
                            <button className='btn btn-gray mt-2 w-full' onClick={closeModal}>Cancel</button>
                            <button className='btn btn-blue mt-2 w-full'><FiSave />Save</button>
                        </div>
                    </form>
                </div>
            </Popup>
        </>
    )
}

export default EditDepertment