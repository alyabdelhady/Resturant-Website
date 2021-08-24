import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);

  const hide = () => {
    setClick(!click);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light  ">
      <div class="container">
        <Link class="navbar-brand" to="/" onClick={hide}>
          <i class="fas fa-utensils"></i> FOOD
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menubar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={hide}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class={
            click
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse hide"
          }
          id="menubar"
        >
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item ">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/"
                onClick={hide}
              >
                HOME
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT
              </Link>
              <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <Link class="dropdown-item" to="/about" onClick={hide}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/menu" onClick={hide}>
                    MENU
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to="/chefs" onClick={hide}>
                    OUR CHEFS
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/reservation" onClick={hide}>
                RESERVATION
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="pageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PAGES
              </Link>
              <ul class="dropdown-menu" aria-labelledby="pageDropdown">
                <li>
                  <Link class="dropdown-item" to="/soon" onClick={hide}>
                    COOMING SOON
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/notFound" onClick={hide}>
                    404 PAGE
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to="/login" onClick={hide}>
                    LOGIN FORM
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/regesrtation" onClick={hide}>
                    REGESTRATION FORM
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/portfolio" onClick={hide}>
                PORTFOLIO
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="portfolioDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                BLOG
              </a>
              <ul class="dropdown-menu" aria-labelledby="portfolioDropdown">
                <li>
                  <Link class="dropdown-item" to="/blog" onClick={hide}>
                    BLOG WITH LEFT SIDEBAR
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/rightSidebar" onClick={hide}>
                    BLOG WITH RIGHT SIDEBAR
                  </Link>
                </li>

                <li>
                  <Link class="dropdown-item" to="/articles" onClick={hide}>
                    ARTICLES CATEGORY BLOG
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact" onClick={hide}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
