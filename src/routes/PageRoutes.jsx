import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import Roles from '../pages/Roles'
import Departments from '../pages/Departments'
import Branches from '../pages/Branches'
import Notification from '../pages/Notification'
import UserProfile from '../pages/UserProfile'


const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/depertments" element={<Departments />} />
      <Route path="/branches" element={<Branches />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/users/userprofile" element={<UserProfile />} />
    </Routes>
  )
}

export default PageRoutes