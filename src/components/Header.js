import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const handleLogin = () => {
    setBtnNameReact((prev) =>
      prev === "Login" ? "Logout" : "Login"
    );
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            className="logo"
            src="https://template.canva.com/EAGRMiB2YSc/1/0/800w-_QP2AMKVQJM.jpg"
            alt="Food App Logo"
          />
        </Link>
      </div>

      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <button
              className="login"
              onClick={handleLogin}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;