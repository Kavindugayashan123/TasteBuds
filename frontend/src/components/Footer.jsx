import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="f-container">
      <div className="f-row">
        <div className="f-col">
          <img src="/images/logo/logo.png" alt="" className="logos"/>
          <p>Best Food Collection in World! you can get all kind of foods in one place ... Hurry up Now!</p>
        </div>
        <div className="f-col">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="f-col">
          <h2>Category</h2>
          <ul>
            <li>
              <NavLink to="/">Breakfast</NavLink>
            </li>
            <li>
              <NavLink to="/">Lunch</NavLink>
            </li>
            <li>
              <NavLink to="/">Dinner</NavLink>
            </li>
          </ul>
        </div>
        <div className="f-col">
            <h2>Stay in touch with us</h2>
          <div className="socials">
            <a href="/">
              <img src="/images/social/facebook.png" alt=""></img>
            </a>
            <a href="/">
              <img src="/images/social/instagram.png" alt=""></img>
            </a>
            <a href="/">
              <img src="/images/social/twitter.png" alt=""></img>
            </a>
            <a href="/">
              <img src="/images/social/youtube.png" alt=""></img>
            </a>
          </div>
        </div>
      </div>
      <div className="f-copyrow">
<p>&copy; 2022. All Rights Reserved, Powered by NIBM.</p>
      </div>
    </div>
  );
};

export default Footer;
