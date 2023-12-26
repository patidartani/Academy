import React, { useState } from 'react'
import "./Frequently.css"
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import faq from '../assets/Images/faq2.jpg'


const sections = [
    { heading: 'What is a Learning Management System (LMS)?', content: 'A Learning Management System is a software application or platform designed to manage and deliver online educational courses, training programs, and learning content. It provides a centralized system for instructors to create, organize, track, and assess learning materials and activities.' },
    { heading: 'What are the key features of an LMS?', content: 'Common features of an LMS include course management, content creation and delivery, student enrollment and tracking, assessment and grading tools, communication and collaboration tools, reporting and analytics, and integration with other systems or tools.' },
    { heading: 'How can an LMS benefit educational institutions and organizations?', content: 'An LMS offers several benefits, such as:Centralized access to learning materials and resources.Efficient administration and management of courses and learners.Flexibility and scalability in delivering online education or training.Tracking and reporting on learner progress and performance.Improved communication and collaboration among instructors and learners.Cost savings by reducing the need for physical infrastructure.' },
    { heading: 'Is an LMS suitable for both academic and corporate settings?', content: 'Yes, an LMS can be used in both academic and corporate environments. In academic settings, it facilitates online learning, course management, and assessment for schools, colleges, and universities. In corporate settings, it supports employee training, onboarding programs, skills development, and compliance training.' },
];

const Frequently2 = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div>
            <div className='freqmain'>
                <h3>Frequently asked questions</h3>
                <h5>Have something to know? Check here if you have any questions about us.</h5>
            </div>
            <div className='d-flex flex-lg-row flex-column justify-content-evenly'>
            <div className='col-lg-4 col-10'>
                <img src={faq} alt="" className='col-12' />
            </div>

            <div className="freqcontainer col-lg-6 col-10"  >
                {sections.map((section, index) => (
                    <div key={index} className="section mt-4">
                        <div className="header" onClick={() => toggleSection(index)}>
                            <h5 className="heading">{section.heading}</h5>
                            <div className="icon">
                                {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className="content">
                                <p>{section.content}</p>
                            </div>
                        )}
                    </div>
                ))}

                <div className=' freqbutton'>
                    <button className=''>See More</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Frequently2