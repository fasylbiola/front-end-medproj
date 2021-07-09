import React from "react";

class AddDoctor extends React.Component {
  render() {
    return (
      <div className="dashboard-wrap">
        <header className="sidebar-header">
          <h1 className="sidebar-header__logo">
            m
            <span>
              edi<strong>kit</strong>
            </span>
          </h1>
        </header>
        {}
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
                    <a href="dashboard__doctors-add.html">Add new doctor</a>
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
        {}
        <div className="section section--content" id="content">
          <header className="content-header">
            <div className="sidebar-resize" />
            <div className="mobile-menu">
              <div className="st-burger-icon st-burger-icon--medium">
                <span />
              </div>
            </div>
            <div className="content-header__user content-header__dropdown">
              <div
                className="content-header__user-avatar content-header__dropdown-activate"
                data-dropdown="userdropdown"
              >
                <div className="content-header__user-thumb">
                  <img src="images/avatar-2.jpg" alt title />
                </div>
                <span className="content-header__user-name">
                  Nathalie Roberts
                </span>
              </div>
              <nav
                className="dropdown-menu dropdown-menu--header dropdown-menu--user-menu "
                id="userdropdown"
              >
                <h3 className="dropdown-menu__subtitle">User menu</h3>
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
                  <li className="logout">
                    <a
                      href="#"
                      className="button button--general button--red-border"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="content-header__notifications content-header__dropdown">
              <div
                className="content-header__notifications-icon content-header__icon content-header__dropdown-activate"
                data-dropdown="notificationsdropdown"
              >
                <img
                  src="images/icons/icons-24-gray/notifications.png"
                  alt
                  title
                />
                <span className="content-header__icon-bubble">6</span>
              </div>
              <nav
                className="dropdown-menu dropdown-menu--header dropdown-menu--notifications-menu"
                id="notificationsdropdown"
              >
                <h3 className="dropdown-menu__subtitle">
                  You have <strong>6</strong> notifications
                </h3>
                <ul>
                  <li className="d-flex justify-sb">
                    <span className="important">IMPORTANT</span>Michael D.
                    kidney surgery <b className="task-time">today</b>
                  </li>
                  <li className="d-flex justify-sb">
                    <span className="important">IMPORTANT</span>FLU Alert report
                    generated <b className="task-time">today</b>
                  </li>
                  <li className="d-flex justify-sb">
                    <span>
                      Meeting with <strong>Dr. Joshua</strong>{" "}
                    </span>{" "}
                    <b className="task-time">tomorrow</b>
                  </li>
                  <li className="d-flex justify-sb">
                    <span>
                      Remember to create prescriptions for{" "}
                      <strong>Alexander P.</strong>
                    </span>{" "}
                    <b className="task-time">tomorrow</b>
                  </li>
                  <li className="d-flex justify-sb">
                    <span>
                      <strong>Jada Sacks</strong> canceled the appointment at
                      Cardiology, Dr. Michael V.{" "}
                    </span>{" "}
                    <b className="task-time">24 jan, 19</b>
                  </li>
                  <li className="d-flex justify-sb">
                    <span>
                      Sarah D. registered as new patient of{" "}
                      <strong>Dr. George</strong> at Dermatology{" "}
                    </span>{" "}
                    <b className="task-time">28 jan, 19</b>
                  </li>
                  <li className="view-all">
                    <a
                      href="#"
                      className="button button--general button--blue-border"
                    >
                      View all
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="content-header__quicklinks content-header__dropdown">
              <div
                className="content-header__quicklinks-icon content-header__icon content-header__dropdown-activate"
                data-dropdown="quicklinksdropdown"
              >
                <img src="images/icons/icons-24-gray/submenu.png" alt title />
              </div>
              <nav
                className="dropdown-menu dropdown-menu--header dropdown-menu--quicklinks-menu"
                id="quicklinksdropdown"
              >
                <h3 className="dropdown-menu__subtitle">Quick links</h3>
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
            <div className="mobile-submenu" />
            <nav className="content-header__menu">
              <ul>
                <li className="user selected">
                  <a href="dashboard__doctors-add.html">Add new doctor</a>
                </li>
                <li
                  className="prescription modal-toggle"
                  data-openpopup="prescription"
                >
                  <a href="#">Write a prescription</a>
                </li>
                <li className="reports modal-toggle" data-openpopup="reports">
                  <a href="#">Generate report</a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="content-subheader">
            <div className="content-subheader__titles">
              <h2 className="content-subheader__title">Add new doctor</h2>
              <nav className="content-subheader__breadcrumb-menu">
                <ul>
                  <li>
                    <a href="dashboard__doctors.html">Doctors</a>
                  </li>
                  <li>
                    <a href="dashboard.html">Dashboard</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="content-subheader__options">
              <div className="content-subheader__search">
                <form>
                  <input
                    type="text"
                    className="subheader-search__input"
                    id
                    name
                    defaultValue
                    placeholder="Search patient"
                  />
                  <input
                    type="submit"
                    className="subheader-search__submit"
                    defaultValue="Search"
                  />
                </form>
              </div>
              <div className="content-subheader__dropdown">
                <span
                  className="content-subheader__more show-more show-more--select show-more--select-gray has-dropdown"
                  data-dropdown="moreoptions"
                >
                  Filter Options
                </span>
                <nav
                  className="dropdown-menu dropdown-menu--content dropdown-menu--subheader"
                  id="moreoptions"
                >
                  <ul>
                    <li>
                      <a href="#">By Date</a>
                    </li>
                    <li>
                      <a href="#">By Name</a>
                    </li>
                    <li>
                      <a href="#">By Date of birth</a>
                    </li>
                    <li>
                      <a href="#">+ Add filter</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="grid grid--margin bg-white">
            <div className="grid__row">
              <div className="grid__col grid__col--padding">
                <h3 className="grid__col-title">Personal Information</h3>
              </div>
            </div>
            <form>
              <div className="grid__row grid__row--margin">
                <div className="grid__col grid__col--13 grid__col--margin">
                  <div className="form-upload" id="dropzone">
                    <div className="form-upload__message dz-message needsclick">
                      Drop image here or click to upload.
                    </div>
                  </div>
                </div>
                <div className="grid__col grid__col--13 grid__col--margin">
                  <div className="grid__row">
                    <div className="grid__col grid__col--margin">
                      <label className="form__label">FIRST NAME *</label>
                      <input
                        name="fname"
                        id="fname"
                        className="form__input required"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid__row">
                    <div className="grid__col grid__col--margin">
                      <label className="form__label">EMAIL *</label>
                      <input
                        name="email"
                        id="email"
                        className="form__input required email"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid__row">
                    <div className="grid__col grid__col--margin">
                      <label className="form__label">GENDER</label>
                      <div className="form__select">
                        <select name="gender" id="gender">
                          <option>Choose a gender</option>
                          <option value={1}>Female</option>
                          <option value={2}>Male</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="grid__row">
                    <div className="grid__col grid__col--margin mb0">
                      <label className="form__label">LANGUAGES</label>
                      <select
                        className="custom-select"
                        name="languages"
                        multiple="multiple"
                      >
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Mandarin">Mandarin</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Italian">Italian</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid__col grid__col--13 grid__col--margin">
                  <div className="grid__row">
                    <div className="grid__col grid__col--margin">
                      <label className="form__label">LAST NAME *</label>
                      <input
                        name="lname"
                        id="lname"
                        className="form__input required"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid__row">
                    <div className="grid__col grid__col--margin">
                      <label className="form__label">PHONE *</label>
                      <input
                        name="phone"
                        id="phone"
                        className="form__input required"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid__row">
                    <div className="grid__col grid__col--margin">
                      <label className="form__label">DATE OF BIRTH</label>
                      <input
                        type="text"
                        name="birthday"
                        className="form__input"
                        defaultValue="02/03/1983"
                      />
                    </div>
                  </div>
                  <div className="grid__row">
                    <div className="grid__col grid__col--margin mb0">
                      <label className="form__label">NATIONALITY</label>
                      <select className="custom-select" name="nationality">
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">
                          Congo, The Democratic Republic of The
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">
                          Iran, Islamic Republic of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and The Grenadines">
                          Saint Vincent and The Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia and Montenegro">
                          Serbia and Montenegro
                        </option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">
                          South Georgia and The South Sandwich Islands
                        </option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">
                          Syrian Arab Republic
                        </option>
                        <option value="Taiwan, Province of China">
                          Taiwan, Province of China
                        </option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid__row grid__row--margin">
                <div className="grid__col grid__col--13 grid__col--margin">
                  <label className="form__label">COUNTRY</label>
                  <select className="custom-select" name="country">
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">
                      Congo, The Democratic Republic of The
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and The Grenadines">
                      Saint Vincent and The Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia and Montenegro">
                      Serbia and Montenegro
                    </option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and The South Sandwich Islands">
                      South Georgia and The South Sandwich Islands
                    </option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Taiwan, Province of China">
                      Taiwan, Province of China
                    </option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">
                      Virgin Islands, British
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
                <div className="grid__col grid__col--13 grid__col--margin">
                  <label className="form__label">CITY</label>
                  <select className="custom-select" name="city">
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Washington">Washington</option>
                    <option value="New York">New York</option>
                    <option value="Chicago">Chicago</option>
                  </select>
                </div>
                <div className="grid__col grid__col--13 grid__col--margin">
                  <label className="form__label">ZIP</label>
                  <input
                    name="phone"
                    id="phone"
                    className="form__input required"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid__row grid__row--margin">
                <div className="grid__col grid__col--margin">
                  <label className="form__label">ADDRESS *</label>
                  <input
                    name="adress"
                    id="adress"
                    className="form__input required"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid__row grid__row--margin">
                <div className="grid__col grid__col--margin">
                  <input
                    type="submit"
                    name="submit"
                    className="button button--submit button--blue-bg"
                    id="submit"
                    value="ADD DOCTOR"
                  />
                </div>
              </div>
            </form>
          </div>{" "}
          {}
          <div className="grid grid--margin bg-white">
            <div className="grid__row">
              <div className="grid__col grid__col--padding">
                <h3 className="grid__col-title">Medical Information</h3>
              </div>
            </div>
            <div className="grid__row grid__row--margin">
              <div className="grid__col grid__col--37 grid__col--margin">
                <label className="form__label">MAIN SPECIALIZATION</label>
                <select className="custom-select" name="kdiseases">
                  <option value="Patient Name">Type 1 Diabetes</option>
                  <option value="Patient Name">Multiple Sclerosis</option>
                  <option value="Patient Name">Rheumatoid Arthritis</option>
                  <option value="Patient Name">Allergies & Asthma</option>
                  <option value="Patient Name">Celiac Disease</option>
                  <option value="Patient Name">Cancer</option>
                  <option value="Patient Name">Catarrh</option>
                  <option value="Patient Name">Conjunctivitis</option>
                </select>
              </div>
              <div className="grid__col grid__col--37 grid__col--margin">
                <label className="form__label">SECONDARY SPECIALIZATION</label>
                <select className="custom-select" name="kdiseases">
                  <option value="Patient Name">Celiac Disease</option>
                  <option value="Patient Name">Cancer</option>
                  <option value="Patient Name">Catarrh</option>
                  <option value="Patient Name">Conjunctivitis</option>
                  <option value="Patient Name">Liver Disease</option>
                  <option value="Patient Name">Heart Disease</option>
                  <option value="Patient Name">Epilepsy </option>
                  <option value="Patient Name">Flatulence </option>
                  <option value="Patient Name">Gastroenteritis</option>
                </select>
              </div>
            </div>
            <div className="grid__row grid__row--margin">
              <div className="grid__col grid__col--37 grid__col--margin">
                <label className="form__label">MEDICAL EDUCATION</label>
                <select className="custom-select" name="kdiseases2">
                  <option value="Patient Name">Medical University</option>
                  <option value="Patient Name">Medical College</option>
                  <option value="Patient Name">Nurse School</option>
                </select>
              </div>
              <div className="grid__col grid__col--37 grid__col--margin">
                <label className="form__label">PERIOD</label>
                <input
                  type="text"
                  name="dates"
                  className="form__input"
                  defaultValue
                />
              </div>
            </div>
            <div className="grid__row grid__row--margin">
              <div className="grid__col grid__col--margin">
                <label className="form__label">NOTES *</label>
                <input
                  name="adress"
                  id="notes"
                  className="form__input required"
                  type="text"
                />
              </div>
            </div>
            <div className="grid__row grid__row--margin">
              <div className="grid__col grid__col--margin">
                <input
                  type="submit"
                  name="submit"
                  className="button button--submit button--blue-bg"
                  id="submit"
                  value="SAVE"
                />
              </div>
            </div>
          </div>{" "}
          {}
        </div>
      </div>
    );
  }
}

export default AddDoctor;
