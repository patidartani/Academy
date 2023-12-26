import React, { useState } from "react";
import "./HomeCourses.css";
import { useNavigate } from "react-router-dom";
import { gallery } from "./HomeCourseData";
import line from "../assets/Images/line.png"

const HomeCourses = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (step) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + step + gallery.length) % gallery.length;
      return newIndex;
    });
    console.log(currentImageIndex);
  };

  return (
    <div className="courses">
      <h1 className="topcourse">Top courses</h1>
      <div className="ms-5">
      <img src={line} alt="" width={200} style={{marginTop: "-3vmax"}} />
      </div>
      <p className="topcourse">
        These are the most popular courses among listen courses learners
        worldwide
      </p>
      <div className="image-sliders">
        <div className="coursediv">
          <div className="maincoursediv">
            <div className="topcourseimage">
            <img src={gallery[currentImageIndex].img} alt="" />
            </div>

            <h6 className="theme">{gallery[currentImageIndex].title}</h6>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="review ms-3">
                4 <i className="ri-star-fill"></i> (4 Reviews)
              </h6>
              <button className="compare me-4">
                <i className="ri-arrow-turn-back-line me-1"></i>Compare
              </button>
            </div>
            <p>{gallery[currentImageIndex].para}</p>

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
            <img src={gallery[(currentImageIndex+1)%gallery.length].img} alt="" />
             </div>
            <h6 className="theme">{gallery[(currentImageIndex+1)%gallery.length].title}</h6>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="review ms-3">
                4 <i className="ri-star-fill"></i> (4 Reviews)
              </h6>
              <button className="compare me-4">
                <i className="ri-arrow-turn-back-line me-1"></i>Compare
              </button>
            </div>
            <p>{gallery[(currentImageIndex+1)%gallery.length].para}</p>

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
            <img src={gallery[(currentImageIndex+2)%gallery.length].img} alt="" />
           </div>
            <h6 className="theme">{gallery[(currentImageIndex+2)%gallery.length].title}</h6>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="review ms-3">
                4 <i className="ri-star-fill"></i> (4 Reviews)
              </h6>
              <button className="compare me-4">
                <i className="ri-arrow-turn-back-line me-1"></i>Compare
              </button>
            </div>
            <p>{gallery[(currentImageIndex+2)%gallery.length].para}</p>

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
            <img src={gallery[(currentImageIndex+3)%gallery.length].img} alt="" />
           </div>
            <h6 className="theme">{gallery[(currentImageIndex+3)%gallery.length].title}</h6>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="review ms-3">
                4 <i className="ri-star-fill"></i> (4 Reviews)
              </h6>
              <button className="compare me-4">
                <i className="ri-arrow-turn-back-line me-1"></i>Compare
              </button>
            </div>
            <p>{gallery[(currentImageIndex+3)%gallery.length].para}</p>

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

          {/* {gallery?.map((gallery, index ) => (
            <div className="maincoursediv" key={index}>
              <img
                src={gallery.img}
                alt=""
              />

              <h6 className="theme">
                {gallery.title}
              </h6>
              <div className="d-flex justify-content-between">
                <h6 className="review ms-3">
                  4 <i className="ri-star-fill"></i> (4 Reviews)
                </h6>
                <button className="compare me-4">
                  <i className="ri-arrow-turn-back-line me-1"></i>Compare
                </button>
              </div>
              <p>
               {gallery.para}
              </p>

              <hr />
              <div className="d-flex justify-content-between">
                <h6 className="ms-4">
                  $10 <span>$11.99</span>
                </h6>
                <h4 className="me-4 fs-5">
                  <i className="ri-timer-2-line me-2"></i>24:11:44 Hours
                </h4>
              </div>
            </div>
          ))} */}
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

export default HomeCourses;
