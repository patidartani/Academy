import React from 'react'
import "./Home5Pthink.css"
import PeopleThinkImg from "../assets/images/peoplethink.png"
import quoteImg from "../assets/images/quote.svg"

const Home5Pthink = () => {
  return (
    <div>
          <div className="Home5Pthink">
                <div className="Pthink">
                    <div className="PthinkTop">
                              <h5>What the people tinks about us</h5>
                    </div>
                    <div className="PthinkBottom">
                              <div className="one">
                                  <div className="Top">
                                        <img className='people' src={PeopleThinkImg} alt="" /> 
                                        <h6><span>Signe Thompson</span><small>Sun, 04 Aug 2019</small></h6>
                                        <img src={quoteImg} alt="" />
                                 </div> 
                                   <p>Peter you are classic man!!</p>   
                                   <div className="btm"><i style={{color:"yellow", fontSize:"1vmax"}} class="ri-star-fill"></i> 5</div>  
                              </div>
                              {/* ----- */}
                              <div className="one">
                                  <div className="Top">
                                        <img className='people' src={PeopleThinkImg} alt="" /> 
                                        <h6><span>Signe Thompson</span><small>Tue, 18 Jun 2019</small></h6>
                                        <img src={quoteImg} alt="" />
                                 </div> 
                                   <p>Ipsam consequatur nisi necessitatibus cumque</p>   
                                   <div className="btm"><i style={{color:"yellow", fontSize:"1vmax"}} class="ri-star-fill"></i> 5</div>  
                              </div>
                              {/* ---------- */}
                              <div className="one">
                                  <div className="Top">
                                        <img className='people' src={PeopleThinkImg} alt="" /> 
                                        <h6><span>Naomi Hill</span><small>Tue, 18 Jun 2019</small></h6>
                                        <img src={quoteImg} alt="" />
                                 </div> 
                                   <p>Provident autem duis dolorem maiores recusandae Velit velit vel eos eu minus iusto debitis maiores similique accusantium</p>   
                                   <div className="btm"><i style={{color:"yellow",fontSize:"1vmax"}} class="ri-star-fill"></i> 5</div>  
                             
                              </div>
                    </div>
</div>  
</div>
</div>
  )
}

export default Home5Pthink