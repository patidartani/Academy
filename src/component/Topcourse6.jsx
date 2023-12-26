import React from "react";
import "./Ratedcourses.css";
import { gallery } from "./HomeCourseData";
import line from "../assets/Images/line.png";
import { useState } from "react";
import home2instimg2 from "../assets/Images/home2instimg2.jpg"

const Topcourse6 = () => {
  const [image, setImage] = useState(gallery);
  return (
    <div>
        <div className="d-flex flex-column align-items-center p-2 pt-5 pb-5 ">
      <p style={{color:"#ff58aa",letterSpacing:"0.2vmax"}} className="fw-bold mt-5">COURSES</p>
        <h1 className="text-center ">Top courses</h1>
        <p className="text-secondary text-center ">These are the most popular courses among listen courses <br /> learners worldwide</p>
        
       
        <div className="container row row-cols-lg-4  flex-wrap d-flex flex-lg-row flex-column justify-content-evenly ">
        
          {image.map((photo, index) => (
            <div className="bg-light shadow p-2 rounded   mt-5 cols-lg-2 col-12  "   key={index}>
              
                <div className="container ">
                  <img className="rounded" src={photo.img} alt="" width={280} />
                </div>

                <h6 className="container fs-5 mt-3  ">{photo.title}</h6>
               
                <div className=" d-flex justify-content-between mt-3 ">
             
              <p className=" text-secondary ms-3">
                <i className="ri-timer-2-line me-2"></i>24:11:44 Hours
              </p>
              <p className="fs-5 me-4">0 <i class="ri-star-fill text-warning"></i></p>
           
                </div>
                <div style={{marginTop:"-1vmax"}}>
                <hr />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="ms-2">
                    <img className="rounded-circle me-3" src={home2instimg2} alt="" width={40} />
                     <span>John Doe</span>
                  </div>
                  <div className="d-flex me-2 text-success">
                    <h5 className="me-3">{photo.offerPrice}</h5>
                    <strike>{photo.realPrice}</strike>
                  </div>
                </div>
                
                 
                
              </div>
          ))}
          
        </div>
      </div>
      </div>
    
  );
};

export default Topcourse6;
