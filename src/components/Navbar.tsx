import React, { useState } from "react";
import "../styles/Navbar.scss";
import { Switch } from "./Switch";

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
  
    const hamburgerMenu = () => {
      setHamburger(!hamburger);
    };
  
    const pageUp = () => {
      window.scrollTo({ top: (0), behavior: "smooth" });
    };
  
    /* const home = () => {
      window.scrollTo({ top: (href="#Home"), behavior: "smooth" });
    }; */
  
    return (
      <>
      <nav>
        <h3 onClick={pageUp} className="logo">
          JaviiAzagra
        </h3>

        <ul>
          <li>
            <a onClick={pageUp} /* href="#Home" */>Home</a>
          </li>

          <li>
            <a href="#About">About</a>
          </li>

          <li>
            <a href="#Projects">Projects</a>
          </li>

          <li>
            <a href="#Experience">Experience</a>
          </li>

          <li>
            <a href="#Contact">Contact</a>
          </li>

          {/* <li className="switchnavbar">
            <Switch/>
          </li> */}

          <li onClick={() => hamburgerMenu()}>
            <i className="mobile-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </i>
          </li>
        </ul>
      </nav>

      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <i className="mobile-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </i>
          
        </span>

        <ul>
          <li onClick={() => hamburgerMenu()}>
            <a onClick={pageUp}>Home</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#About">About</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#Projects">Projects</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#Experience">Experience</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#Contact">Contact</a>
          </li>

        </ul>
      </div>
    </>
    );
  };

export default Navbar