import React, { useState } from 'react'
import Popup from '../popup/Popup'
import AddButton from '../popup/AddButton'
import { FiPlus, FiX } from "react-icons/fi";
import { permissionList } from '../../constants';


const AddRole = () => {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <AddButton setOpen={setIsOpen} data="Role" role="addData"/>
            <Popup setOpen={setIsOpen} open={isOpen}>
                <div className='px-5 py-3 flex items-center justify-between border-b border-[#e2e7f1]'>
                    <div className='text-[16px] font-semibold'>Add Role</div>
                    <FiX onClick={closeModal} className='text-[#58606b] cursor-pointer' />
                </div>
                <div className='px-5 py-3'>
                    <form action="" >
                        <label htmlFor="">Role Name</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Role Name' />
                        <label htmlFor="">Description</label>
                        <textarea rows="3" placeholder='Description' className='px-4 py-2'></textarea>
                        <label htmlFor="">Permissions</label>
                        {permissionList.map((items) => (
                            <div key={items.id} className='flex items-center gap-2'>
                                <input type="checkbox" className='cursor-pointer' />
                                <label htmlFor="" className='text-[#58606b] text-[13px]'>{items.title}</label>
                            </div>
                        ))}
                        <button className='btn btn-blue mt-2 w-full'><FiPlus />Add Role</button>
                    </form>
                </div>
            </Popup>
        </>
    )
}

export default AddRole