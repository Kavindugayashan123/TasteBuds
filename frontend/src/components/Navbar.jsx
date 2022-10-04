import React from "react";

const Navbar = () => {
  return (
    <div className="n-container">
      <div className="n-row">
        <div className="n-col">
          <span className="n-email">nadiya@gmail.com</span>
        </div>
        <div className="socials">
          <img src="/images/social/facebook.png" alt=""></img>
          <img src="/images/social/instagram.png" alt=""></img>
          <img src="/images/social/twitter.png" alt=""></img>
          <img src="/images/social/youtube.png" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
