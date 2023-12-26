import React from "react";
import "./Topcourse5.css";
import { latest } from "./HomeLatestCourseData";
// import line from "../assets/Images/line.png";
import { useState } from "react";
import home2instimg2 from "../assets/Images/home2instimg2.jpg"

const Latestcourse5 = () => {
  const [image, setImage] = useState(latest);
  return (
    <div>
        <div className="d-flex flex-column align-items-center p-2 pt-5 pb-5 ">
        <h1 className="text-center fs-1 fw-semibold ">Latest courses</h1>
        <p className="text-secondary text-center ">These are the most popular courses among listen courses <br /> learners worldwide</p>
        
       
        <div className="container row row-cols-lg-4  flex-wrap d-flex flex-lg-row flex-column justify-content-evenly ">
        
          {image.map((photo, index) => (
            <div className="bg-light  rounded-lg   mt-5 cols-lg-2 col-12  "   key={index}>
              
                <div className=" " style={{position:"relative"}}>
                  <img className="rounded w-100" src={photo.img} alt="" style={{zIndex:"-999"}}  />
                  <button style={{position:"absolute",left:"17px" ,top:"5px",borderRadius:"0.7vmax",padding:"0.8vmax 1vmax",border:"none",color:`${photo.star}`}}>{photo.offerPrice} <strike>{photo.realPrice}</strike></button>

                <img style={{position:"absolute",right:"15px",bottom:"-17px"}} className="rounded-circle" src={home2instimg2} alt="" width={50} />
                </div>
                <div className=" pb-5" style={{marginTop:"0vmax",zIndex:"999",borderTopRightRadius:"2vmax",borderBottomLeftRadius:"2vmax",borderBottomRightRadius:"2vmax",backgroundColor:`${photo.color}`}}>

                <h6 className="container fs-5   p-3 ">{photo.title}</h6>
                <h4 className="ms-3 fs-5 "><i class="ri-star-fill me-2" style={{color:`${photo.star}`}}></i>{photo.status}</h4>
               
                 
                </div>
              </div>
          ))}
          
        </div>
      </div>
      </div>
    
  );
};

export default Latestcourse5;
