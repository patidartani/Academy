import React from 'react'
import "./Home4inst.css"
import home2instimg1 from "../assets/Images/home2instimg1.jpg"
import home2instimg2 from "../assets/Images/home2instimg2.jpg"

const Home4inst = () => {
  return (
    <div>
      <div className='home4instmain'>
        <div className='homae4instleft'>
          <h5>INSTRUCTORS</h5>
          <h2>Our popular instructor</h2>
          <div className='linear'></div>
          <p>Our popular instructor is a charismatic and knowledgeable individual who captivates students with engaging lessons, making learning a delightful and enriching experience.</p>
        </div>
        <div className='homae4instright'>
          <div className='overlay'>
            <img src={home2instimg1} alt="" />
            <h4>Mathew Anderson</h4>
            <div className='home4line'></div>
            <div className='home4imsticon'><i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-linkedin-fill"></i></div>
          </div>
          <div className='overlay'>
            <img src={home2instimg2}alt="" />
            <h4>John Doe</h4>
            <div className='home4line'></div>
            <div className='home4imsticon'><i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-linkedin-fill"></i></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home4inst