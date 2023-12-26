import React from 'react'
import Navbar from '../component/Navbar'
import HomeCourses from '../component/HomeCourses'
import Homeupcoming from '../component/Homeupcoming'
import HomeLatestCourses from '../component/HomeLatestCourses '
import TopInstructors from '../component/TopInstructors'
import Frequently2 from '../component/Frequently2'
import Visitour from '../component/Visitour'
import Learning from '../component/Learning'
import Footer from '../component/Footer'
import Home2 from '../component/Home2'
import Categories2 from '../component/Categories2'

const Homepage2 = () => {
  return (
    <div>
        <Navbar />
        <Home2/>
        <Homeupcoming/>
        <Categories2/>
        <HomeCourses/>
        <HomeLatestCourses/>
        <TopInstructors/>
       
        <Frequently2/>
        
        <Visitour/>
        <Learning/>
        <Footer/>
        
    </div>
  )
}

export default Homepage2