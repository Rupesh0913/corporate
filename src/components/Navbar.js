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
            <div className="custom-navbar">
                <div className="custom-navbar-container custom-container">
                    <Link to="/" className="custom-navbar-logo">
                        <BiBuildings/>
                        Home
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> :<FaBars/>}
                    </div>    
                    <ul className={click ? 'custom-nav-menu active' : 'custom-nav-menu'} >
                        <li className="custom-nav-item">
                            <Link to='/about' className="custom-nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="custom-nav-item">
                            <Link to='/services' className="custom-nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="custom-nav-item">
                            <Link to='/contact' className="custom-nav-links" onClick={closeMobileMenu}>
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
