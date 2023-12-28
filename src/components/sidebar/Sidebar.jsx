import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sidemenu } from '../../constants'


const Sidebar = ({ Toggle }) => {

  const location = useLocation();
  const currentUrl = location.pathname;

  const isMenuItemActive = (menuItemUrl) => {
    return (
      currentUrl === menuItemUrl || currentUrl.startsWith(`${menuItemUrl}/`)
    );
  };



  return (
    <div className={` trans bg-[#212125]  h-full min-h-screen fixed z-20 -translate-x-full lg:-translate-x-0 ${Toggle ? 'w-[80px]' : 'w-[250px]'}`}>
      <div className='h-[70px] text-white flex px-5 items-center'>Logo</div>
      <ul className='px-4 mt-10'>
        {sidemenu.map((menus) => (
          <Link key={menus.id} to={menus.url} >
            <li className={`flex items-center gap-4  px-4 h-[40px] my-5 rounded-[4px] hover:text-white ${isMenuItemActive(menus.url) ? 'text-white bg-[#2E2E36]' : 'text-[#AAB6C7]'} `} >
              <span className='w-5'>   {menus.icon}</span>
              <span className={`${Toggle ? 'hidden' : 'block'} trans overflow-hidden`}>{menus.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar