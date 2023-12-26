import React from 'react'
import './Footer.css'
import footeracademy from '../assets/Images/footeracademy.png'

const Footer = () => {
  return (
    <div className='footer  '>
        <div className='footerup d-flex justify-content-evenly '>
            <div className='leftfooter'>
                <img src={footeracademy} alt="" height={50} width={200} />
                <p>Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
            </div>
            <div className='rightfooter d-flex'>
                <div className='right1'>
                    <h3>Top catogories</h3>
                    <h6>HTML & CSS</h6>
                    <h6>Color Theory</h6>
                    <h6>Photoshop</h6>
                    <h6>WordPress Theme</h6>
                    <h6>Adobe Illustrator</h6>
                    <h6>Bootstrap</h6>
                </div>
                <div className='right1'>
                <h3>Useful links</h3>
                    <h6>Blog</h6>
                    <h6>All courses</h6>
                    <h6>Sign up</h6>
                </div>
                <div className='right1'>
                <h3>Help</h3>
                    <h6>About Us</h6>
                    <h6>Privacy policy</h6>
                    <h6>Terms and condition</h6>
                    <h6>Faq</h6>
                    <h6>Refund policy</h6>
                </div>
            </div>
        </div>
        <div className='footerdown'>
           <h2>Subscribe to our newsletter</h2> 
           <input type="text" placeholder='Enter your email address' />
           <i className="ri-arrow-right-line"></i>
        </div>
    </div>
  )
}

export default Footer