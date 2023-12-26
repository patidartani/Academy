import React from 'react'

const Student = () => {
  return (
    <div>
        <div className='w-100 d-flex flex-lg-row flex-wrap justify-content-evenly text-center mt-5'>
    <div className='col-lg-2 col-md-5  d-flex flex-column align-items-center'>
      <h1 className='fw-bold' style={{fontSize:"6vmax"}}>7+</h1>
      <p className='fs-5'>Happy student</p>
    </div>
    <div className='col-lg-2 col-md-5  d-flex flex-column align-items-center'>
    <h1 className='fw-bold' style={{fontSize:"6vmax"}}>5+</h1>
      <p className='fs-5'>Quality trainers</p>
    </div>
    <div className='col-lg-2 col-md-5  d-flex flex-column align-items-center'>
    <h1 className='fw-bold' style={{fontSize:"6vmax"}}>11+</h1>
      <p className='fs-5'>Premium courses</p>
    </div>
    <div className='col-lg-2 col-md-5  d-flex flex-column align-items-center '>
    <h1 className='fw-bold' style={{fontSize:"6vmax"}}>5+</h1>
      <p className='fs-5'>Cost-free courses</p>
    </div>
        </div>
    </div>
  )
}

export default Student