import { useState } from "react";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://template.canva.com/EAGRMiB2YSc/1/0/800w-_QP2AMKVQJM.jpg"
          alt="logo"
        />
      </div>

      <div>
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName = "Logout";
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
