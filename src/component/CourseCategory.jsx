import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AllCourses.css";
import { coursesData } from "./CourseCategoryData";
import { useEffect } from "react";
import Navbar from "./Navbar";

const CourseCategory = () => {
  const [item, setItem] = useState(coursesData);
  const filterItem = (priceItem) => {
    const updateditem = coursesData.filter((curElem) => {
      return curElem.id == priceItem.toString();
    });
    console.log(updateditem);
    setItem(updateditem);
  };

  const itemsPerPage1 = 6;
  const itemsPerPage2 = 7;
  const [currentPage, setCurrentPage] = useState(1);

  // const currentItems =
  //   currentPage === 1
  //     ? coursesData.slice(0, itemsPerPage1)
  //     : coursesData.slice(itemsPerPage1, itemsPerPage1 + itemsPerPage2);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
    <Navbar setItem={setItem} />
        <div className="COURSEBUNDLE">
          <div className="CourseBundle">
            <div className="CourseBundleTop">
              <div className="Top">
                <div className="text">
                  <p>
                    <a href="/">
                      <i className="ri-home-3-fill"></i> Home
                    </a>
                    <i
                      style={{ fontSize: "2vmax" }}
                      className="ri-arrow-right-s-line"
                    ></i>
                    <span>Courses</span>
                  </p>
                  <h1>Courses </h1>
                </div>
                <div className="Book">
                  <img
                    src="https://demo.creativeitem.com/academy/assets/frontend/default-new/image/brd-book.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    <div
      className=" d-flex justify-content-center mt-5"
      style={{ width: "100%" }}
    >
      <div className="shadow p-3 " style={{ width: "23%" }}>
        <div className="">
          <h2>Categories</h2>

          <div
            onClick={() => setItem(coursesData)}
            className="row d-flex align-items-center mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-1 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">All category</span>
            <span className="col">(16)</span>
          </div>
          <div
            onClick={() => filterItem("2")}
            className="row d-flex align-items-center mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-1 ms-2"
              name="gender"
              value="male"
            />{" "}
            <span className="col-9">Web Design</span>
            <span className="col">(5)</span>
          </div>
          <div
            onClick={() => filterItem("3")}
            className="row d-flex align-items-center mt-3 ms-2"
          >
            <input
              type="radio"
              className="mt-1 col-1 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Responsive Design</span>(0)
            <span className="col"></span>
          </div>
          <div
            onClick={() => filterItem("4")}
            className="row d-flex align-items-center mt-3 ms-2"
          >
            <input
              type="radio"
              className="mt-1 col-1 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9"> WordPress Theme</span>
            <span className="col">(1)</span>
          </div>
          <div
            onClick={() => filterItem("5")}
            className="row d-flex align-items-center mt-3 ms-2"
          >
            <input
              type="radio"
              className="mt-1 col-1 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Bootstrap</span>
            <span className="col">(1)</span>
          </div>
          <div
            onClick={() => filterItem("6")}
            className="row d-flex align-items-center mt-3 ms-2"
          >
            <input
              type="radio"
              className="mt-1 col-1 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">HTML & CSS</span>
            <span className="col">(3)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className="row d-flex align-items-center mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-1 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Graphic Design </span>
            <span className="col">(4)</span>
          </div>
          <div
            onClick={() => filterItem("8")}
            className="row d-flex align-items-center mt-3 ms-3"
          >
            <input
              type="radio"
              className="mt-1 col-1 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Photoshop</span>
            <span className="col">(2)</span>
          </div>
          <div
            onClick={() => filterItem("9")}
            className="row d-flex align-items-center mt-3 ms-3"
          >
            <input
              type="radio"
              className="mt-1 col-1 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Adobe Illustrator</span>
            <span className="col">(1)</span>
          </div>
          <li className="nav-item dropdown mt-4 ms-2" style={{ listStyle: "none" }}>
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Show more
            </a>
            <ul className="dropdown-menu">
            <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Drawing </span>
            <span className="col-1">(4)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Logo Design </span>
            <span className="col-1">(4)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Digital Art </span>
            <span className="col-1">(4)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">User Experience </span>
            <span className="col-1">(4)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">User Experience Design </span>
            <span className="col-1">(4)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Mobile App Design </span>
            <span className="col-1">(4)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">User Interface </span>
            <span className="col-1">(4)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Design Thinking </span>
            <span className="col-1">(4)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Figma </span>
            <span className="col-1">(4)</span>
          </div>
          <div
            onClick={() => filterItem("7")}
            className=" mt-3"
          >
            <input
              type="radio"
              className="mt-1 col-2 ms-2"
              name="gender"
              value="male"
            />
            <span className="col-9">Prototyping </span>
            <span className="col-1">(4)</span>
          </div>
            
            </ul>
          </li>
        </div>
        <h2 className="mt-5 fs-4">Price</h2>

        <div onClick={() => setItem()}>
          <input
            type="radio"
            className="mt-3 me-3 "
            name="gender"
            value="male"
          />{" "}
          All
        </div>
        <div>
          <input
            onClick={() => filterItem("")}
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />{" "}
          Free
        </div>
        <div>
          <input
            onClick={() => filterItemForArray([""])}
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />{" "}
          Paid
        </div>
        <h2 className="mt-5 fs-4">Level</h2>

        <div onClick={() => setItem(ebookkids)}>
          <input
            type="radio"
            className="mt-3 me-3 "
            name="gender"
            value="male"
          />{" "}
          All
        </div>
        <div>
          <input
            onClick={() => filterItem("")}
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />{" "}
          Free
        </div>
        <div>
          <input
            onClick={() => filterItemForArray([""])}
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />{" "}
          Paid
        </div>
        <h2 className="mt-5 fs-4">Language</h2>

        <div onClick={() => setItem()}>
          <input
            type="radio"
            className="mt-3 me-3 "
            name="gender"
            value="male"
          />{" "}
          All
        </div>
        <div>
          <input
            onClick={() => filterItem("")}
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />{" "}
          Free
        </div>
        <div>
          <input
            onClick={() => filterItemForArray([""])}
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />{" "}
          Paid
        </div>
        <li className="nav-item dropdown " style={{ listStyle: "none" }}>
          <a
            className="nav-link dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            MORE
          </a>
          <ul className="dropdown-menu">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <h6 className="dropdown-item">Our Service</h6>
              </li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <h6 className="dropdown-item">Our Process</h6>
              </li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <h6 className="dropdown-item">Our Process</h6>
              </li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <h6 className="dropdown-item">Our Process</h6>
              </li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <h6 className="dropdown-item">Our Process</h6>
              </li>
            </Link>
          </ul>
        </li>

        <h2 className="mt-5 fs-4">Ratings</h2>

        <div>
          <input
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />{" "}
          All
        </div>
        <div>
          <input
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
        </div>
        <div>
          <input
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
        </div>
        <div>
          <input
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
        </div>
        <div>
          <input
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill fs-4 ms-1 text-secondary text-opacity-50"></i>
        </div>
        <div>
          <input
            type="radio"
            className="mt-3 me-3"
            name="gender"
            value="male"
          />
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
          <i className="ri-star-fill text-warning fs-4 ms-1"></i>
        </div>
      </div>
      <div className="" style={{ width: "70%" }}>
        <div className="AllCourses">
          <div className="Courses">
            <div className="CoursesRight">
              <div className="CousesRightTop">
                <div className="left">
                  <div className="icons">
                    <i className="ri-menu-line">
                      <div className="tooltip">List View </div>
                    </i>
                    <i
                      style={{
                        background: "none",
                        color: "#00000065",
                        border: "1px solid #00000031",
                        borderRadius: "2px",
                      }}
                      className="ri-grid-line"
                    >
                      <div className="tooltip">Grid View</div>
                    </i>
                    <i
                      style={{
                        background: "none",
                        color: "#00000065",
                        border: "1px solid #00000031",
                        borderRadius: "2px",
                      }}
                      className="ri-loop-right-line"
                    >
                      <div className="tooltip">Reset</div>
                    </i>
                    <p>Showing 9 Of 16 Results</p>
                  </div>
                  <div className="right">
                    <div className="dropdown">
                      <button
                        className=" dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Newly published
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/">
                            Highest rating
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Lowest price
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Highest price
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Discounted
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="CourseContent">
                {item.map((course, index) => {
                  if (currentPage == 1 && index < 6) {
                    return (
                      <div className="ContentBox" key={course.id}>
                        <div className="LEFT">
                          <img src={course.imageUrl} alt="" />
                          <div className="like-icon">
                            <i className="ri-heart-fill"></i>
                          </div>
                          <div className="button">Advanced</div>
                        </div>
                        <div className="RIGHT">
                          <div className="top">
                            <div className="le">
                              <h3>{course.title}</h3>
                              <p>
                                0 <i className="ri-star-line"></i> (0 Reviews){" "}
                                <i className="ri-closed-captioning-line"></i>{" "}
                                English
                              </p>
                            </div>
                            <div className="ri">
                              <button>
                                <img
                                  src="https://demo.creativeitem.com/academy/assets/frontend/default-new/image/compare.png"
                                  alt=""
                                />{" "}
                                Compare
                              </button>
                            </div>
                          </div>
                          <div className="medium">{course.pera}</div>
                          <div className="bottom">
                            <div className="lef">
                              <h1>{course.price}</h1>
                            </div>
                            <div className="righ">
                              <p>
                                <i className="ri-list-unordered"></i> 0 Lessons{" "}
                              </p>
                              <p>
                                {" "}
                                <i className="ri-time-line"></i> 00:00:00 Hours
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (currentPage == 2 && index >= 6) {
                    return (
                      <div className="ContentBox" key={course.id}>
                        <div className="LEFT">
                          <img src={course.imageUrl} alt="" />
                          <div className="like-icon">
                            <i className="ri-heart-fill"></i>
                          </div>
                          <div className="button">Advanced</div>
                        </div>
                        <div className="RIGHT">
                          <div className="top">
                            <div className="le">
                              <h3>{course.title}</h3>
                              <p>
                                0 <i className="ri-star-line"></i> (0 Reviews){" "}
                                <i className="ri-closed-captioning-line"></i>{" "}
                                English
                              </p>
                            </div>
                            <div className="ri">
                              <button>
                                <img
                                  src="https://demo.creativeitem.com/academy/assets/frontend/default-new/image/compare.png"
                                  alt=""
                                />{" "}
                                Compare
                              </button>
                            </div>
                          </div>
                          <div className="medium">{course.pera}</div>
                          <div className="bottom">
                            <div className="lef">
                              <h1>{course.price}</h1>
                            </div>
                            <div className="righ">
                              <p>
                                <i className="ri-list-unordered"></i> 0 Lessons{" "}
                              </p>
                              <p>
                                {" "}
                                <i className="ri-time-line"></i> 00:00:00 Hours
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>

              {/* ------------ */}
              <div className="pagination">
                <button onClick={prevPage}>
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                <button onClick={() => paginate(1)}>1</button>
                <button onClick={() => paginate(2)}>2</button>
                <button onClick={nextPage}>
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </div>
              {/* --------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseCategory;
