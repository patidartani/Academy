import React from 'react'
import "./H6UpcomingCourses.css"
import home2instimg2 from "../assets/Images/home2instimg2.jpg"
import { upcomingdata } from './HomeUpcomingData'

const H6UpcomingCourses = () => {
  return (
    <div>
          <div className="H6UpcomingCourses">
          <div className="UpcomingCourses">
                <div className="UpcomingCourseTop">
                    <h5>Upcoming courses</h5>
                    <p>Unlock new expertise with industry experts and thought leaders in our upcoming courses.</p>
                </div>
                <div className="UpcomingCourseBottom">
                {upcomingdata.map((coming,index) => (
                     <div className="CoursesTable" key={index}>
                              <div className="left">
                                        <img src={coming.img} alt="" />
                                        <div className="text">
                                                  <h4>{coming.heading}</h4>
                                                  <p><img src={home2instimg2} alt="" /> <h6>John Doe</h6></p>
                                        </div>
                              </div>
                              <div className="right">
                                        <div className="box"> <h2>Lesson</h2> <span>0</span></div>
                                        <div className="box"> <h2>Duration</h2> <span>00:00:00 Hours</span></div>
                                        <div style={{border:"none"}} className="box"> <h2>Price</h2> <span>$0</span></div>
                              </div>
                     </div>
                       ))}
                </div>

</div>
</div>
</div>
  )
}

export default H6UpcomingCourses