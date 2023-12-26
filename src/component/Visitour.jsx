import React from 'react'
import "./Visitour.css"
import line from "../assets/Images/line.png"
import visitboximage1 from "../assets/Images/visitboximage1.png"
import visitboximage2 from "../assets/Images/visitboximage2.png"
import visitboximage3 from "../assets/Images/visitboximage3.jpg"
import aadmi from "../assets/Images/aadmi1.jpg"

const Visitour = () => {
  return (
    <div>
        <div className='visitmain'>
            <h3>Visit our latest blogs</h3>
            <img src={line} alt="" style={{marginTop: "-1vmax"}} />
            <h5>Visit our valuable articles to get more information.</h5>
        </div>
    
        <div className='visitboxes'>
            <div className='visitbox'> 
                <div className="scalebox">
                   <img src={visitboximage1} alt="" />
                </div>
                <button>Education</button>
                <h6>AI-Based learning is the future of Corporate Training</h6>
                <h5>The corporate world is slowly stepping into the dimension of Artificial</h5>
                 <hr />
                 <div className='visitaadmi'>
                    <img src={aadmi} alt="" style={{width: "12%", height: "10%", borderRadius: "20vmax"}} />
                    <h4>John Doe</h4>
                    <h4 className='text-secondary'>Thu, 23 Dec 2021</h4>
                </div>           
            </div>
            <div className='visitbox'>
            <div className="scalebox"> 
                <img src={visitboximage2} alt="" />
            </div>
                <button>Lifestyle</button>
                <h6>Balance your priorities in life and enjoy a beautiful life</h6>
                <h5>Living a productive and meaningful life is a balancing act. With the pressures of</h5>
                <hr />
                 <div className='visitaadmi'>
                    <img src={aadmi} alt="" style={{width: "12%", height: "10%", borderRadius: "20vmax"}} />
                    <h4>John Doe</h4>
                    <h4 className='text-secondary'>Thu, 23 Dec 2021</h4>
                </div>           
            </div>
            <div className='visitbox'> 
            <div className="scalebox">
                <img src={visitboximage3} alt="" />
            </div>
                <button>Education</button>
                <h6>Parent Power: Will We Choose Pitchforks.</h6>
                <h5>After two tumultuous years of intermittent school closures, parents and caregivers</h5>
                <hr />
                 <div className='visitaadmi'>
                    <img src={aadmi} alt="" style={{width: "12%", height: "10%", borderRadius: "20vmax"}} />
                    <h4>John Doe</h4>
                    <h4 className='text-secondary'>Thu, 23 Dec 2021</h4>
                </div>           
            </div>
        </div>

    </div>
  )
}

export default Visitour