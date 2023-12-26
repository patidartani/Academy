import React from 'react'
import Navbar from '../component/Navbar'
import Platform5 from '../component/Platform5'
import Footer from '../component/Footer'
import Learning from '../component/Learning'
import Visitour from '../component/Visitour'
import TopInstructors from '../component/TopInstructors'
import HomeLatestCourses from '../component/HomeLatestCourses '
import HomeCourses from '../component/HomeCourses'
import Homeupcoming from '../component/Homeupcoming'
import Frequently4 from '../component/Frequently4'
import Categories4 from '../component/Categories4'
import Frequently from '../component/Frequently'
import Learn from '../component/Learn'
import Student from '../component/student'
import Topcourse5 from '../component/Topcourse5'
import Latestcourse5 from '../component/Latestcourse5'
import TopInstructors4 from '../component/TopInstructors4'
import Home5inst from '../component/Home5inst'
import Home5Pthink from '../component/Home5Pthink'
import Home5latest from '../component/Home5latest'

const Homepage5 = () => {
  return (
    <div>
         <Navbar />
         <Platform5/>
         <Learn/>
         <Categories4/>
         <Student/>
         <Homeupcoming/>
        <Topcourse5/>
        <Latestcourse5/>
        <TopInstructors4/>
        <Home5inst/>
        <Home5Pthink/>
        <Frequently/>
        <Home5latest/>
        <Learning/>
        <Footer/>
    </div>
  )
}

export default Homepage5