import { faBars, faClose, faCode, faEye, faHome, faMailBulk, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Navbar = () => {

    const navRef = useRef()
    
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return(
        <header className="nav-bar" >
            <Link className='logo' to="/">
                <img src={ Logo } alt="" />
            </Link>
            <nav ref={ navRef } >
                <NavLink className="home-link" exact="true" activeclassname="active" to="/" >
                    <FontAwesomeIcon icon={ faHome } color="#4d4d4e" />
                </NavLink>
                <NavLink className="about-link" exact="true" activeclassname="active" to="/about" >
                    <FontAwesomeIcon icon={ faUser } color="#4d4d4e" />
                </NavLink>
                <NavLink className="skills-link" exact="true" activeclassname="active" to="/skills" >
                    <FontAwesomeIcon icon={ faCode } color="#4d4d4e" />
                </NavLink>
                <NavLink className="work-link" exact="true" activeclassname="active" to="/my-work" >
                    <FontAwesomeIcon icon={ faEye } color="#4d4d4e" />
                </NavLink>
                <NavLink className="contact-link" exact="true" activeclassname="active" to="/contact" >
                    <FontAwesomeIcon icon={ faMailBulk } color="#4d4d4e" />
                </NavLink>
                <i
                exact="true" 
                activeclassname="active" 
                className='config-dark'/* { theme? 'config-dark': 'config-light' } */
                >
                    <FontAwesomeIcon icon={ faMoon } color="#4d4d4e" />
                </i>
                <FontAwesomeIcon onClick={ showNavbar }  className='closed' icon={ faClose } />
            </nav>
            <i onClick={ showNavbar } className='menu-bars' >
                <FontAwesomeIcon icon={ faBars } color="#ffd700" />
            </i>
        </header>
    )
}
export default Navbar