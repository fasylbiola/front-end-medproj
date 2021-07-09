import React from "react";
import { Line } from "react-chartjs-2";

const RecentPatientsActivity = () => {
  const labels = ["Jan", "Feb", "March", "April", "May", "June", "July"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="grid__row">
      <div class="grid__col grid__col--23 grid__col--margin grid__col--padding bg-white">
        <div class="grid__row justify-sb">
          <div class="grid__col grid__col--mb-12">
            <h3 class="grid__col-title">Activity</h3>
            <span class="grid__col-subtitle">LAST YEAR</span>
          </div>
          <div class="grid__col grid__col--mb-12 d-flex justify-fe">
            <span
              class="show-more show-more--ellipsis has-dropdown"
              data-dropdown="activitydropdown"
            ></span>
          </div>
        </div>
        <nav class="dropdown-menu dropdown-menu--content" id="activitydropdown">
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
              <a href="#">+ Add widget</a>
            </li>
          </ul>
        </nav>
        <Line data={data} width={140} height={40} options={options} />
        <canvas id="ActivityChart" width="100%" height="40"></canvas>
      </div>
      <div class="grid__col grid__col--13 grid__col--margin grid__col--padding bg-white">
        <div class="grid__row justify-sb">
          <div class="grid__col grid__col--mb-12">
            <h3 class="grid__col-title">Recent Patients</h3>
            <span class="grid__col-subtitle">LAST WEEK</span>
          </div>
          <div class="grid__col grid__col--mb-12 d-flex justify-fe">
            <span
              class="show-more show-more--plus bg-gray10 color-gray600 has-dropdown"
              data-dropdown="newddropdown"
            >
              +
            </span>
          </div>
        </div>
        <nav class="dropdown-menu dropdown-menu--content" id="newddropdown">
          <ul>
            <li>
              <a href="#">Details</a>
            </li>
            <li>
              <a href="#">Share</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
        <div class="table table--no-header table--new-doctors">
          <div class="table__body">
            <div class="table__row selected">
              <div class="table__cell">
                <div class="avatar-thumb avatar-thumb--table">
                  <img src="images/avatar-3.jpg" alt="" title="" />
                </div>
              </div>
              <div class="table__cell">Olivia Wilson</div>
              <div class="table__cell color-blue">Cardiology </div>
              <div class="table__cell">
                <span
                  class="show-more show-more--ellipsis has-dropdown"
                  data-dropdown="dropd1"
                ></span>
                <nav
                  class="dropdown-menu dropdown-menu--content dropdown-menu--table"
                  id="dropd1"
                >
                  <ul>
                    <li>
                      <a href="#">View Profile</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="table__row">
              <div class="table__cell">
                <div class="avatar-thumb avatar-thumb--table">
                  <img src="images/avatar-1.jpg" alt="" title="" />
                </div>
              </div>
              <div class="table__cell">Oliver Barnes</div>
              <div class="table__cell color-blue">Pathology </div>
              <div class="table__cell">
                <span
                  class="show-more show-more--ellipsis has-dropdown"
                  data-dropdown="dropd2"
                ></span>
                <nav
                  class="dropdown-menu dropdown-menu--content dropdown-menu--table"
                  id="dropd2"
                >
                  <ul>
                    <li>
                      <a href="#">View Profile</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="table__row">
              <div class="table__cell">
                <div class="avatar-thumb avatar-thumb--table">
                  <img src="images/avatar-2.jpg" alt="" title="" />
                </div>
              </div>
              <div class="table__cell">Maya Cooper</div>
              <div class="table__cell color-blue">Gastroenterology</div>
              <div class="table__cell">
                <span
                  class="show-more show-more--ellipsis has-dropdown"
                  data-dropdown="dropd3"
                ></span>
                <nav
                  class="dropdown-menu dropdown-menu--content dropdown-menu--table"
                  id="dropd3"
                >
                  <ul>
                    <li>
                      <a href="#">View Profile</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="table__row">
              <div class="table__cell">
                <div class="avatar-thumb avatar-thumb--table">
                  <img src="images/avatar-4.jpg" alt="" title="" />
                </div>
              </div>
              <div class="table__cell">Adam King</div>
              <div class="table__cell color-blue">Endocrinology </div>
              <div class="table__cell">
                <span
                  class="show-more show-more--ellipsis has-dropdown"
                  data-dropdown="dropd4"
                ></span>
                <nav
                  class="dropdown-menu dropdown-menu--content dropdown-menu--table"
                  id="dropd4"
                >
                  <ul>
                    <li>
                      <a href="#">View Profile</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="table__row">
              <div class="table__cell">
                <div class="avatar-thumb avatar-thumb--table">
                  <img src="images/avatar-5.jpg" alt="" title="" />
                </div>
              </div>
              <div class="table__cell">Julia Henderson</div>
              <div class="table__cell color-blue">Orthodontics</div>
              <div class="table__cell">
                <span
                  class="show-more show-more--ellipsis has-dropdown"
                  data-dropdown="dropd5"
                ></span>
                <nav
                  class="dropdown-menu dropdown-menu--content dropdown-menu--table"
                  id="dropd5"
                >
                  <ul>
                    <li>
                      <a href="#">View Profile</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="table__row">
              <div class="table__cell">
                <div class="avatar-thumb avatar-thumb--table">
                  <img src="images/avatar-6.jpg" alt="" title="" />
                </div>
              </div>
              <div class="table__cell">Sienna Butler</div>
              <div class="table__cell color-blue">Paediatrics</div>
              <div class="table__cell">
                <span
                  class="show-more show-more--ellipsis has-dropdown"
                  data-dropdown="dropd6"
                ></span>
                <nav
                  class="dropdown-menu dropdown-menu--content dropdown-menu--table"
                  id="dropd6"
                >
                  <ul>
                    <li>
                      <a href="#">View Profile</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPatientsActivity;
