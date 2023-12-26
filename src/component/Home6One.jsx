import React from 'react'
import "./Home6One.css"
import Home6OneImg from "../assets/images/home-6One.png"
import Home6Two1 from "../assets/images/Home6Two1.svg"
import Home6Two2 from "../assets/images/Home6Two2.svg"
import Home6Two3 from "../assets/images/Home6Two3.svg"
import NumberSlider from './NumberSlider'
import { useNavigate } from 'react-router-dom'


const Home6One = () => {
     const navigate = useNavigate();
  return (
    <div>
        <div className="Home6One">
         <div className="HomeSixMain">

         <div className="HomeSixTop">
                    <div className="HomeSixLeft">
                    <h6>WELCOME TO ACADEMY</h6>
                              <h2><span>Start</span>learning from</h2>
                              <h3>best platform</h3>
                              <p>Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
                              <button onClick={()=>{navigate('/JoinNow')}}>Join for free</button>
                              <div className='slider6'>
                              <NumberSlider/>
                             </div>
                    </div>
                    <div className="HomeSixRight">
                          <img src={Home6OneImg} alt="" />    
                    </div>
          </div>
          
          <div className="HomeSixBottom">
                   <div className="bx">
                        <img src={Home6Two1} alt="" />
                        <h3>Latest top skills</h3>
                        <p>Stay ahead with our curated courses, mastering in-demand skills.</p>
                   </div>
                   <div className="bx">
                   <img src={Home6Two2} alt="" />
                        <h3>Globalization</h3>
                        <p>Opportunity for global networking and collaboration with peers worldwide.</p>
                   </div>
                   <div className="bx">
                   <img src={Home6Two3} alt="" />
                        <h3>Cost-effectiveness</h3>
                        <p>Cost-effective compared to traditional in-person education.</p>
                   </div>
          </div>
          

</div>
</div>
</div>
  )
}

export default Home6One