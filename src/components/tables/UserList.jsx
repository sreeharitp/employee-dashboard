import React from 'react'
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { userList } from '../../constants';
import EditUser from '../forms/EditUser';
import Delete from '../popup/Delete';


const UserList = () => {
    return (
        <div className='overflow-x-scroll scrollbar'>
            <table className='mt-5'>
                <thead className='bg-[#f5f6f8]'>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DESIGNATION</th>
                        <th>DEPARTMENT</th>
                        <th className='w-[12%]'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((items, index) => (
                        <tr key={items.id}>
                            <td>{index + 1}</td>
                            <td >
                                <div className='flex items-center gap-3'>
                                    <img src={items.img} alt="" className='h-9 rounded-full' />
                                    {items.name}
                                </div>
                            </td>
                            <td>{items.designation}</td>
                            <td>{items.department}</td>
                            <td>
                                <div className='flex items-center gap-3'>
                                   <EditUser/>
                                   <Delete data="user" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList