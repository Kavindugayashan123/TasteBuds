import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import "../styles/lgForm.css";

const LGForm = () => {
  return (
    <div className="ccc">
      <div className="containers">
        <div className="img-c">
          <img src="/images/logo/logo.png" className="avatar"></img>
        </div>
        <form action="" method="post">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            id="uname"
            placeholder="Enter Username"
            name="uname"
            required
          ></input>

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          ></input>

          <button
            className="l-button"
            type="submit"
            onClick={event =>  window.location.href='/'}
            value="Click"
          >
            Login
          </button>
          <button className="l-button">Cancel</button>
    
        </form>
      </div>
    </div>
  );
};

export default LGForm;
