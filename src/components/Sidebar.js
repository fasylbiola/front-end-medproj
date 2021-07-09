import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="section section--sidebar" id="sidebar">
        <nav className="sidebar-menu">
          <ul>
            <li className="dashboard">
              <a href="dashboard.html">
                <b>Dashboard</b>
              </a>
            </li>
            <li className="components has-submenu">
              <a href="#">
                <b>
                  Components
                  <span className="submenu-arrow" />
                </b>
              </a>
              <ul className="sidebar-menu__submenu">
                <li>
                  <a href="dashboard__grid.html">Grid</a>
                </li>
                <li>
                  <a href="dashboard__charts.html">Charts</a>
                </li>
                <li>
                  <a href="dashboard__forms.html">Forms</a>
                </li>
                <li>
                  <a href="dashboard__tabs.html">Tabs</a>
                </li>
                <li>
                  <a href="dashboard__toggles.html">Toggles</a>
                </li>
                <li>
                  <a href="dashboard__tables.html">Tables</a>
                </li>
                <li>
                  <a href="dashboard__typography.html">Typography</a>
                </li>
              </ul>
            </li>
            <li className="appointment">
              <a href="dashboard__appointments.html">
                <b>Appointments</b>
              </a>
            </li>
            <li className="doctors has-submenu">
              <a href="#">
                <b>
                  Doctors
                  <span className="submenu-arrow" />
                </b>
              </a>
              <ul className="sidebar-menu__submenu">
                <li>
                  <Link to="/add-doctor">Add new doctor</Link>
                </li>
                <li>
                  <a href="dashboard__doctors.html">View all doctors</a>
                </li>
              </ul>
            </li>
            <li className="patients has-submenu">
              <a href="#">
                <b>
                  Patients
                  <span className="submenu-arrow" />
                </b>
              </a>
              <ul className="sidebar-menu__submenu">
                <li>
                  <a href="dashboard__patients-add.html">Add new patient</a>
                </li>
                <li>
                  <a href="dashboard__patients.html">View all patients</a>
                </li>
                <li>
                  <a href="dashboard__patient.html">Patient profile</a>
                </li>
              </ul>
            </li>
            <li className="inbox">
              <a href="dashboard__messages.html">
                <b>
                  Messages<span className="submenu-bubble">3</span>
                </b>
              </a>
            </li>
            <li className="settings">
              <a href="#">
                <b>Settings</b>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
