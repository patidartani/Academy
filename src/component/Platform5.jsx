import React from 'react'
import './Platform.css'
import platform from '../assets/Images/platform5.png'
import courses from '../assets/Images/graph.png'
import expert from '../assets/Images/tube.png'
import smart from '../assets/Images/mobile.png'
import line from "../assets/Images/line.png"

const Platform3 = () => {
  return (
    <div>
        <div className='platform'>
            <div className='platform-left'>
                <h1>Start learning from best <span>platform</span></h1>
                <div className="text-center">
      <img src={line} alt="" width={200} style={{marginTop: "-3vmax"}} />
      </div>
                <p>Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
                <div>
                    <input type="text" placeholder='What do you want to learn' />
                    <button><i class="ri-search-line"></i>Search</button>
                </div>
                <div className='platform-last'>
                    <h1>7+</h1>
                    <h4>Happy Students</h4>
                    <h1>5+</h1>
                    <h4>Experienced Instructors</h4>
                </div>
            </div>
            <div className='platform-right'>
                <img src={platform} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Platform3