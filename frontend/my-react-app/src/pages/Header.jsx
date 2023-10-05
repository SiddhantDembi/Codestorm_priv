// import { useState } from "react";
import "../Header.css";
import searchIcon from "../assets/searchIcon.svg";
// import signoutIcon from "../assets/signoutIcon.svg";
// import profileIcon from "../assets/profileIcon.svg";
// import bellIcon from "../assets/bellIcon.svg";
// import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Header2() {
  // const [popup, setPopup] = useState(false);

  const navigate = useNavigate();
  const login =()=>{
    navigate('./Login');
  }

  return (
    <>
    <header>
      <p>Career Booster</p>
      <form id="header-form">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <img id="search-icon" src={searchIcon} />
        </button>
      </form>
      <ul>
        <li><a href="/home1">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <button className="btn" onClick={login}>
        Login/Signup
      </button>
      {/* <div id="user-util">
        <span>
          <img src={bellIcon} />
        </span>
        <a onClick={() => setPopup(!popup)}>SD</a>
      </div>
      {popup && (
        <div className="popup">
          <p>
            <img src={profileIcon} />
            <span>View Profile</span>
          </p>
          <p id="signout-btn">
            <img src={signoutIcon} />
            <span>Sign Out</span>
          </p>
         </div>
       )} */}
       {/* <BrowserRouter>
        { (
          <Routes>
            <Route
              path="/"
              element={
                <><Header/><Home/><Footer/></>
              }
              />
            <Route
              path="/about"
              element={
                <><Header /><About/><Footer/></>
              }
              />
            <Route
              path="/contact"
              element={
                <><Header /><Contact/><Footer/></>
              }
              />
          </Routes>
        )}
      </BrowserRouter> */}
    </header>
    </>
  );
 }