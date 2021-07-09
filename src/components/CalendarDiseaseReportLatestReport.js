import React, { useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarDiseaseReportLatestReport = () => {
  const [value, setValue] = useState(new Date());
  const data = {
    labels: ["Cold", "Pneumonia", "Cough", "Flu", "Covid", "Malaria"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
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
    <div class="grid__row">
      <div class="grid__col grid__col--13 grid__col--margin grid__col--padding bg-white mb0">
        <div class="grid__row justify-sb">
          <div class="grid__col grid__col--mb-12">
            <h3 class="grid__col-title">Calendar</h3>
            <span class="grid__col-subtitle">EVENTS BY MONTH</span>
          </div>
          <div class="grid__col grid__col--mb-12 d-flex justify-fe">
            <span
              class="show-more show-more--plus bg-gray10 color-gray600 has-dropdown"
              data-dropdown="calendardropdown"
            >
              +
            </span>
          </div>
        </div>
        <nav class="dropdown-menu dropdown-menu--content" id="calendardropdown">
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
        <Calender onChange={setValue} value={value} />
      </div>

      <div class="grid__col grid__col--13 grid__col--margin grid__col--padding bg-white mb0">
        <div class="grid__row justify-sb">
          <div class="grid__col grid__col--mb-12">
            <h3 class="grid__col-title">Diseases Report</h3>
            <span class="grid__col-subtitle">MOST IMPORTANT</span>
          </div>
          <div class="grid__col grid__col--mb-12 d-flex justify-fe">
            <span
              class="show-more show-more--ellipsis show-more--ellipsis-vertical has-dropdown"
              data-dropdown="diseasesdropdown"
            ></span>
          </div>
        </div>
        <nav class="dropdown-menu dropdown-menu--content" id="diseasesdropdown">
          <ul>
            <li>
              <a href="#">More Details</a>
            </li>
            <li>
              <a href="#">View Diseases</a>
            </li>
            <li>
              <a href="#">Edit Settings</a>
            </li>
            <li>
              <a href="#">+ Add widget</a>
            </li>
          </ul>
        </nav>
        <Doughnut data={data} />
      </div>
      <div class="grid__col grid__col--13 grid__col--margin grid__col--padding bg-white mb0">
        <div class="grid__row justify-sb">
          <div class="grid__col grid__col--mb-12">
            <h3 class="grid__col-title">Latest Reports</h3>
            <span class="grid__col-subtitle">LAST 7 DAYS</span>
          </div>
          <div class="grid__col grid__col--mb-12 d-flex justify-fe">
            <span
              class="show-more show-more--arrow color-gray600 has-dropdown"
              data-dropdown="reportsdropdown"
            ></span>
          </div>
        </div>
        <nav class="dropdown-menu dropdown-menu--content" id="reportsdropdown">
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
        <Line data={data2} options={options} />
        <div class="table table--no-header table--latest-reports">
          <div class="table__body">
            <div class="table__row">
              <div class="table__cell">Infectious disease.pdf</div>
              <div class="table__cell">
                <a
                  href="#"
                  class="button button--small-table button--lightblue-bg"
                >
                  View
                </a>
              </div>
              <div class="table__cell">
                <a href="#" class="button button--small-table button--blue-bg">
                  Download
                </a>
              </div>
            </div>
            <div class="table__row">
              <div class="table__cell">Paediatric.doc</div>
              <div class="table__cell">
                <a
                  href="#"
                  class="button button--small-table button--lightblue-bg"
                >
                  View
                </a>
              </div>
              <div class="table__cell">
                <a href="#" class="button button--small-table button--blue-bg">
                  Download
                </a>
              </div>
            </div>
            <div class="table__row">
              <div class="table__cell">Hepatology.pdf</div>
              <div class="table__cell">
                <a
                  href="#"
                  class="button button--small-table button--lightblue-bg"
                >
                  View
                </a>
              </div>
              <div class="table__cell">
                <a href="#" class="button button--small-table button--blue-bg">
                  Download
                </a>
              </div>
            </div>
            <div class="table__row">
              <div class="table__cell">General Surgery.doc</div>
              <div class="table__cell">
                <a
                  href="#"
                  class="button button--small-table button--lightblue-bg"
                >
                  View
                </a>
              </div>
              <div class="table__cell">
                <a href="#" class="button button--small-table button--blue-bg">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarDiseaseReportLatestReport;
