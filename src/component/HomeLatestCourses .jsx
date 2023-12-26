import React, { useState } from "react";
import "./HomeCourses.css";
import { useNavigate } from "react-router-dom";
import { latest } from "./HomeLatestCourseData";
import line from "../assets/Images/line.png"

const HomeLatestCourses = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (step) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + step + latest.length) % latest.length;
      return newIndex;
    });
    console.log(currentImageIndex);
  };

  return (
    <div className="courses ">
      <h1 className="topcourse text-center">Top 10 Latest courses</h1>
      <div className="text-center">
      <img src={line} alt="" width={200} style={{marginTop: "-3vmax"}} />
      </div>
      <p className="topcourse text-center">
      These are the most latest courses among listen courses learners worldwide
      </p>
      <div className="image-sliders">
        <div className="coursediv">
          <div className="maincoursediv">
            <div className="topcourseimage">
            <img src={latest[currentImageIndex].img} alt="" />
            </div>

            <h6 className="theme">{latest[currentImageIndex].title}</h6>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="review ms-3">
                4 <i className="ri-star-fill"></i> (4 Reviews)
              </h6>
              <button className="compare me-4">
                <i className="ri-arrow-turn-back-line me-1"></i>Compare
              </button>
            </div>
            <p>{latest[currentImageIndex].para}</p>

            <hr />
            <div className="timeprice d-flex justify-content-evenly">
              <h6 className="">
                $10 <span>$11.99</span>
              </h6>
              <h4 className="">
                <i className="ri-timer-2-line me-2"></i>24:11:44 Hours
              </h4>
            </div>
          </div>
          <div className="maincoursediv">
          <div className="topcourseimage">
            <img src={latest[(currentImageIndex+1)%latest.length].img} alt="" />
             </div>
            <h6 className="theme">{latest[(currentImageIndex+1)%latest.length].title}</h6>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="review ms-3">
                4 <i className="ri-star-fill"></i> (4 Reviews)
              </h6>
              <button className="compare me-4">
                <i className="ri-arrow-turn-back-line me-1"></i>Compare
              </button>
            </div>
            <p>{latest[(currentImageIndex+1)%latest.length].para}</p>

            <hr />
            <div className="timeprice d-flex justify-content-evenly">
              <h6 className="">
                $10 <span>$11.99</span>
              </h6>
              <h4 className="">
                <i className="ri-timer-2-line "></i>24:11:44 Hours
              </h4>
            </div>
          </div>
          <div className="maincoursediv">
          <div className="topcourseimage">
            <img src={latest[(currentImageIndex+2)%latest.length].img} alt="" />
           </div>
            <h6 className="theme">{latest[(currentImageIndex+2)%latest.length].title}</h6>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="review ms-3">
                4 <i className="ri-star-fill"></i> (4 Reviews)
              </h6>
              <button className="compare me-4">
                <i className="ri-arrow-turn-back-line me-1"></i>Compare
              </button>
            </div>
            <p>{latest[(currentImageIndex+2)%latest.length].para}</p>

            <hr />
            <div className="timeprice d-flex justify-content-evenly">
              <h6 className="">
                $10 <span>$11.99</span>
              </h6>
              <h4 className="">
                <i className="ri-timer-2-line "></i>24:11:44 Hours
              </h4>
            </div>
          </div>
          <div className="maincoursediv">
          <div className="topcourseimage">
            <img src={latest[(currentImageIndex+3)%latest.length].img} alt="" />
           </div>
            <h6 className="theme">{latest[(currentImageIndex+3)%latest.length].title}</h6>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="review ms-3">
                4 <i className="ri-star-fill"></i> (4 Reviews)
              </h6>
              <button className="compare me-4">
                <i className="ri-arrow-turn-back-line me-1"></i>Compare
              </button>
            </div>
            <p>{latest[(currentImageIndex+3)%latest.length].para}</p>

            <hr />
            <div className="timeprice d-flex justify-content-evenly">
              <h6 className="">
                $10 <span>$11.99</span>
              </h6>
              <h4 className="">
                <i className="ri-timer-2-line "></i>24:11:44 Hours
              </h4>
            </div>
          </div>

        
        </div>

        <div className="slider-controlss">
          <button className="slider-buttons" onClick={() => changeImage(-1)}>
            <i className="ri-arrow-drop-left-line "></i>
          </button>
          <button className="slider-buttons" onClick={() => changeImage(1)}>
            <i className="ri-arrow-drop-right-line "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLatestCourses;
