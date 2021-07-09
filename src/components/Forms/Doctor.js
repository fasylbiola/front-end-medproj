import React, { useState } from "react";
import axios from "axios";

const Doctors = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [medicalSchool, setMedicalSchool] = useState("");
  const [affiliateHospital, setAffiliateHospital] = useState("");
  const [practiceNumber, setPracticeNumber] = useState("");
  const [yearOfGrad, setYearOfGrad] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [specialty, setSpecialty] = useState("");

  const onSubmit = async (e) => {
    const doc = {
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      email: email,
      password: password,
      dob: dateOfBirth,
      phonenumber: phoneNumber,
      address: address,
      username: "mario",
      usertype: "doctor",
      gender: gender,
      med_school: medicalSchool,
      year_graduation: yearOfGrad,
      practice_no: practiceNumber,
      affiliate_hospital: affiliateHospital,
      image: image,
      specialty: specialty,
      current_address: "as above",
    };
    const options = {
      header: {
        "Content-type": "application/json",
      },
    };
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8080/api/auth/signup2",
      doc,
      options
    );
    console.log(data);
  };
  return (
    <form onSubmit={onSubmit}>
      <div class="grid grid--margin bg-white">
        <div class="grid__row">
          <div class="grid__col grid__col--padding">
            <h3 style={{ fontSize: "340%" }} class="grid__col-title color-blue">
              Doctors
            </h3>
          </div>
        </div>
        <hr
          style={{ width: "94%", height: "2px", backgroundColor: "#5616f5" }}
        />
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">First Name</label>
            <input
              value={firstName}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Middle Name</label>
            <input
              value={middleName}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Last Name</label>
            <input
              value={lastName}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--12 grid__col--margin">
            <label class="form__label">Email</label>
            <input
              value={email}
              name="input"
              id="input"
              class="form__input required"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--12 grid__col--margin">
            <label class="form__label">Password</label>
            <input
              value={password}
              name="input"
              id="input"
              class="form__input required"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Address</label>
            <input
              value={address}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Medical School</label>
            <input
              value={medicalSchool}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setMedicalSchool(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Affiliate Hospital</label>
            <input
              value={affiliateHospital}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setAffiliateHospital(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
        </div>

        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Year of Graduation</label>
            <input
              value={yearOfGrad}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setYearOfGrad(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Practice Number</label>
            <input
              value={practiceNumber}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setPracticeNumber(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Date of Birth</label>
            <input
              value={dateOfBirth}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Phone Number</label>
            <input
              value={phoneNumber}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Gender</label>
            <input
              value={gender}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setGender(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Image</label>
            <input
              value={image}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setImage(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Specialty</label>
            <input
              value={specialty}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setSpecialty(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <input type="submit" className="btn btn--blue-bg" value="Submit" />
        </div>
      </div>
    </form>
  );
};

export default Doctors;
