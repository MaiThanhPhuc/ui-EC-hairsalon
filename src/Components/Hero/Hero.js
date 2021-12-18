import React from 'react'
import { FaAsterisk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './HeroStyles.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1>Trải nghiệm  </h1>
                        <h1><span className='primary-color'>Hairsalon Group10</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                            Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
                            laboriosam eos praesentium veritatis!
                        </p>
                        <div className='used-by'>
                            <p>USED BY</p>
                            <div className='icons'>
                                <i><FaAsterisk /> Nhanh chóng</i>
                                <i><FaAsterisk /> Chuyên nghiệp</i>
                                <i><FaAsterisk /> Phong cách</i>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>
                                <div className='divider'>
                                    <p><span> Đặt lịch ngay </span></p>
                                </div>
                                <form>
                                    <Link to='/agency' className='nav-link'>
                                        <button className='sign-in primary'>Booking</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero