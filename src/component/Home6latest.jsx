import React from 'react'
import "./Home6latest.css"
import home6img from "../assets/Images/home6img.png"
import home6img2 from "../assets/Images/home6img2.png"
import home6img3 from "../assets/Images/home6img3.png"
import home6img4 from "../assets/Images/home6img4.png"

const Home6latest = () => {
    return (
        <div>
            <div className='home6main'>
                <div className='home6content'>
                    <h3>Follow the latest news</h3>
                    <p>Visit our valuable articles to get more information.</p>
                </div>
                <div className='home6boxes'>
                    <div className='home6img'>
                        <img src={home6img} alt="" />
                        <div className='home6box'>
                            <h6><i class="ri-calendar-2-line"></i>Wed, 22 Dec 2021</h6>
                            <h5>AI-Based learning is the future of Corporate Training</h5>
                            <p>The corporate world is slowly stepping into the dimension of Artificial Intelligence. This technology is transforming their</p>
                            <h3>→</h3>
                        </div>
                    </div>

                    <div className='home6img'>
                        <img src={home6img2} alt="" />
                        <div className='home6box'>
                            <h6><i class="ri-calendar-2-line"></i>Wed, 22 Dec 2021</h6>
                            <h5>Balance your priorities in life and enjoy a beautiful life</h5>
                            <p>Living a productive and meaningful life is a balancing act. With the pressures of today’s demanding and high paced world, most people struggle to find...</p>
                            <h3>→</h3>
                        </div>
                    </div>
                    <div className='home6img'>
                        <img src={home6img3} alt="" />
                        <div className='home6box'>
                            <h6><i class="ri-calendar-2-line"></i>Wed, 22 Dec 2021</h6>
                            <h5>Parent Power: Will We Choose Pitchforks or Partnerships?</h5>
                            <p>After two tumultuous years of intermittent school closures, parents and caregivers are claiming their power within the education system in a new way. ...</p>
                            <h3>→</h3>
                        </div>
                    </div>
                    <div className='home6img'>
                        <img src={home6img4} alt="" />
                        <div className='home6box'>
                            <h6><i class="ri-calendar-2-line "></i>Wed, 22 Dec 2021</h6>
                            <h5>4 Ways To Maximize Student Participation In Online Learning</h5>
                            <p>Why Participation Is Important in Online LearningParticipation in all education learning environments is essential, most significantly because it rein...</p>
                            <h3>→</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home6latest