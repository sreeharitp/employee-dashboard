import React from 'react'
import { FiEdit2, FiPlus } from 'react-icons/fi'

const AddButton = ({ data, setOpen, role }) => {
  return (
    <>
      {role == "editData" ? <div onClick={() => setOpen(true)} className='border flex items-center cursor-pointer justify-center h-8 w-8 rounded-[4px]'>
        <FiEdit2 />
      </div> :
        <button className='btn btn-blue' onClick={() => setOpen(true)} ><FiPlus />Add {data}</button>}
    </>
  )
}

export default AddButton