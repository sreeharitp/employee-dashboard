import React from 'react'
import { notificationList } from '../../constants';



const NotificationList = () => {
    return (
        <div className='overflow-x-scroll scrollbar'>
            <table className='mt-5'>
                <thead className='bg-[#f5f6f8]'>
                    <tr>
                        <th>ID</th>
                        <th className='w-[30%]'>NAME</th>
                        <th className='w-[30%]'>MESSAGE</th>
                        <th className='w-[30%]'>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {notificationList.map((items, index) => (
                        <tr key={items.id}>
                            <td>{index + 1}</td>
                            <td >
                                <div className='flex items-center gap-3 w-[200px] sm:w-auto'>
                                    <img src={items.img} alt="" className='h-9 rounded-full' />
                                    {items.name}
                                </div>
                            </td>
                            <td><div className='w-[200px] sm:w-auto'>
                                {items.message}</div></td>
                            <td><div className='w-[200px] sm:w-auto'>
                                {items.date}  &nbsp; | &nbsp; {items.time}</div></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NotificationList