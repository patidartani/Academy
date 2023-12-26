import React from 'react';
import './NumberSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NumberSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: null,
    nextArrow: null,
    autoplaySpeed: 2000,
    
  };

  const slidesData = [
    {
      leftNumber: '7+',
      leftText: 'Happy Student',
      rightNumber: '5+',
      rightText: 'Experienced Instructor',
    },
    {
      leftNumber: '16+',
      leftText: 'Quality Courses',
      rightNumber: '7+',
      rightText: 'Happy Student',
    },
    {
          leftNumber: '5+',
          leftText: 'Experienced Instructor',
          rightNumber: '16+',
          rightText: 'Quality Courses',
        },
        {
          leftNumber: '16+',
          leftText: 'Quality Courses',
          rightNumber: '7+',
          rightText: 'Happy Student',
        },
  ];

  return (
    <div className="NumberSlider">
      <div className="Slider">
        <div className="slider-container">
          <Slider {...settings}>
            {slidesData.map((slide, index) => (
              <div key={index} className="slide d-flex">
                <div className="slide-content">
                  <div className="left-box">
                    <div className="left-number">{slide.leftNumber}</div>
                    <div className="left-text">{slide.leftText}</div>
                  </div>
                  <div className="right-box">
                    <div className="right-number">{slide.rightNumber}</div>
                    <div className="right-text">{slide.rightText}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default NumberSlider;
