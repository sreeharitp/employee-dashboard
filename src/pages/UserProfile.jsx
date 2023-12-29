
import { Tab } from '@headlessui/react'
import Layout from '../Layout/Layout'
import avatar from "../assets/avatar.jpg"
import { userDetails } from '../constants'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import PersonalDetails from '../components/users/PersonalDetails'
import EmployeeDetails from '../components/users/EmployeeDetails'
import UserDocuments from '../components/users/UserDocuments'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function UserProfile() {


    return (
        <Layout>
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h5 className='text-[20px] font-semibold '>User Profile</h5>
                    <Breadcrumb />
                </div>
            </div>
            <div className="w-full ">
                <Tab.Group>
                    <div className="flex flex-col sm:flex-row gap-5 ">
                        <Tab.List className="flex flex-col gap-2.5 rounded-[4px] bg-white p-4 border border-[#E5E7EB] w-full sm:w-1/3 lg:w-1/4">
                            <div className='pt-3 mb-3 text-center'>
                                <img src={avatar} alt="" className='m-auto rounded-full h-24 mb-4' />
                                <h5 className='font-semibold mb-1'>Jonathan Samuel</h5>
                                <p className='text-[14px] text-[#6C757D] font-light'>Assistant Manager</p>
                                <p className='text-[14px] text-[#6C757D] font-light'>California , United States</p>
                            </div>
                            {userDetails.map((items) => (

                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full rounded-[4px]  px-4 py-2 text-sm text-left ',
                                            selected
                                                ? 'bg-[#5d88ff18] text-[#5D87FF] font-medium'
                                                : 'text-[#6C757D] border border-[#E5E7EB]'
                                        )
                                    }
                                >
                                    {items.title}
                                </Tab>
                            ))}


                        </Tab.List>
                        <Tab.Panels className="w-full sm:w-2/3 lg:w-3/4 bg-white border border-[#E5E7EB] rounded-[4px]">

                            <Tab.Panel>

                                <PersonalDetails />
                            </Tab.Panel>
                            <Tab.Panel>

                                <EmployeeDetails />
                            </Tab.Panel>
                            <Tab.Panel>

                                <UserDocuments />
                            </Tab.Panel>
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
        </Layout>
    )
}
