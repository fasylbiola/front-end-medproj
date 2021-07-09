import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const usernameOrEmail = JSON.parse(localStorage.getItem("userInfo"));
  const { first_name, last_name, name } = useSelector(
    (state) => state.userDescription
  );
  useEffect(() => {
    if (usernameOrEmail !== "") {
      dispatch(getUser(usernameOrEmail));
    }
  }, [dispatch]);
  return (
    <header className="content-header">
      <div className="sidebar-resize"></div>
      <div class="mobile-menu">
        <div class="st-burger-icon st-burger-icon--medium">
          <span></span>
        </div>
      </div>
      <div class="content-header__user content-header__dropdown">
        <div
          class="content-header__user-avatar content-header__dropdown-activate"
          data-dropdown="userdropdown"
        >
          <div class="content-header__user-thumb">
            <img src="images/avatar-2.jpg" alt="" title="" />
          </div>
          <span class="content-header__user-name">
            {first_name !== undefined ? (
              <p>{`${first_name},${last_name}`}</p>
            ) : (
              <p>{name}</p>
            )}{" "}
            {(first_name, last_name)}
          </span>
        </div>
        <nav
          class="dropdown-menu dropdown-menu--header dropdown-menu--user-menu"
          id="userdropdown"
        >
          <h3 class="dropdown-menu__subtitle">User menu</h3>
          <ul>
            <li>
              <a href="#">My profile</a>
            </li>
            <li>
              <a href="#">Activity</a>
            </li>
            <li>
              <a href="#">Switch account</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li class="logout">
              <a href="#" class="button button--general button--red-border">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="content-header__notifications content-header__dropdown">
        <div
          class="content-header__notifications-icon content-header__icon content-header__dropdown-activate"
          data-dropdown="notificationsdropdown"
        >
          <img
            src="images/icons/icons-24-gray/notifications.png"
            alt=""
            title=""
          />
          <span class="content-header__icon-bubble">6</span>
        </div>

        <nav
          class="dropdown-menu dropdown-menu--header dropdown-menu--notifications-menu"
          id="notificationsdropdown"
        >
          <h3 class="dropdown-menu__subtitle">
            You have <strong>6</strong> notifications
          </h3>
          <ul>
            <li class="d-flex justify-sb">
              <span class="important">IMPORTANT</span>Michael D. kidney surgery{" "}
              <b class="task-time">today</b>
            </li>
            <li class="d-flex justify-sb">
              <span class="important">IMPORTANT</span>FLU Alert report generated{" "}
              <b class="task-time">today</b>
            </li>

            <li class="d-flex justify-sb">
              <span>
                Meeting with <strong>Dr. Joshua</strong>{" "}
              </span>{" "}
              <b class="task-time">tomorrow</b>
            </li>
            <li class="d-flex justify-sb">
              <span>
                Remember to create prescriptions for{" "}
                <strong>Alexander P.</strong>
              </span>{" "}
              <b class="task-time">tomorrow</b>
            </li>
            <li class="d-flex justify-sb">
              <span>
                <strong>Jada Sacks</strong> canceled the appointment at
                Cardiology, Dr. Michael V.{" "}
              </span>{" "}
              <b class="task-time">24 jan, 19</b>
            </li>
            <li class="d-flex justify-sb">
              <span>
                Sarah D. registered as new patient of{" "}
                <strong>Dr. George</strong> at Dermatology{" "}
              </span>{" "}
              <b class="task-time">28 jan, 19</b>
            </li>
            <li class="view-all">
              <a href="#" class="button button--general button--blue-border">
                View all
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="content-header__quicklinks content-header__dropdown">
        <div
          class="content-header__quicklinks-icon content-header__icon content-header__dropdown-activate"
          data-dropdown="quicklinksdropdown"
        >
          <img src="images/icons/icons-24-gray/submenu.png" alt="" title="" />
        </div>
        <nav
          class="dropdown-menu dropdown-menu--header dropdown-menu--quicklinks-menu"
          id="quicklinksdropdown"
        >
          <h3 class="dropdown-menu__subtitle">Quick links</h3>
          <ul>
            <li>
              <a href="#">Add new doctor</a>
            </li>
            <li>
              <a href="#">Add new patient</a>
            </li>
            <li>
              <a href="#">Generate reports</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="mobile-submenu"></div>

      <nav class="content-header__menu">
        <ul>
          <li
            class="appointment selected modal-toggle"
            data-openpopup="appointment"
          >
            <a href="#">Make an appointment</a>
          </li>
          <li class="prescription modal-toggle" data-openpopup="prescription">
            <a href="#">Write a prescription</a>
          </li>
          <li class="reports modal-toggle" data-openpopup="reports">
            <a href="#">Generate report</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
