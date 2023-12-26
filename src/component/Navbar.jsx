import React from "react";
import academy from "../assets/Images/acadmy.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { coursesData } from "./CourseCategoryData";
import { ebookkids } from "./EbookKidsdata";

function Navbar({setItem}) {

  const filterItems = (priceItem)=>{
    const updateditem = ebookkids.filter((curElem)=>{
      return curElem.price === priceItem;
    })
    setItem(updateditem)
  }
  const filterItem = (priceItem) => {
    const updateditem = coursesData.filter((curElem) => {
      return curElem.id == priceItem.toString();
    });
    console.log(updateditem);
    setItem(updateditem);
  };
  return (
    <>
      <div
        className="w-100 bg-primary d-flex justify-content-center align-items-center"
        style={{ position: "fixed", zIndex: "999" }}
      >
        <nav className="w-100 navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid ">
            <img src={academy} alt="" width={200} height={50} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                <li className="nav-item dropdown d-flex justify-content-evenly align-items-center">
                  <Link className="nav-link active" to="/" role="button">
                    {" "}
                    HOME
                  </Link>
                </li>
                <li className="nav-item dropdown d-flex justify-content-evenly align-items-center">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    COURSES
                  </a>
                  <ul className="dropdown-menu">
                    <Link  onClick={() => filterItem("2")} to="/courses" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">WEB DESIGN</h6>
                      </li>
                    </Link>
                    <Link  onClick={() => filterItem("3")} to="/courses" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">GRAPHIC DESIGN</h6>
                      </li>
                    </Link>
                    <Link  onClick={() => filterItem("4")} to="/courses" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">USER EXPERIENCE</h6>
                      </li>
                    </Link>
                    <Link  onClick={() => filterItem("5")} to="/courses" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">INTERIOR DESIGN</h6>
                      </li>
                    </Link>
                    <Link  onClick={() => filterItem("6")} to="/courses" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">3D AND ANIMATION</h6>
                      </li>
                    </Link>
                    <Link  onClick={() => filterItem("8")} to="/courses" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">FASHION</h6>
                      </li>
                    </Link>
                    <Link  onClick={() => filterItem("1")} to="/courses" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">FRONTEND DEVELOPMENT</h6>
                      </li>
                    </Link>
                    <Link onClick={() => setItem(coursesData)} to="/courses" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">ALL COURSES</h6>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="nav-item dropdown d-flex justify-content-evenly align-items-center">
                  <Link
                    className="nav-link active"
                    to="/coursebundle"
                    role="button"
                  >
                    COURSE BUNDLE
                  </Link>
                </li>
                <li className="nav-item dropdown d-flex justify-content-evenly align-items-center">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EBOOK
                  </a>
                  <ul className="dropdown-menu">
                    <Link onClick={()=>setItem(ebookkids)} to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">All Category</h6>
                      </li>
                    </Link>
                    <Link onClick={()=>filterItems("$30")} to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Kids</h6>
                      </li>
                    </Link>
                    <Link onClick={()=>filterItems("Free")} to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Science Fiction & Fantasy</h6>
                      </li>
                    </Link>
                    <Link to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Politics</h6>
                      </li>
                    </Link>
                    <Link to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Law and Justice</h6>
                      </li>
                    </Link>
                    <Link to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Cooking & Foods</h6>
                      </li>
                    </Link>
                    <Link to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Motivation</h6>
                      </li>
                    </Link>
                    <Link to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Freelancing & Outsourcing</h6>
                      </li>
                    </Link>
                    <Link onClick={()=>filterItems("$29")} to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Programming Language</h6>
                      </li>
                    </Link>
                    <Link to="/ebook" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Education</h6>
                      </li>
                    </Link>
                  </ul>
                </li>

                <li className="nav-item dropdown d-flex justify-content-evenly align-items-center">
                  <Link className="nav-link active" to="/" role="button">
                    FIND A TUTOR
                  </Link>
                </li>

               
                <li className="nav-item dropdown d-flex justify-content-evenly align-items-center">
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
                        <h6 className="dropdown-item">Preview Homepage-1</h6>
                      </li>
                    </Link>
                    <Link to="/homepage2" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Preview Homepage-2</h6>
                      </li>
                    </Link>
                    <Link to="/homepage3" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Preview Homepage-3</h6>
                      </li>
                    </Link>
                    <Link to="/homepage4" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Preview Homepage-4</h6>
                      </li>
                    </Link>
                    <Link to="/homepage5" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Preview Homepage-5</h6>
                      </li>
                    </Link>
                    <Link to="/homepage6" style={{ textDecoration: "none" }}>
                      <li>
                        <h6 className="dropdown-item">Preview Homepage-6</h6>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="nav-item dropdown d-flex justify-content-evenly align-items-center ">
                  <Link className="nav-link active" to="/" role="button">
                    <input
                      type="text"
                      placeholder="Search"
                      className="rounded"
                    />
                  </Link>
                </li>
                <li className=" nav-item dropdown d-flex justify-content-evenly align-items-center  ">
                  <Link className="nav-link active" to="/cart" role="button">
                    <i className="ri-shopping-cart-2-fill fs-3"></i>
                  </Link>
                </li>
                <li className=" nav-item dropdown d-flex justify-content-evenly align-items-center  ">
                  <Link className="nav-link active" to="/login" role="button">
                    LOGIN
                  </Link>
                </li>
                <li className=" nav-item dropdown d-flex justify-content-evenly align-items-center  ">
                  <Link className="nav-link active" to="/joinnow" role="button">
                    JOIN NOW
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
