import React from 'react';
import "./CourseBundle.css"
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const CourseBundle = () => {

          const boxesData = [
                    {
                                        topContent: {
                                          title: "Complete Solution",
                                          text: "4 Courses",
                                          price: "$19.99"
                                        },
                      bottomContent: "Purchase for $70",
                      scrollContent: {
                              text: "Adobe Illustrator CC-Essentials Training Course",
                                price: "$18.99"  
                      }
                    },
                    {
                              topContent: {
                                title: "Beginner to Expert",
                                text: "3 Courses",
                                price: "$10"
                              },
            bottomContent: "Purchase for $10",
            scrollContent: {
                    text: "Adobe Illustrator CC-Essentials Training Course",
                      price: "$18.99"  
            }
          },
          {
                    topContent: {
                      title: "Grow your creativity",
                      text: "5 Courses",
                      price: "$75"
                    },
  bottomContent: "Purchase for $75",
  scrollContent: {
          text: " Complete Blender Creator: Learn 3D Modelling",
            price: "$89.99"  
  }
},
{
          topContent: {
            title: "Web design and web development",
            text: "3 Courses",
            price: "$300"
          },
bottomContent: "Purchase for $300",
scrollContent: {
text: " Complete Blender Creator: Learn 3D Modelling",
  price: "$89.99"  
}
},
                            {
                              topContent: {
                                        title: "Complete Wordpress theme development                                        ",
                                        text: "4 Courses",
                                        price: "$25"
                                      },
                            bottomContent: "Purchase for $25",
                            scrollContent: {
                            text: " Complete Blender Creator: Learn 3D Modelling",
                              price: "$89.99"  
                            }
                    },
                    {
                              topContent: {
                                        title: "Complete study for Vue JS                                       ",
                                        text: "4 Courses",
                                        price: "$320"
                                      },
                            bottomContent: "Purchase for $320",
                            scrollContent: {
                            text: " Complete Blender Creator: Learn 3D Modelling",
                              price: "$89.99"  
                            }
                    },
                    ];

  return (
    <div>
      <Navbar/>
    <div className='COURSEBUNDLE'>     
      <div className="CourseBundle">
        <div className="CourseBundleTop">
          <div className="Top">
            <div className="text">
              <p><a href="/"><i className="ri-home-3-fill"></i> Home</a><i style={{fontSize:"2vmax"}} className="ri-arrow-right-s-line"></i><span>Course bundle</span></p>
              <h1>Course bundle</h1>
            </div>
            <div className="Book">
              <img src="https://demo.creativeitem.com/academy/assets/frontend/default-new/image/brd-book.png" alt="" />
            </div>
          </div>
        </div>
        {/* ---------------------------- */}
        <div className="page6">
            <div className="show6">
            <p>Showing on this page : 6</p>
          <div className="search-bar">
          <i className="ri-search-line"></i>
            <input type="text" placeholder='Search for bundle' />
          </div>
            </div>
        </div>
        {/* ------------------------- */}
        <div className="BoXeS">
          {boxesData.map((box, index) => (
            <div key={index} className="box">
              <div className="boxTop">
              <a href="/details" className="boxTitle">{box.topContent.title}</a>
                <a href="/details" className="boxText">{box.topContent.text}</a>
                <div className="boxPrice">{box.topContent.price}</div>
              </div>
              <div className="boxScroll"> 
               <div className="scrollColumn">
                  <div className="scrollItem">
                    <img src=" https://demo.creativeitem.com/academy/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_131689223714.jpg " alt="" />
                  </div>
                  <div className="boxText">
                    {box.scrollContent.text}
                  </div>
                  <div className="boxPrice">
                    {box.scrollContent.price}
                  </div>
                </div>

                     <div className="scrollColumn">
                  <div className="scrollItem">
                    <img src="https://demo.creativeitem.com/academy/assets/frontend/default-new/img/course_thumbnail_placeholder.jpg" alt="" />
                  </div>
                  {/* <div className="boxText">
                    {box.topContent.text}
                  </div> */}
                  <div className="boxPrice">
                    {box.topContent.price}
                  </div>
                </div>

                <div className="scrollColumn">
                  <div className="scrollItem">
                    <img src="https://demo.creativeitem.com/academy/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_121689223660.jpg" alt="" />
                  </div>
                  {/* <div className="boxText">
                    {box.topContent.text}
                  </div> */}
                  <div className="boxPrice">
                    {box.topContent.price}
                  </div>
                </div>

                <div className="scrollColumn">
                  <div className="scrollItem">
                    <img src="https://demo.creativeitem.com/academy/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_171689235346.jpg" alt="" />
                  </div>
                  <div className="boxText">
                    {box.topContent.text}
                  </div>
                  <div className="boxPrice">
                    {box.topContent.price}
                  </div>
                </div>

                <div className="scrollColumn">
                  <div className="scrollItem">
                    <img src="https://demo.creativeitem.com/academy/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_201689235749.jpg" alt="" />
                  </div>
                  <div className="boxText">
                    {box.topContent.text}
                  </div>
                  <div className="boxPrice">
                    {box.topContent.price}
                  </div>
                </div>


                </div>
              <div className="boxBottom">
                <button className="purchaseButton">{box.bottomContent}</button>
              </div>          
                </div>
          ))}
        </div>
        {/* --------------------- */}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CourseBundle;
