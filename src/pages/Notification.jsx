
import React from 'react'
import Layout from '../Layout/Layout'
import { FiSearch, FiLogIn, FiFilter } from "react-icons/fi";
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

import NotificationList from '../components/tables/NotificationList';




const Notification = () => {
    return (
        <Layout>
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h5 className='text-[20px] font-semibold '>Notifications</h5>
                    <Breadcrumb />
                </div>
                <button className='btn btn-fade'><FiLogIn />Export</button>
            </div>
            <div className='bg-white rounded-[4px] p-5 border border-[#e2e7f1]'>
                <div className='flex flex-row sm:items-center justify-between gap-3 sm:gap-0'>
                    <div className='flex items-center relative flex-1'>
                        <FiSearch className='absolute left-2.5 text-[#A8AFB2]' />
                        <input type="search" className='pl-8 pr-2 w-full sm:w-[300px]' placeholder='Search...' />
                    </div>
                    <button className='btn btn-white'><FiFilter />Filter</button>
                </div>
                <NotificationList  />
            </div>
        </Layout>
    )
}

export default Notification