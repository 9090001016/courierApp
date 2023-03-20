import React from "react";
import "../css/main.css";
import img1 from "../image/image 1.png";
import img2 from "../image/image 2.png";
import banner1 from "../image/banner1.png";
import banner2 from "../image/banner2.png";
import banner3 from "../image/banner3.png";

const HomePage = () => {
  return (
    <div className="landing_div">

      <div className="homediv">
        <div className="main_div">
          <div className="left_div">
            <h3>Simplify your courier services with</h3>
            <h2>Adrasti.</h2>
            <p>
              With an intuitive platform, Adrasti helps you select the best
              courier partner, make easy payments, track your order and get
              insightful reports.
            </p>
            <div className="emailDiv">
              <div className="email_btn">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="input_btn"
                />
              </div>
              <div className="submit_btn">
                <button className="save_btn">Submit</button>
              </div>
            </div>
          </div>
          <div className="right_div">
            <div className="first_img">
              <img src={img2} alt="" className="image1" />
            </div>
            <div className="second_img">
              <img src={img1} alt="" className="image2" />
            </div>
          </div>
        </div>
      </div>

      <div className="description_section">
        <div className="first_div">
          <div className="image_side">
            <img src={banner1} alt="" className="image_1" />
          </div>
          <div className="para_side">
            <h3>Flexible</h3>
            <h3>courier partners.</h3>
            <p>
              With Adrasti, you can choose the best courier partner based on
              your location and delivery needs. We have partnered with premier
              logistics companies to provide you with a seamless courier
              experience.
            </p>
          </div>
        </div>
        <div className="second_div">
          
          <div className="para_side">
            <h3>Smooth payments.</h3>
            <p>
              Make easy payments for your courier services through our platform.
              Whether it’s credit card, net banking, or UPI, we’ve got you
              covered.
            </p>
          </div>
          <div className="image_side">
          <img src={banner2} alt="" className="image_2" />
          </div>
        </div>

        <div className="third_div">
          <div className="image_side">
          <img src={banner3} alt="" className="image_1" />
          </div>
          <div className="para_side">
            <h3>Real-time tracking.</h3>
            <p>
              Say goodbye to the uncertainty of courier shipments. With Adrasti,
              you can track your orders in real-time and stay updated on its
              delivery status.
            </p>
          </div>
        </div>
      </div>

      <div className="horizental_section">
        <div className="line">
          
        </div>
        <br />

        <div className="line">
          
        </div>

      </div>
    </div>
  );
};

export default HomePage;
