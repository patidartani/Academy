import React from 'react'
import Navbar from '../component/Navbar'
import Homeupcoming from '../component/Homeupcoming'
import HomeCourses from '../component/HomeCourses'
import HomeLatestCourses from '../component/HomeLatestCourses '
import TopInstructors from '../component/TopInstructors'
import Frequently2 from '../component/Frequently2'
import Visitour from '../component/Visitour'
import Learning from '../component/Learning'
import Footer from '../component/Footer'
import Platform3 from '../component/Platform3'
import Categories3 from '../component/Categories3'

const Homepage3 = () => {
  return (
    <div>
         <Navbar />
         <Platform3/>
         <Categories3/>
        <Homeupcoming/>
        <HomeCourses/>
        <HomeLatestCourses/>
        <TopInstructors/>
        
        <Visitour/>
        <Frequently2/>
    
        <Learning/>
        <Footer/>
    </div>
  )
}

export default Homepage3