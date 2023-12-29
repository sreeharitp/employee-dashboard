import React from 'react'
import Layout from '../Layout/Layout'
import { FiSearch, FiFilter, FiLogIn } from "react-icons/fi";
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import RoleList from '../components/tables/RoleList';
import AddRole from '../components/forms/AddRole';




const Roles = () => {
    return (
        <Layout>
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h5 className='text-[20px] font-semibold '>Users</h5>
                    <Breadcrumb />
                </div>
                <button className='btn btn-fade'><FiLogIn />Export</button>
            </div>
            <div className='bg-white rounded-[4px] p-5 border border-[#e2e7f1]'>
                <div className='flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 sm:gap-0'>
                    <div className='flex items-center relative'>
                        <FiSearch className='absolute left-2.5 text-[#A8AFB2]' />
                        <input type="search" className='pl-8 pr-2 w-full sm:w-[250px]' placeholder='Search...' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='btn btn-white'><FiFilter />Filter</button>
                        <AddRole />
                    </div>
                </div>
                <RoleList />
            </div>
        </Layout>
    )
}

export default Roles