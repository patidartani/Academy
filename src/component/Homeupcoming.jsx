import React from 'react'
import "./Homeupcoming.css"
import { upcomingdata } from './HomeUpcomingData'




const Homeupcoming = () => {



  return (
    <div>
        <div className='upcoming'> 
              <div className='upcoming-left'>
                  <h4>UPCOMING</h4>
                  <h3>Upcoming courses</h3>
                  <div className='upcoming-line'></div>
                  <p>Discover a world of learning opportunities through our upcoming courses, where industry experts and thought leaders will guide you in acquiring new expertise, expanding your horizons, and reaching your full potential.</p>
              </div>
              <div className='upcoming-right'>
                {upcomingdata.map((coming,index) => (
                    <div className='upcoming-box' key={index}>
                        <img src={coming.img} alt="" />
                         <h4>{coming.heading}</h4>
                         <p>{coming.para}</p>
                         
                     </div>
                ))}
                     
                     
              </div>
        </div>
    </div>
  )
}

export default Homeupcoming