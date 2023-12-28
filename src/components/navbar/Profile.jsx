import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import avatar from "../../assets/avatar.jpg"
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlinePower } from "react-icons/hi2";



export default function Profile() {
  return (
    <div className="flex">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex gap-2 items-center">
          <img src={avatar} alt="profile" className='h-9 rounded-full' />
          <div className='text-left hidden lg:block'>
            <h6 className='font-semibold'>Albert Flores</h6>
            <p className='text-[13px] text-[#58606b] leading-4 font-light'>Administrator</p>
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-3.5 w-44 origin-top-right  divide-gray-100 rounded-[4px] bg-white shadow-lg">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-[#F2F3F4] text-black' : 'text-black'
                      } group flex w-full items-center gap-2 px-3 py-2 text-[15px]`}
                  >
                    <HiOutlineUser size={17} />
                    My Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-[#F2F3F4] text-black' : 'text-black'
                      } group flex w-full items-center gap-2 px-3 py-2 text-[15px]`}
                  >
                    <HiOutlinePower size={17} />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
