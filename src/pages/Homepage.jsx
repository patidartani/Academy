import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Platform from '../component/Platform'
import Homeupcoming from '../component/Homeupcoming'
import HomeCourses from '../component/HomeCourses'
import Categories from '../component/Categories'
import HomeLatestCourses from '../component/HomeLatestCourses '
import TopInstructors from '../component/TopInstructors'
import Frequently from '../component/Frequently'
import Visitour from '../component/Visitour'
import Learning from '../component/Learning'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Platform/>
        <Homeupcoming/>
        <HomeCourses/>
        <Categories/>
        <HomeLatestCourses/>
        <TopInstructors/>
        <Frequently/>
        <Visitour/>
        <Learning/>
        <Footer/>
       
    </div>
  )
}

export default Homepage