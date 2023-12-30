

import React, { useState } from 'react';
import { roles } from '../../constants';

const RoleDetail = () => {


    return (
        <>
            <div className="flex items-center gap-3 border-b border-[#E5E7EB]  px-5 py-3 ">
                <h2 className='font-semibold text-[15px]'>Roles and Designations</h2>
            </div>
            <div className="flex flex-col h-auto p-5 sm:h-[410px]">
                {roles.map((items) => (
                    <div className='flex items-center gap-2' key={items.id}>
                        <input type="checkbox" className='cursor-pointer' name="role"
                        />
                        <label htmlFor="" className='text-[#58606b] text-[13px]'>{items.title}</label>
                    </div>
                ))}
            </div>


        </>
    );
};

export default RoleDetail;
