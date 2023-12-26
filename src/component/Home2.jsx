import React from 'react'
import "./Home2.css"
import banner1 from "../assets/Images/banner1.jpg"
import banner2 from "../assets/Images/banner2.jpg"
import banner3 from "../assets/Images/banner3.jpg"
import banner4 from "../assets/Images/banner4.jpg"
import black1 from "../assets/Images/black1.png"
import black2 from "../assets/Images/black2.png"
import black3 from "../assets/Images/black3.png"

const Home2 = () => {
    return (
        <div className=''>
            <div className='home2main'>
                <div className='start'>
                    <h1>Start learning from best <span>platform</span></h1>
                    <p>Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
                    <div className='home2search'>
                        <input type="text" placeholder='What do you want to learn' />
                        <button><i class="ri-search-line me-2"></i>Search</button>
                    </div>
                </div>

                <div className='home2boxes'>
                    <div className='home2box'>
                        <img src={banner1} alt="" />
                    </div>
                    <div className='home2box'>
                        <img className='banner2' src={banner2} alt="" />
                    </div>
                    <div className='home2box'>
                        <img className='banner2' src={banner3} alt="" />
                    </div>
                    <div className='home2box'>
                        <img src={banner4} alt="" />
                    </div>
                </div>

                <div className='black'>
                    <div className='blackleft'>
                        <h4><span>We</span> provides you world class performance <span>.</span></h4>
                    </div>
                    <div className='blackright'>
                        <div className='blackcontant'>
                            <div className='blackrightbox'>
                                <img src={black1} alt="" />
                            </div>
                            <h6>16 Online courses</h6>
                            <p>Explore a variety of fresh topics</p>
                        </div>
                        <div className='blackcontant'>
                        <div className='blackrightbox' style={{backgroundColor:"rgb(106,206,255)"}}>
                            <img src={black2} alt=""  />
                        </div>

                        <h6>16 Online courses</h6>
                        <p>Explore a variety of fresh topics</p>
                        </div>
                        <div className='blackcontant'>
                        <div className='blackrightbox' style={{backgroundColor:"rgb(158,131,254)"}}>
                            <img src={black3} alt="" />
                        </div>

                        <h6>16 Online courses</h6>
                        <p>Explore a variety of fresh topics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home2