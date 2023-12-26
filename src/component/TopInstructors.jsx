import React from "react";
import "./TopInstructors.css";

const TopInstructors = () => {
  return (
    <div className="TopInstructors">
      <div className="Instructors">
        <div className="InsOne">
          <h1>
            Top instructors{" "}
            <span>
              <img
                src="https://demo.creativeitem.com/academy/assets/frontend/default-new/image/h-1-shape.png"
                alt=""
              />
            </span>
          </h1>
          <p>They efficiently serve large number of students on our platform</p>
          <div className="InsTop">
            <div className="one">
              <img
                src="https://demo.creativeitem.com/academy/uploads/user_image/optimized/25a108b3db216778ad067ba41708b0c3.jpg"
                alt=""
              />
              <div className="social-icons">
                <a href="/">
                  <i class="ri-facebook-fill"></i>
                </a>
                <a href="/">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="/">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
              
            </div>
           
           
            <div className="one">
              <img
                src="https://demo.creativeitem.com/academy/uploads/user_image/optimized/aa6c72f7b21f21498acda57322b2a052.jpg"
                alt=""
              />
              <div className="social-icons">
                <a href="/">
                  <i class="ri-facebook-fill"></i>
                </a>
                <a href="/">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="/">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="InsBottom mt-4">
            <p className="ms-2">Mathew Anderson</p>
            <p className="me-5">John Doe</p>
          </div>
        </div>

        <div className="InsTwo">
          <h1>
            Think more clearly
            <span>
              <img
                src="https://demo.creativeitem.com/academy/assets/frontend/default-new/image/h-1-shape.png"
                alt=""
              />
            </span>
          </h1>
          <p>Gather your thoughts, and make your decisions clearly</p>
        </div>

        <div className="InsThree">
          <div className="InsBox1">
            <div className="BoxLeft">
              <img
                src="https://demo.creativeitem.com/academy/uploads/system/motivations/j5RFaPEOmiB6vIpkYyeg.png"
                alt=""
              />
            </div>
            <div className="BoxRight">
              <div className="number">1</div>
              <div className="text">
                <h1>"Unleashing Your Inner Champion"</h1>
                <span></span>
                <p>
                  Embrace your untapped potential, push your limits, and unlock
                  the champion within you. This motivational title encourages
                  you to tap into your inner strength, overcome obstacles, and
                  strive for excellence in all areas of your life.
                </p>
              </div>
            </div>
          </div>
          <div className="InsBox2">
            <div className="BoxLeft">
              <div className="number">3</div>
              <div className="text">
                <h1>"Embracing the Journey of Growth"</h1>
                <span></span>
                <p>
                  Life is a constant journey of growth and self-improvement.
                  This motivational title reminds you to embrace challenges,
                  learn from failures, and celebrate successes along the way.
                  Embrace the journey of personal and professional development.
                </p>
              </div>
            </div>
            <div className="BoxRight">
              <img
                src="https://demo.creativeitem.com/academy/uploads/system/motivations/KdG0F96izHqPESACT3ye.png"
                alt=""
              />
            </div>
          </div>
          <div className="InsBox1">
            <div className="BoxLeft">
              <img
                src="https://demo.creativeitem.com/academy/uploads/system/motivations/Q4eZP09Ar5zEcifsKp2h.png"
                alt=""
              />
            </div>
            <div className="BoxRight">
              <div className="number">4</div>
              <div className="text">
                <h1>"Igniting the Spark of Possibility"</h1>
                <span></span>
                <p>
                  Within each of us lies a spark of possibility waiting to be
                  ignited. This motivational title inspires you to dream big,
                  believe in yourself, and pursue your passions with unwavering
                  determination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --------------- */}
      </div>
    </div>
  );
};

export default TopInstructors;
