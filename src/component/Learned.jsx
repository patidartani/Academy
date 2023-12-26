import React from 'react'
import "./Learn.css"
import LearnImg1 from "../assets/images/LearnImg1.svg"
import LearnImg2 from "../assets/images/LearnImg2.svg"
import LearnImg3 from "../assets/images/LearnImg3.svg"


const Learned = () => {
  return (
    <div>
          <div className="Learn">
                  <div className="LearnUs">
                
                <div className="LearnTop">
            <h2>CREATE INTELLIGENCE</h2>
            <h3>Learn with us</h3>
            <p></p>
                </div>
                <div className="LearnBottom">
                    <div className="one">
                       <img src={LearnImg1} alt="" />
                       <h5>16 Online courses</h5>
                       <h6>Explore a variety of fresh topics</h6>
                    </div>
                    <div className="one">
                    <img src={LearnImg2} alt="" />
                       <h5>Expert instruction</h5>
                       <h6>Find the right course for you</h6>
                    </div>
                    <div className="one">
                    <img src={LearnImg3} alt="" />
                       <h5>Smart solution</h5>
                       <h6>Learn on your schedule</h6>
                    </div>
                </div>
</div>
</div>
</div>
  )
}

export default Learned