import React from 'react'
import { branchList } from '../../constants';
import Delete from '../popup/Delete';
import EditDepertment from '../forms/EditDepertment';
import EditBranch from '../forms/EditBranch';


const BranchList = () => {
    return (
        <div className='overflow-x-scroll scrollbar'>
            <table className='mt-5'>
                <thead className='bg-[#f5f6f8]'>
                    <tr>
                        <th>ID</th>
                        <th className='w-[30%]'>BRANCH&nbsp;NAME</th>
                        <th className='w-[30%]'>LOCATION</th>
                        <th>NO&nbsp;OF&nbsp;EMPLOYEES</th>
                        <th className='w-[12%]'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {branchList.map((items, index) => (
                        <tr key={items.id}>
                            <td>{index + 1}</td>
                            <td >
                                {items.name}
                            </td>
                            <td>{items.location}</td>
                            <td>{items.users}</td>
                            <td>
                                <div className='flex items-center gap-3'>
                                    <EditBranch />
                                    <Delete data="branch"/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BranchList