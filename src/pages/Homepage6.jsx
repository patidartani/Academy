import React from 'react'
import Navbar from '../component/Navbar'
import Home6One from '../component/Home6One'
import Footer from '../component/Footer'
import Topcourse6 from '../component/Topcourse6'
import Categories4 from '../component/Categories4'
import H6UpcomingCourses from '../component/H6UpcomingCourses'
import Latestcourse6 from '../component/Latestcourse6'
import Student from '../component/student'
import Home5inst from '../component/Home5inst'
import TopInstructors4 from '../component/TopInstructors4'
import Frequently from '../component/Frequently'
import Home6latest from '../component/Home6latest'
import Learning from '../component/Learning'

const Homepage6 = () => {
  return (
    <div>
        <Navbar/>
        <Home6One/>
        <Topcourse6/>
        <Categories4/>
        <H6UpcomingCourses/>
        <Latestcourse6/>
        <Student/>
        <Home5inst/>
        <TopInstructors4/>
        <Frequently/>
        <Home6latest/>
        <Learning/>
        <Footer/>
    </div>
  )
}

export default Homepage6