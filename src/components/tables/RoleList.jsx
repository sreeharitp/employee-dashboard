import React from 'react'
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { roleList } from '../../constants';
import EditRole from '../forms/EditRole';
import Delete from '../popup/Delete';


const RoleList = () => {
    return (
        <div className='overflow-x-scroll scrollbar'>
            <table className='mt-5'>
                <thead className='bg-[#f5f6f8]'>
                    <tr>
                        <th>ID</th>
                        <th>ROLE NAME</th>
                        <th>DESCRIPTION</th>
                        <th>NO OF USERS</th>
                        <th className='w-[12%]'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {roleList.map((items, index) => (
                        <tr key={items.id}>
                            <td>{index + 1}</td>
                            <td >
                                {items.name}
                            </td>
                            <td>{items.description}</td>
                            <td>{items.users}</td>
                            <td>
                                <div className='flex items-center gap-3'>
                                    <EditRole />
                                    <Delete data="role" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RoleList