import React from 'react'
import { depertmentList } from '../../constants';
import EditRole from '../forms/EditRole';
import Delete from '../popup/Delete';
import EditDepertment from '../forms/EditDepertment';


const DepertmentList = () => {
    return (
        <div className='overflow-x-scroll scrollbar'>
            <table className='mt-5'>
                <thead className='bg-[#f5f6f8]'>
                    <tr>
                        <th>ID</th>
                        <th>DEPARTMENT&nbsp;NAME</th>
                        <th>DEPARTMENT&nbsp;HEAD</th>
                        <th>NO&nbsp;OF&nbsp;EMPLOYEES</th>
                        <th className='w-[12%]'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {depertmentList.map((items, index) => (
                        <tr key={items.id}>
                            <td>{index + 1}</td>
                            <td >
                                {items.name}
                            </td>
                            <td>{items.head}</td>
                            <td>{items.users}</td>
                            <td>
                                <div className='flex items-center gap-3'>
                                    <EditDepertment />
                                    <Delete data="depertment"/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DepertmentList