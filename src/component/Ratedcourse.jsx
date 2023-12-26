import React from "react";
import "./Ratedcourses.css";
import { gallery } from "./HomeCourseData";
import line from "../assets/Images/line.png";
import { useState } from "react";

const Ratedcourse = () => {
  const [image, setImage] = useState(gallery);
  return (
    <div>
        <div className="d-flex flex-column align-items-center p-2 pt-5 pb-5 ">
      <p style={{color:"#ff58aa",letterSpacing:"0.2vmax"}} className="fw-bold mt-5">COURSES</p>
        <h1 className="text-center ">Top rated courses</h1>
        
       
        <div className="container row row-cols-lg-4  flex-wrap d-flex flex-lg-row flex-column justify-content-evenly ">
        
          {image.map((photo, index) => (
            <div className="bg-light shadow p-2 rounded   mt-5 cols-lg-2 col-12  "   key={index}>
              
                <div className="container ">
                  <img className="rounded" src={photo.img} alt="" width={280} />
                </div>

                <h6 className="container fs-5 mt-3  ">{photo.title}</h6>
                <div className=" container d-flex justify-content-between mt-4">
                  <h5 className="fw-bold">
                   $10
                   <strike className="ms-3  text-secondary" style={{fontSize:"1vmax"}}>$11.99</strike>
                  </h5>
                  <div>
                  <i className="ri-eye-fill p-2 rounded-circle text-light me-3" style={{backgroundColor:"#ff58aa"}}></i><span>3</span>
                  <i className="ri-play-circle-line  text-light p-2 rounded-circle me-3 ms-3" style={{backgroundColor:"#ff58aa"}}></i><span>25</span>
                  </div>
                 
                </div>
              </div>
          ))}
          
        </div>
      </div>
      </div>
    
  );
};

export default Ratedcourse;
