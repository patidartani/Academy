import React from 'react'
import  "./Learning.css"
import Cap from "../assets/Images/Caplogo.png"
import Boy from "../assets/Images/boy.png"
import Girl from "../assets/Images/girl.png"
import { useNavigate } from 'react-router-dom'


const Learning = () => {
  const navigate = useNavigate()
  return (
    <div className='Learning'>
              <div className="learn">
                   <div className="StartJoin">
                      <div className="Start">
                              <div className="texts">
                                        <div className="logo"><img src={Cap} alt="" /></div>
                                        <h1>Join now to start learning <span>Learn from our quality instructors!</span></h1>
                                        <button onClick={()=>{navigate('/LogIn')}}><a >Get started</a></button>
                              </div>
                              <div className="girl"><img src={Girl} alt="" /></div>
                      </div>
                      <div className="Join">
                      <div className="texts">
                                        <div className="logo"><img src={Cap} alt="" /></div>
                                        <h1>Become a new instructor<span>Teach thousands of students and earn money!</span></h1>
                                        <button onClick={()=>{navigate('/JoinNow')}}><a >Join now</a></button>
                              </div>
                              <div className="boy"><img src={Boy} alt="" /></div>
                      </div>
                   </div>
              </div>
    </div>
  )
}

export default Learning