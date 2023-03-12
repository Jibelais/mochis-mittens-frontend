import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import { RiAdminLine} from "react-icons/ri";
import {HiOutlineBookOpen} from 'react-icons/hi'
export const SidebarData = [
   {
    title: 'Home', 
    path: '/', 
    icon: <AiIcons.AiFillHome />, 
    className: 'nav-text'
   }, 
   {
    title: 'Products', 
    path: '/products', 
    icon: <GiIcons.GiHollowCat />, 
    className: 'nav-text'
   }, 
   {
    title: 'Add', 
    path: '/products/add', 
    icon: <RiAdminLine />, 
    className: 'nav-text'
   }, 
   {
    title: 'Resources', 
    path: '/resources', 
    icon: <HiOutlineBookOpen />, 
    className: 'nav-text'
   }, 
    

]