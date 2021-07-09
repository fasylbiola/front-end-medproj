import React from "react";
import { Link } from "react-router-dom";

class IndexHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__content header__content--fluid-width">
          <div className="header__logo-title">
            medi<span>kit</span>
          </div>
          <nav className="header__menu">
            <ul>
              <li>
                <a className="selected header-link" href="#intro">
                  ABOUT US
                </a>
              </li>
              <li>
                <Link to="/dashboard" className="header-link">
                  DASHBOARD
                </Link>
              </li>
              <li className="menu-item-has-children">
                <a href="#morefeatures" className="header-link">
                  FEATURES
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#about" className="header-link">
                      OUR PRODUCTS
                    </a>
                  </li>
                  <li>
                    <a href="#about2" className="header-link">
                      HOW IT WORKS
                    </a>
                  </li>
                  <li>
                    <a href="#clients" className="header-link">
                      OUR CLIENTS
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="header-link">
                      TESTIMONIALS
                    </a>
                  </li>
                  <li>
                    <a href="#support" className="header-link">
                      SUPPORT
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="header__btn header__btn--signup modal-toggle"
                data-openpopup="signuplogin"
                data-popup="signup"
              >
                <a href="#">GET STARTED</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default IndexHeader;
