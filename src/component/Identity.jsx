import React from 'react'
import "./Identity.css"
import IdentityImg from "../assets/images/identityImg.jpeg"

const Identity = () => {
  return (
    <div>
          <div className="Identity">
          <div className="OurIdentity">

           <div className="IdentityTop">
                    <div className="IdentityTopLeft">
                              <h3>OUR IDENTITY</h3> 
                              <h2>We always prioritize quality and uniqueness</h2>
                              <span></span>
                              <p>Our identity is a reflection of who we are as individuals or as an organization, while our profile provides a concise summary of our background, skills, and accomplishments.</p>
                    </div> 
                    <div className="IdentityTopRight">
                               <div className="One">
                                        <div className="OneLeft">
                                                  <h5>7<i style={{color:"rgb(252, 49, 127)"}} className="ri-add-line"></i></h5>
                                                  <h6>Happy student</h6>
                                        </div>
                                        <div className="OneLeft">
                                                  <h5>5<i style={{color:"rgb(146, 99, 255)"}} className="ri-add-line"></i></h5>
                                                  <h6>Quality educators</h6>
                                        </div>
                               </div>
                               <div className="One">
                               <div className="OneLeft">
                                        <h5>11<i style={{color:"rgb(250, 194, 117)"}} className="ri-add-line"></i></h5>
                                        <h6>Premium courses</h6>
                               </div>
                                        <div className="OneLeft">
                                                  <h5>5<i style={{color:"rgb(49, 166, 255)"}} className="ri-add-line"></i></h5>
                                                  <h6>Cost-free courses</h6>
                                        </div>
                               </div>
                    </div> 
           </div>
           <div className="IdentityBottom">
                    <img src={IdentityImg} alt="" />
           </div>

 </div>
</div>
</div>
  )
}

export default Identity