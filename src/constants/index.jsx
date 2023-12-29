import { HiSquares2X2 } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi2";
import { HiMiniBookmark } from "react-icons/hi2";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { HiMiniQueueList } from "react-icons/hi2";
import { HiMiniBell } from "react-icons/hi2";
import avatar from "../assets/avatar.jpg"

export const sidemenu = [
  {
    id: 1,
    title: "Dashboard",
    icon: <HiSquares2X2 />,
    url: "/",
  },
  {
    id: 2,
    title: "Users",
    icon: <HiUserGroup />,
    url: "/users",
  },
  {
    id: 3,
    title: "Roles",
    icon: <HiMiniBookmark />,
    url: "/roles",
  },
  {
    id: 4,
    title: "Depertments",
    icon: <HiMiniSquare3Stack3D />,
    url: "/depertments",
  },
  {
    id: 5,
    title: "Branches",
    icon: <HiMiniQueueList />,
    url: "/branches",
  },
  {
    id: 6,
    title: "Notifications",
    icon: <HiMiniBell />,
    url: "/notifications",
  },
];


export const userList = [
  {
    id: 1,
    img: avatar,
    name: "Jonathan",
    designation: "Salesman",
    department: "Sales"
  },
  {
    id: 2,
    img: avatar,
    name: "Jonathan",
    designation: "Salesman",
    department: "Sales"
  },
  {
    id: 3,
    img: avatar,
    name: "Jonathan",
    designation: "Salesman",
    department: "Sales"
  },
  {
    id: 4,
    img: avatar,
    name: "Jonathan",
    designation: "Salesman",
    department: "Sales"
  },
  {
    id: 5,
    img: avatar,
    name: "Jonathan",
    designation: "Salesman",
    department: "Sales"
  },
  {
    id: 6,
    img: avatar,
    name: "Jonathan",
    designation: "Salesman",
    department: "Sales"
  },
]

export const roleList = [
  {
    id: 1,
    name: "Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    users: "56"
  },
  {
    id: 2,
    name: "Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    users: "56"
  },
  {
    id: 3,
    name: "Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    users: "56"
  },
  {
    id: 4,
    name: "Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    users: "56"
  },
  {
    id: 5,
    name: "Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    users: "56"
  },
]

export const depertmentList = [
  {
    id: 1,
    name: "Sales",
    head: "Jonathan",
    users: "56"
  },
  {
    id: 2,
    name: "Sales",
    head: "Jonathan",
    users: "56"
  },
  {
    id: 3,
    name: "Sales",
    head: "Jonathan",
    users: "56"
  },
  {
    id: 4,
    name: "Sales",
    head: "Jonathan",
    users: "56"
  },
  {
    id: 5,
    name: "Sales",
    head: "Jonathan",
    users: "56"
  },
]

export const branchList = [
  {
    id: 1,
    name: "Branch1",
    location: "California",
    users: "56"
  },
  {
    id: 2,
    name: "Branch1",
    location: "California",
    users: "56"
  },
  {
    id: 3,
    name: "Branch1",
    location: "California",
    users: "56"
  },
  {
    id: 4,
    name: "Branch1",
    location: "California",
    users: "56"
  },
  {
    id: 5,
    name: "Branch1",
    location: "California",
    users: "56"
  },

]



export const notificationList = [
  {
    id: 1,
    img: avatar,
    name: "Jonathan",
    message: "Role creation failed",
    date: "15-06-2023",
    time:"03:45 PM"
  },
  {
    id: 2,
    img: avatar,
    name: "Jonathan",
    message: "Role creation failed",
    date: "15-06-2023",
    time:"03:45 PM"
  },
  {
    id: 3,
    img: avatar,
    name: "Jonathan",
    message: "Role creation failed",
    date: "15-06-2023",
    time:"03:45 PM"
  },
  {
    id: 4,
    img: avatar,
    name: "Jonathan",
    message: "Role creation failed",
    date: "15-06-2023",
    time:"03:45 PM"
  },
  {
    id: 5,
    img: avatar,
    name: "Jonathan",
    message: "Role creation failed",
    date: "15-06-2023",
    time:"03:45 PM"
  },
]

export const permissionList = [
  {
    id: 1,
    title: "APP_LOGIN",

  },
  {
    id: 2,
    title: "DASHBOARD_VIEW",

  },
  {
    id: 3,
    title: "CREATE_ROLE",

  },
  {
    id: 4,
    title: "MODIFY_ROLE",

  },

]

export const roles = [
  {
    id: 1,
    title: "Manager",

  },
  {
    id: 2,
    title: "Assistant Manager",

  },
  {
    id: 3,
    title: "CEO",

  },
  {
    id: 4,
    title: "Salesman",

  },

]

export const userDetails = [
  {
    id: 1,
    title: "Personal Details",

  },
  {
    id: 2,
    title: "Employment Details",

  },
  {
    id: 3,
    title: "Documents",

  },
  {
    id: 4,
    title: "Emergency Contact",

  },
  {
    id: 5,
    title: "Roles and Designation",

  },

]