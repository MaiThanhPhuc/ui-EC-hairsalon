import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


import './FooterStyles.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-bottom'>
                <div className='content'>
                    <div className='rights'>
                        <p>&copy; All rights reserved.</p>
                    </div>
                    <div className='icons'>
                        <FaFacebook size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaInstagram size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaTwitter size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaGithub size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer