import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import {VscAccount} from 'react-icons/vsc'

import './NavbarStyles.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'><img  alt='' /></Link>
                </div>
                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/abouts' className='nav-link'>Về chúng tôi</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/serivces' className='nav-link'>Dịch vụ</Link>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars size={20} style={{ color: '#ffffff' }} />)}

                </div>
            </nav>
        </header>
    )
}

export default Navbar