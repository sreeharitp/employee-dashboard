import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FiTrash2, FiX } from 'react-icons/fi'

export default function Delete({ data }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div onClick={openModal} className='border flex items-center cursor-pointer justify-center h-8 w-8 rounded-[4px]'>
                <FiTrash2 />
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-[4px] bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='px-5 py-3 flex items-center justify-between border-b border-[#e2e7f1]'>
                                        <div className='text-[16px] font-semibold capitalize'>Delete {data}</div>
                                        <FiX onClick={closeModal} className='text-[#58606b] cursor-pointer' />
                                    </div>
                                    <div className='px-5 py-3'>
                                        <p className='text-[#58606b] my-4'>Do you want to delete this {data} ?</p>
                                        <div className="flex gap-3">
                                            <button className='btn btn-gray mt-4 w-full' onClick={closeModal}>Cancel</button>
                                            <button className='btn btn-delete mt-4 w-full'><FiTrash2 />Delete</button>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
