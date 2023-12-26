import React from 'react'
import "./JoinNow.css"
import JoinNowImg from "../assets/images/JoinNowImg.gif"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const JoinNow = () => {
  return (
    <div>
      <Navbar/>
           <div className="Joinnow">
                <div className="Join">
                
                <div className="JoinLeft">
                  <img src={JoinNowImg} alt="" />
                </div>
                <div className="JoinRight">
                        <div className="Top">
                              <h3>Sign Up<span>!</span></h3>
                              <p>Explore, learn, and grow with us. enjoy a seamless and <br /> enriching educational journey. lets begin!</p>
                        </div>
                        <div className="Medium">
                              <form>
                                  <div className="one">
                                        <label> First Name</label>
                                        <div className="int">
                                        <i class="ri-user-fill"></i>        
                                        <input type="text" placeholder="Enter your First Name"  />
                                        </div>
                                  </div>
                                  <div className="one">
                                        <label>Last Name</label>
                                        <div className="int">
                                        <i class="ri-user-fill"></i>        
                                        <input type="text" placeholder="Enter your Last Name"  />
                                        </div>
                                  </div>
                                  <div className="one">
                                        <label>Your email</label>
                                        <div className="int">
                                        <i class="ri-user-fill"></i>        
                                        <input type="text" placeholder="Enter your email"  />
                                        </div>
                                  </div>
                                  <div className="one">
                                        <label>Password</label>
                                        <div className="int">
                                        <i class="ri-git-repository-private-fill"></i>     
                                        <input type="text" placeholder="Enter your valid password"  />
                                        </div>
                                  </div>
                                  <div  className="two d-flex -2 mt-3">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> 
  <label className="form-check-label ms-2" for="flexCheckDefault">
       Apply to become an instructor
  </label>
</div>
                                  <div className="one">
                                        <label>Phone</label>
                                        <div className="int">
                                        <i class="ri-phone-fill"></i>
                                        <input type="text" placeholder="Enter your phone number"  />
                                        </div>
                                  </div>
                                  <div className="one">
                                        <label>Document (doc, docs, pdf, txt, png, jpg, jpeg)</label>
                                          <div className="int">
                                          <input type="file"/>
                                          </div>
                                        <p>Provide some documents about your qualifications</p>
                                  </div>
                                  <div className="one">
                                        <label>Message</label>
                                         <textarea name="" id="" cols="30" rows="4"></textarea>
                                  </div>    
                                  <div className="one">
                                  <button>Sign Up</button>
                                  </div>
                                  <div className="line">
                                        <p>Already you have an account? <a href="/">Log in</a></p>
                                  </div>
                              </form>
                        </div>
                        <div className="Bottom">
                            <p>_______________________________Or ____________________________ </p>
                            <button><i class="ri-facebook-circle-fill"></i> Continue with facebook</button>
                        </div>
                </div>


</div>
</div>
<Footer/>
</div>
  )
}

export default JoinNow