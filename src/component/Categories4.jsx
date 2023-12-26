import React from 'react'
import "./Categories4.css"
import { useNavigate } from 'react-router-dom'

const Categories4 = () => {
  const navigate = useNavigate();

  const categori = [
    {
      icontop: "ri-html5-line",
      html: "HTML & CSS",
      pera: "3 Courses",
      color: "rgb(133,37,88)",
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
    <div className='category4'>
      <div className='catecontent4'>
        <h5>CATEGORIES</h5>
        <h2>Popular categories</h2>
        <div className='linear'></div>
      </div>

      <div className='cateimage4'>
        {categori.map((cate, index) => (
          <div onClick={()=>{navigate('/courses')}} className='catebox4' key={index}>
            <h4 className='cateicon4' style={{ color: `${cate.color}` }}><i className={cate.icontop}></i></h4>
            <div className='catehtml4'>
              <h5>{cate.html}</h5>
              <p>{cate.pera}</p>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  )
}

export default Categories4