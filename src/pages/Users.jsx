import React from 'react'
import Layout from '../Layout/Layout'
import { FiSearch, FiFilter, FiPlus, FiLogIn } from "react-icons/fi";
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import UserList from '../components/tables/UserList';
import AddUser from '../components/forms/AddUser';




const Users = () => {
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
        <div className='flex flex-col-reverse sm:flex-row items-end sm:items-center justify-between gap-3 sm:gap-0'>
          <div className='flex items-center relative flex-1 sm:flex-0 w-full sm:w-auto'>
            <FiSearch className='absolute left-2.5 text-[#A8AFB2]' />
            <input type="search" className='pl-8 pr-2 w-full sm:w-[250px]' placeholder='Search...' />
          </div>
          <div className='flex items-center gap-4 w-full sm:w-auto justify-end'>
            <button className='btn btn-white'><FiFilter />Filter</button>
            <AddUser />
          </div>
        </div>
        <UserList />
      </div>
    </Layout>
  )
}

export default Users