import {Link} from "react-router-dom"
import Navbar from "./Navbar"

function Header () {
    return (
    <header> 
        <Navbar />
        <h1 className='title'>MOCHI'S MITTENS</h1>
       
    </header>
    
    )
}

export default Header