import React, { useState } from 'react'
import Popup from '../popup/Popup'
import AddButton from '../popup/AddButton'
import { FiPlus, FiX } from "react-icons/fi";


const AddBranch = () => {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <AddButton setOpen={setIsOpen} data="Branch" role="addData" />
            <Popup setOpen={setIsOpen} open={isOpen} >
                <div className='px-5 py-3 flex items-center justify-between border-b border-[#e2e7f1]'>
                    <div className='text-[16px] font-semibold'>Add Branch</div>
                    <FiX onClick={closeModal} className='text-[#58606b] cursor-pointer' />
                </div>
                <div className='px-5 py-3'>
                    <form action="" >
                        <label htmlFor="">Branch Name</label>
                        <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Depertment Name' />
                        <div className="flex gap-4">
                            <div className='flex-1'>
                                <label htmlFor="">Email Address</label>
                                <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Email Address' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="">Phone Number</label>
                                <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Phone Number' />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className='flex-1'>
                                <label htmlFor="">City</label>
                                <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='City' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="">District</label>
                                <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='District' />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className='flex-1'>
                                <label htmlFor="">State</label>
                                <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='State' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="">Country</label>
                                <input type="text" className='w-full px-4 mb-3 mt-1' placeholder='Country' />
                            </div>
                        </div>
                        <button className='btn btn-blue mt-2 w-full'><FiPlus />Add Branch</button>
                    </form>
                </div>
            </Popup>
        </>
    )
}

export default AddBranch