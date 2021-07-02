import React , {useState} from 'react'
import { BiBuildings } from 'react-icons/bi';
import { Link } from 'react-router-dom'
import { FaTimes , FaBars } from 'react-icons/fa'
import "./Navbar.css";
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click , setClick] = useState(false)

    const handleClick = () =>{
        setClick(prev => !prev);
    }
    const closeMobileMenu = () =>{
        setClick(false);
    }
    
    return (
        <div>
        <IconContext.Provider value ={{color:"#fff"}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <BiBuildings/>
                        Home
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> :<FaBars/>}
                    </div>    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar
