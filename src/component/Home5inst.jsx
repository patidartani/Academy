import React from 'react'
import "./Home4inst.css"
import home2instimg1 from "../assets/Images/home2instimg1.jpg"
import home2instimg2 from "../assets/Images/home2instimg2.jpg"

const Home5inst = () => {
  return (
    <div>
      <div className='home4instmain flex-column d-flex align-items-center'>
        <div className='w-50 homae4instleft text-center'>
          <h5>INSTRUCTORS</h5>
          <h2>Our popular instructor</h2>
          <p className=''>Our popular instructor is a charismatic and knowledgeable individual who captivates students with engaging lessons, making learning a delightful and enriching experience.</p>
        </div>
        <div className='homae4instright mt-5'>
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

export default Home5inst