import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserHeader() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  const [checked, setChecked] = useState(currentTheme === 'dark');
  const navigate = useNavigate();

  function changeTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setChecked(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setChecked(false);
    }
  }

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark stroke">
          <h1>
            <Link className="navbar-brand" to="/studenthome">
              <span className="fa fa-diamond"></span>
              Assignment Space
              <span className="logo">Journey to success</span>
            </Link>
          </h1>

          <button
            className="navbar-toggler  collapsed bg-gradient"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-lg-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/StudentHome">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/UserAbout">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/UserContact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="search-right">
              <a href="#search" title="search">
                <span className="fa fa-search" aria-hidden="true"></span>
              </a>
              <div id="search" className="pop-overlay">
                <div className="popup">
                  <form
                    action="error.html"
                    method="GET"
                    className="search-box"
                  >
                    <input
                      type="search"
                      placeholder="Search"
                      name="search"
                      required="required"
                      autoFocus=""
                    />
                    <button type="submit" className="btn">
                      <span
                        className="fa fa-search"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </form>
                </div>
                <a className="close" href="#close">
                  &times;
                </a>
              </div>
            </div>

            {/* Notification icon */}
            <div className="notification-icon">
              <Link to="/notifications">
                <span className="fa fa-bell"></span>
              </Link>
            </div>

            {/* Profile icon */}
            <div className="top-quote text-center">
              <Link to="/question" style={{ fontSize: '24px', color: 'white' }}>
                <span className="fa fa-user-circle"></span>
              </Link>
            </div>
          </div>

          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" checked={checked} onChange={changeTheme} />
                  <div className="mode-container py-1">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default UserHeader;