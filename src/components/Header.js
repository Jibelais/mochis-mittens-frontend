import {Link} from "react-router-dom"
function Header () {
    return (
    <header>
        <h1 className='title'>MOCHI'S MITTENS</h1>
        <nav className = 'nav-menu'>
            <Link to={`/about`}>About</Link>
            <Link to={`/`}>Home</Link>
            <Link to={`/products/`}>Products</Link>
            <Link to={`/products/admin`}>Admin</Link>
            </nav>
    </header>
    
    )
}

export default Header