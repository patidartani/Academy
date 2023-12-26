import React from 'react'
import flex from '../assets/Images/flexibility.png'
import access from '../assets/Images/access.png'
import global from '../assets/Images/global.png'
import cost from '../assets/Images/cost.png'

const Learn = () => {
  return (
    <div className=''>
        <h3 className='text-center fw-bold fs-2'>Why learn online?</h3>
        <div className='w-100  d-flex flex-lg-row flex-wrap justify-content-evenly text-center mt-5'>
    <div className='col-lg-2 col-md-5 cols-10 d-flex flex-column align-items-center'>
     <img src={flex} alt="" width={200} />
     <h6 className='fs-4 mt-3'>Flexibility</h6>
     <p className='col-10 mt-3 text-secondary'>Flexibility in scheduling and learning at your own pace.</p>
    </div>
    <div className='col-lg-2 col-md-5 cols-10 d-flex flex-column align-items-center'>
     <img src={access} alt="" width={200} />
     <h6 className='fs-4 mt-3'>Accessibility</h6>
     <p className='col-10 mt-3 text-secondary'>Convenient access from anywhere with an internet connection.</p>
    </div>
    <div className='col-lg-2 col-md-5 cols-10 d-flex flex-column align-items-center'>
     <img src={global} alt="" width={200} />
     <h6 className='fs-4 mt-3'>Globalization</h6>
     <p className='col-10 mt-3 text-secondary'>Opportunity for global networking and collaboration with peers worldwide.</p>
    </div>
    <div className='col-lg-2 col-md-5 cols-10 d-flex flex-column align-items-center '>
     <img src={cost} alt="" width={200} />
     <h6 className='fs-4 mt-3'>Cost-effectiveness</h6>
     <p className='col-10 mt-3 text-secondary'>Cost-effective compared to traditional in-person education.</p>
    </div>
        </div>
    </div>
  )
}

export default Learn