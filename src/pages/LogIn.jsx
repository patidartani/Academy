import React from 'react'
import "./LogIn.css"
import LogInImg from "../assets/images/JoinNowImg.gif"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const LogIn = () => {
  return (
    <div>
      <Navbar/>
          <div className="LogIn">
                    <div className="log">
          <div className="logLeft">
                  <img src={LogInImg} alt="" />
          </div>
          <div className="logRight">
                    <div className="logTop">
                    <h3>Log in<span>!</span></h3>
                    <p>Explore, learn, and grow with us. enjoy a seamless and <br /> enriching educational journey. lets begin!</p>
                    </div>
                    <div className="logMedium">
                          <form>
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
                          <div className="forgot">
                              <a href="/">Forgot password?</a>
                          </div>
                          <div className="one">
                                  <button>Log in</button>
                          </div>
                          </form>
                    </div>
                    <div className="logBottom">
                              <div className="btm">
                                  <h3>Login as-</h3>
                                  <div className="btns">
                                    <button>Student</button>
                                    <button>Admin</button>
                                    <button>Instructors</button>
                                  </div>
                                  <p>Don't have an account? <a href="/">Sign up</a></p>
                                  <h6>_______________________or_______________________</h6>
                                  <button><i class="ri-facebook-circle-fill"></i> Continue with facebook</button>

                              </div>
                    </div>
          </div>
          
          
          
          
          </div>
          </div>
          <Footer/>
    </div>
  )
}

export default LogIn