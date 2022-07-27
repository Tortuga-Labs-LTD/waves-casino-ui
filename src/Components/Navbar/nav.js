import React, { Fragment, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import "../Dropdown/dropdown";
import AuthContext from "../Authentication/Auth";

import GamesDropdown, { UserDropdown } from "../Dropdown/dropdown";

// import { NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../assets/navlogo.svg";

function Navbar() {
  const { user } = useContext(AuthContext);

  // Games dropdown state hooks code
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // User dropdown state hooks code
  const [showUser, setShowUser] = useState(false);
  const showUserDropdown = () => {
    if (window.innerWidth < 960) {
      setShowUser(false);
    } else {
      setShowUser(true);
    }
  };
  const hideUserDropdown = () => {
    if (window.innerWidth < 960) {
      setShowUser(false);
    } else {
      setShowUser(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" exact className="nav-logo" onClick={closeMobileMenu}>
            <img src={logo} className="logo" alt="Nav Logo" />
          </NavLink>

          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          {user.isAuth ? (
            <Fragment>
              <li
                className="nav-mobuser"
                onClick={() => setShowUser(!showUser)}
              >
                <NavLink
                  exact
                  to="#"
                  activeClassName="active"
                  className="nav-links "
                  onClick={closeMobileMenu}
                >
                  <FaUserCircle className="user-icon" />
                  <IoMdArrowDropdown className="arrow" />
                </NavLink>
                {showUser && <UserDropdown />}
              </li>
            </Fragment>
          ) : null}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                exact
                to="/Games"
                activeClassName="active"
                className="nav-links gamelink"
                onClick={closeMobileMenu}
              >
                Games <IoMdArrowDropdown className="arrow" />
              </NavLink>
              {dropdown && <GamesDropdown />}
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/Roulette"
                activeClassName="active"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Play Roulette
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/CaribbeanStudPoker"
                activeClassName="active"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Play Poker
              </NavLink>
            </li> */}
            {user.isAuth ? (
              <Fragment>
                <div className="nav-right">
                  <li
                    className="nav-rightuser mr-0"
                    onMouseEnter={showUserDropdown}
                    onMouseLeave={hideUserDropdown}
                  >
                    <NavLink
                      exact
                      to="#"
                      activeClassName="active"
                      className="nav-links "
                      onClick={closeMobileMenu}
                    >
                      <FaUserCircle className="user-icon" />
                      <IoMdArrowDropdown className="arrow" />
                    </NavLink>
                    {showUser && <UserDropdown />}
                  </li>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <li className="nav-rightbtn">
                  <NavLink
                    exact
                    to="/Register"
                    activeClassName="active"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </NavLink>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
