import React from 'react'
import Navbar from '../component/Navbar'
import Platform3 from '../component/Platform3'
import Footer from '../component/Footer'
import Learning from '../component/Learning'
import Visitour from '../component/Visitour'
import TopInstructors from '../component/TopInstructors'
import HomeLatestCourses from '../component/HomeLatestCourses '
import HomeCourses from '../component/HomeCourses'
import Homeupcoming from '../component/Homeupcoming'
import Frequently4 from '../component/Frequently4'
import Categories4 from '../component/Categories4'
import Home4One from '../component/Home4One'
import NumberSlider from '../component/NumberSlider'
import Learned from '../component/Learned'
import Ratedcourse from '../component/Ratedcourse'
import Identity from '../component/Identity'
import Home4inst from '../component/Home4inst'
import TopInstructors4 from '../component/TopInstructors4'
import Latestcourse from '../component/Latestcourse'

const Homepage4 = () => {
  return (
    <div>
         <Navbar />
         <Home4One/>
         <NumberSlider/>
         <Learned/>
         <Categories4/>
        <Homeupcoming/>
        <Ratedcourse/>
       <Identity/>
       <Latestcourse/>
        <TopInstructors4/>
        <Home4inst/>
        <Frequently4/>
    
        <Visitour/>
        <Learning/>
        <Footer/>
    </div>
  )
}

export default Homepage4