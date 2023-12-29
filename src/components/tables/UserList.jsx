import React from 'react'
import { userList } from '../../constants';
import EditUser from '../forms/EditUser';
import Delete from '../popup/Delete';
import { Link } from 'react-router-dom';


const UserList = () => {
    return (
        <div className='overflow-x-scroll scrollbar'>
            <table className='mt-5 table-auto'>
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
                              
                                    <Link to="/users/userprofile" >
                                        <div className='flex items-center gap-3 w-[200px] sm:w-auto'>

                                            <img src={items.img} alt="" className='h-9 rounded-full' />
                                            {items.name}
                                        </div>
                                    </Link>
                           
                            </td>
                            <td>{items.designation}</td>
                            <td>{items.department}</td>
                            <td>
                                <div className='flex items-center gap-3'>
                                    <EditUser />
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