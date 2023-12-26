import React, { useEffect } from "react";
import { useState } from "react";
import "./Ebookkids.css"
import { ebookkids } from "./EbookKidsdata";
import Navbar from "./Navbar";


const EbookCategory = () => {

  const [item, setItem] = useState(ebookkids)
  const filterItem = (priceItem)=>{
    const updateditem = ebookkids.filter((curElem)=>{
      return curElem.price === priceItem;
    })
    setItem(updateditem)
  }

  const filterItemForArray = (priceArray) => {
    const updatedItem = ebookkids.filter((curElem)=>{
      let ok = false;
      priceArray.forEach((ele, ind) => {
        ok|=(ele==curElem.price);
      })
      return ok;
    })
    setItem(updatedItem);
  }
  
  


  return (
    <>
       <Navbar setItem = {setItem} />
    <div className='COURSEBUNDLE'>     
      <div className="CourseBundle">
        <div className="CourseBundleTop">
          <div className="Top">
            <div className="text">
              <p><a href="/"><i className="ri-home-3-fill"></i> Home</a><i style={{fontSize:"2vmax"}} className="ri-arrow-right-s-line"></i><span>Ebooks</span></p>
              <h1>Ebooks </h1>
            </div>
            <div className="Book">
              <img src="https://demo.creativeitem.com/academy/assets/frontend/default-new/image/brd-book.png" alt="" />
            </div>
          </div>
        </div>
    </div>

    </div>
    <div></div>
    <div className=" d-flex justify-content-evenly mt-5" style={{width:"100%"}}>
      <div className="shadow p-3"style={{width:"23%"}}>
        <div className="">
          <h2 className=" fs-4">Categories</h2>

          <div onClick={()=>setItem(ebookkids)} className="row d-flex align-items-center mt-3">
            <input type="radio" className=" col-1 mt-1 ms-2" name="gender" value="male" /> <span className="col-9">All category</span> <span className="col"> (7)</span>
          </div>
          <div onClick={()=>filterItem("$30")} className="row d-flex align-items-center mt-3">
            <input type="radio" className="mt-1 col-1 ms-2" name="gender" value="male" /><span className="col-9">Kids</span>  <span className="col">(1)</span>
          </div>
          <div onClick={()=>filterItem("Free")} className="row d-flex align-items-center mt-3">
            <input type="radio" className="mt-1 col-1 ms-2" name="gender" value="male" /><span className="col-9">Science Fiction & Fantasy</span>  <span className="col">(2)</span>  
          
          </div>
          <div onClick={()=>filterItem("")} className="row d-flex align-items-center mt-3">
            <input type="radio" className="mt-1 col-1 ms-2" name="gender" value="male" /><span className="col-9">Politics</span>  <span className="col">(0)</span> 
          </div>
          <div onClick={()=>filterItem("")} className="row d-flex align-items-center mt-3">
            <input type="radio" className="mt-1 col-1 ms-2" name="gender" value="male" /><span className="col-9">Law and Justice</span> <span className="col">(0)</span>  
          </div>
          <div onClick={()=>filterItem("")} className="row d-flex align-items-center mt-3">
            <input type="radio" className="mt-1 col-1 ms-2" name="gender" value="male" /><span className="col-9">Cooking & Foodes</span> <span className="col">(0)</span>  
          </div>
          <div onClick={()=>filterItem("")} className="row d-flex align-items-center mt-3">
            <input type="radio" className="mt-1 col-1 ms-2" name="gender" value="male" /><span className="col-9">Motivation</span> <span className="col">(0)</span>  
          </div>
          <div onClick={()=>filterItem("")} className="row d-flex align-items-center mt-3">
            <input type="radio" className="mt-1 col-1 ms-2" name="gender" value="male" /><span className="col-9"> Freelancing & Outsourcing</span> <span className="col">(0)</span> 
          </div>
          <div onClick={()=>filterItem("$29")} className="row d-flex align-items-center mt-3">
            <input type="radio" className="mt-1 col-1 ms-2" name="gender" value="male" /><span className="col-9">Programming Language</span> <span className="col">(1)</span> 
            
          </div>
          <div onClick={()=>filterItem("$35")} className="row d-flex align-items-center mt-3">
            <input type="radio" className="mt-1 col-1 ms-2" name="gender" value="male" /><span className="col-9">Education</span> <span className="col">(3)</span> 
            
          </div>
        </div>
        <h2 className="mt-5 fs-4">Price</h2>

        <div onClick={()=>setItem(ebookkids)} >
          <input type="radio"  className="mt-3 me-3 " name="gender" value="male" /> All
        </div>
        <div>
          <input onClick={()=>filterItem("Free")} type="radio" className="mt-3 me-3" name="gender" value="male" /> Free
        </div>
        <div>
          <input onClick={()=>filterItemForArray(["$29","$30","$35"])} type="radio" className="mt-3 me-3" name="gender" value="male" /> Paid
        </div>

        <h2 className="mt-5 fs-4">Ratings</h2>

        <div>
          <input type="radio" className="mt-3 me-3" name="gender" value="male" /> All
        </div>
        <div>
          <input type="radio" className="mt-3 me-3"  name="gender" value="male" />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
        </div>
        <div>
          <input type="radio" className="mt-3 me-3"  name="gender" value="male" />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
        </div>
        <div>
          <input type="radio" className="mt-3 me-3"  name="gender" value="male" />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
        </div>
        <div>
          <input type="radio" className="mt-3 me-3"  name="gender" value="male" />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
        </div>
        <div>
          <input type="radio" className="mt-3 me-3"  name="gender" value="male" />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
        </div>
      </div>
      <div className="" style={{width:"70%"}}>
      <div className='ebookmain'>
              <div className='showing'>
                 <h4>Showing 6 Of 7 Results</h4>
                 <div className='searchabso'>
                 <i className="ri-search-line"></i>
                 <input type="text" placeholder='Search' />
                 </div>
              </div>

              <div className='ebookboxes'>
                {item?.map((kids,index)=> (
                    <div className='ebookbox' key={index}>
                       <img src={kids.img} alt="" />
                       <p>{kids.price}</p>
                       <h6>{kids.heading}</h6>
                       <button>View details</button>
                    </div>
                ))}
               
              </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EbookCategory;
