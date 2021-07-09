import React from "react";

const Summary = () => {
  return (
    <div>
      <div class="grid__row dashboard-intro">
        <div class="grid__col grid__col--margin grid__col--padding bg-white">
          <div class="grid__row">
            <div class="grid__col grid__col--margin grid__col--12">
              <div class="dashboard-intro__title">
                Good morning, <span>Dr Johnson</span>
              </div>
              <div class="dashboard-intro__subtitle">
                Here are your important tasks, updates and alerts. You can set
                your in app preferences here.
              </div>
            </div>
            <div class="grid__col grid__col--12 d-flex justify-fe aligns-fs">
              <span
                class="show-more show-more--select show-more--select-gray has-dropdown"
                data-dropdown="moreoptions"
              >
                Edit your options
              </span>
            </div>
            <nav class="dropdown-menu dropdown-menu--content" id="moreoptions">
              <ul>
                <li>
                  <a href="#">More Details</a>
                </li>
                <li>
                  <a href="#">View Report</a>
                </li>
                <li>
                  <a href="#">Edit Settings</a>
                </li>
                <li>
                  <a href="#">+ Add widget</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="grid__row">
            <div class="grid__col grid__col--13 grid__col--margin grid__col--padding bg-gray10 mb0">
              <div class="grid__row justify-sb">
                <div class="grid__col grid__col--mb-12">
                  <h3 class="grid__col-title">Important Tasks</h3>
                  <span class="grid__col-subtitle">TODAY 24, JAN 2019</span>
                </div>
                <div class="grid__col grid__col--mb-12 d-flex justify-fe">
                  <span
                    class="show-more show-more--plus bg-white color-gray600 has-dropdown"
                    data-dropdown="tasksdropdown"
                  >
                    +
                  </span>
                </div>
              </div>

              <nav
                class="dropdown-menu dropdown-menu--content"
                id="tasksdropdown"
              >
                <ul>
                  <li>
                    <a href="#">More Details</a>
                  </li>
                  <li>
                    <a href="#">View Activity</a>
                  </li>
                  <li>
                    <a href="#">Edit Settings</a>
                  </li>
                  <li>
                    <a href="#">+ Edit widget</a>
                  </li>
                </ul>
              </nav>
              <div class="d-flex align-c">
                <div class="info-nr info-nr--strong gradient-blue gradient-text">
                  23
                </div>
                <div class="info-details">
                  <p>3 URGENT</p>
                  <p>16 LESS URGENT</p>
                  <p>4 REQUIRED</p>
                </div>
              </div>
            </div>
            <div class="grid__col grid__col--13 grid__col--margin grid__col--padding bg-gray10 mb0">
              <div class="grid__row justify-sb">
                <div class="grid__col grid__col--mb-12">
                  <h3 class="grid__col-title">New Patients</h3>
                  <span class="grid__col-subtitle">REGISTERED IN JANUARY</span>
                </div>
                <div class="grid__col grid__col--mb-12 d-flex justify-fe">
                  <span
                    class="show-more show-more--plus bg-white color-gray600 has-dropdown"
                    data-dropdown="newpatientsdropdown"
                  >
                    +
                  </span>
                </div>
              </div>
              <nav
                class="dropdown-menu dropdown-menu--content"
                id="newpatientsdropdown"
              >
                <ul>
                  <li>
                    <a href="#">More Details</a>
                  </li>
                  <li>
                    <a href="#">View Patients</a>
                  </li>
                  <li>
                    <a href="#">Edit Settings</a>
                  </li>
                  <li>
                    <a href="#">+ Edit widget</a>
                  </li>
                </ul>
              </nav>
              <div class="d-flex align-c">
                <div class="info-nr info-nr--strong gradient-lightblue gradient-text">
                  15
                </div>
                <div class="info-details">
                  <p>1 PREGNANCY</p>
                  <p>10 DIABETIS</p>
                  <p>14 KIDS</p>
                </div>
              </div>
            </div>
            <div class="grid__col grid__col--13 grid__col--margin grid__col--padding bg-gray10 mb0">
              <div class="grid__row justify-sb">
                <div class="grid__col grid__col--mb-12">
                  <h3 class="grid__col-title">Alert</h3>
                  <span class="grid__col-subtitle">LAST MONTH</span>
                </div>
                <div class="grid__col grid__col--mb-12 d-flex justify-fe">
                  <span
                    class="show-more show-more--plus bg-white color-gray600 has-dropdown"
                    data-dropdown="alertdropdown"
                  >
                    +
                  </span>
                </div>
              </div>
              <nav
                class="dropdown-menu dropdown-menu--content"
                id="alertdropdown"
              >
                <ul>
                  <li>
                    <a href="#">More Details</a>
                  </li>
                  <li>
                    <a href="#">View Alerts</a>
                  </li>
                  <li>
                    <a href="#">Edit Settings</a>
                  </li>
                  <li>
                    <a href="#">+ Edit widget</a>
                  </li>
                </ul>
              </nav>
              <div class="d-flex align-c">
                <div class="info-nr info-nr--strong gradient-pink gradient-text">
                  48
                </div>
                <div class="info-details">
                  <p>
                    New flue cases registered all over the states with potential
                    longer number.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
