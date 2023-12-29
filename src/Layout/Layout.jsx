import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'




const Layout = ({ children }) => {

    const [Toggle, setToggle] = useState(false)

    return (
        <div className='sm:flex'>
            <Sidebar Toggle={Toggle} />
            <div className='sm:flex-1'>
                <Navbar Toggle={Toggle} setToggle={setToggle} />
                <div className={`${Toggle ? 'lg:pl-[80px] ' : 'pl-0 lg:pl-[250px] '} trans`}>
                    <div className='min-h-screen bg-[#f5f6f8] mt-[70px] p-5'>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout