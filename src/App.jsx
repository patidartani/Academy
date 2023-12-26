import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CourseBundle from './pages/CourseBundle'
import Homepage2 from './pages/Homepage2'
import Homepage3 from './pages/Homepage3'
import EbookCategory from './component/EbookCategory'
import Cart from './pages/Cart'
import Homepage4 from './pages/Homepage4'
import LogIn from './pages/LogIn'
import JoinNow from './pages/JoinNow'
import Homepage5 from './pages/Homepage5'
import Homepage6 from './pages/Homepage6'
import CourseCategory from './component/CourseCategory'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/coursebundle' element={<CourseBundle/>}/>
        <Route path='/courses' element={<CourseCategory/>}/>
        <Route path='/ebook' element={<EbookCategory/>}/>
        <Route path='/homepage2' element={<Homepage2/>}/>
        <Route path='/homepage3' element={<Homepage3/>}/>
        <Route path='/homepage4' element={<Homepage4/>}/>
        <Route path='/homepage5' element={<Homepage5/>}/>
        <Route path='/homepage6' element={<Homepage6/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/joinnow' element={<JoinNow/>}/>
      </Routes>
    </div>
  )
}

export default App