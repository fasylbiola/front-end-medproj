import React, { useState } from "react";
import axios from "axios";

const Pharmacy = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [services, setServices] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [bank, setBank] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const options = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const pharm = {
      name: name,
      username: username,
      regNumber: registrationNumber,
      email,
      password,
      address,
      contactPerson,
      services,
      bank,
      bankcode: bankCode,
      phonenumber: phoneNumber,
      role: ["pharm"],
    };
    const { data } = await axios.post(
      "http://localhost:8080/api/auth/signup",
      pharm,
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
              Pharmacy
            </h3>
          </div>
        </div>
        <hr
          style={{ width: "94%", height: "2px", backgroundColor: "#5616f5" }}
        />
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--margin">
            <label class="form__label">Name</label>
            <input
              value={name}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Username</label>
            <input
              value={username}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
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
            <label class="form__label">Registration Number</label>
            <input
              value={registrationNumber}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--12 grid__col--margin">
            <label class="form__label">Phone number</label>
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
          <div class="grid__col grid__col--12 grid__col--margin">
            <label class="form__label">Contact Person</label>
            <input
              value={contactPerson}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setContactPerson(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Email</label>
            <input
              value={email}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Services</label>
            <input
              value={services}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setServices(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Bank</label>
            <input
              value={bank}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setBank(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
        </div>

        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Password</label>
            <input
              value={password}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Bankcode</label>
            <input
              value={bankCode}
              name="input"
              id="input"
              class="form__input required"
              type="text"
              onChange={(e) => setBankCode(e.target.value)}
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Role</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
              value="Pharmacy"
              disabled={true}
            />
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <input type="submit" className="btn btn--blue-bg" value="Submit" />
        </div>
      </div>
    </form>
  );
};

export default Pharmacy;
