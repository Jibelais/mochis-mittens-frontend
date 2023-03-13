import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import { RiAdminLine} from "react-icons/ri";
import {HiOutlineBookOpen} from 'react-icons/hi'
export const SidebarData = [
   {
    title: 'HOME', 
    path: '/', 
    icon: <AiIcons.AiFillHome />, 
    className: 'nav-text'
   }, 
   {
    title: 'PRODUCTS', 
    path: '/products', 
    icon: <GiIcons.GiHollowCat />, 
    className: 'nav-text'
   }, 
   {
    title: 'ADD', 
    path: '/products/add', 
    icon: <RiAdminLine />, 
    className: 'nav-text'
   }, 
   {
    title: 'RESOURCES', 
    path: '/resources', 
    icon: <HiOutlineBookOpen />, 
    className: 'nav-text'
   }, 
    

]