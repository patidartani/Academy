import React from 'react'
import "./Categories.css"
import line from "../assets/Images/line.png"
import { useNavigate } from 'react-router-dom'

const Categories = (setItem) => {
  const navigate = useNavigate()
  // const filterItems = (priceItem)=>{
  //   const updateditem = ebookkids.filter((curElem)=>{
  //     return curElem.price === priceItem;
  //   })
  //   setItem(updateditem)
  // }

const categori = [
{
  icontop: "ri-html5-line",
  html: "HTML & CSS",
  pera: "3 Courses",
  color:"rgb(133,37,88)",
},
{
  icontop: "ri-barcode-line",
  html: "Color Theory",
  pera: "2 Courses",
  color: "rgb(120,36,23)"
},
{
  icontop: "ri-camera-fill",
  html: "Photoshop",
  pera: "2 Courses",
  color: "rgb(87,112,86)"
},
{
  icontop: "ri-wordpress-line",
  html: "WordPress Theme",
  pera: "1 Courses",
  color: "rgb(39,115,84)"

},
{
  icontop: "ri-file-pdf-fill",
  html: "Adobe IIIustrator",
  pera: "1 Courses",
  color: "rgb(145,135,82)"
},
{
  icontop: "ri-ball-pen-fill",
  html: "Drawing",
  pera: "1 Courses",
  color: "rgb(146,6,40)"
},
{
  icontop: "ri-tv-2-line",
  html: "Blender",
  pera: "1 Courses",
  color: "rgb(21,40,152)"
},
{
  icontop: "ri-blender-line",
  html: "Sewing",
  pera: "1 Courses",
  color: "rgb(37,147,39)"
},
{
  icontop: "ri-checkbox-multiple-blank-fill",
  html: "Motion Graphics",
  pera: "1 Courses",
  color: "rgb(100,113,146)"

},
{
  icontop: "ri-lightbulb-line",
  html: "Lighting",
  pera: "1 Courses",
  color: "rgb(121,135,96)"
},
{
  icontop: "ri-smartphone-fill",
  html: "Mobile App Design",
  pera: "1 Courses",
  color: "rgb(67,36,57)"
},
{
  icontop: "ri-contract-left-right-fill",
  html: "Bootstrap",
  pera: "1 Courses",
  color: "rgb(101,50,152)"

},
]

  return (
    <div>
      <div className='catecontent'>
        <h2>Top categories</h2>
        <img src={line} alt="" />
        <h6>These are the most popular courses among listen courses learners worldwide</h6>
      </div>

      <div className='cateimage'>
        {categori.map((cate,index) => (
            <div onClick={()=>{navigate('/courses')}} className='catebox' key={index}>
            <h4 className='cateicon' style={{color: `${cate.color}`}}><i className={cate.icontop}></i></h4>
            <div className='catehtml'>
              <h5>{cate.html}</h5>
              <i className="ri-arrow-drop-right-line"></i>
            </div>
            <p>{cate.pera}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Categories