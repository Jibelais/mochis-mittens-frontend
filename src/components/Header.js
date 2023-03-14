import {Link} from "react-router-dom"
import Navbar from "./Navbar"

function Header () {
    return (
    <header> 
        <Link to={'/'}>
         <h1 className='title'>Mochi's Mittens</h1>
        </Link>
        <Navbar />
    </header>
    
    )
}

export default Header