import {useState} from 'react'
import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'
import './Navbar.css'
import {IconContext} from "react-icons"

function Navbar() {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)
  return (
    <div className = 'nav'>
        <IconContext.Provider value={{color:'black'}} >
        <div className = "navbar"> 
            <Link to= "#" className = 'menu-bars' id='icon'>
                <FaIcons.FaBars onClick = {showSidebar}/>
            </Link>
        </div>
        <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className = 'nav-menu-items'onClick = {showSidebar}>
                <li className = 'navbar-toggle'>
                <Link to= "#" className = 'menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>
                </li>
                {SidebarData.map((item, idx)=>{
                    return (
                        <li key = {idx} className={item.className}>
                            <Link to = {item.path}>
                                {item.icon}<span>{item.title}</span>
                            </Link>   
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
    </div>
  )
}

export default Navbar