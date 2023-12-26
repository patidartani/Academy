import React from 'react'
import "./Home4One.css"
import Home4OneImg from "../assets/images/home-4MainImg.png"
import Home4StartImg from "../assets/images/home-4StartImg.png"


const Home4One = () => {
  return (
    <div>
       <div className="Home-4Main">
              <div className="Home4">  

               <div className="Home-4Left">
                <div className="Home-4Top">
                  <div className="start">
                 <img src={Home4StartImg} alt="" /> <span>Start</span> 
                  </div>
                 <h3 ><span>learning</span> <h2> from best</h2></h3>
                  <h1>platform</h1>
                 <p>Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
                </div>
                  
                <img src={Home4OneImg} alt="" />


                 <div className="Home-4Medium">
                   <div className="ipt">
                   <input type="text" placeholder='What do you want to learn'  />
                    <button><i className="ri-search-line"></i> Search</button>
                   </div>
                 </div>


               </div>


 
 </div>
</div>
</div>
  )
}

export default Home4One