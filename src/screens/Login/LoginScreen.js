import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const customStyles = {
    overlay: {
      background: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "70%",
      height: "45%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      border: "none",
      borderRadius: "0px",
    },
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <button onClick={openModal}>Get started?</button>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <h2>Hello darknesss my old fried</h2>
      <Modal
        closeTimeoutMS={400}
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ flexGrow: 1, padding: "20px" }}
          >
            <h2 class="form__title">Login</h2>
            <div class="form__row">
              <label class="form__label" for="namec">
                Email
              </label>

              <input
                autoFocus
                className="form__input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span class="form__row-border"></span>
            </div>

            <div class="form__row">
              <label class="form__label" for="namec">
                Password
              </label>

              <input
                autoFocus
                className="form__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span class="form__row-border"></span>
            </div>
            <input
              type="submit"
              name="submit"
              className="form__submit btn btn--blue-bg"
              id="submitl"
              value="LOGIN"
            />
          </form>
          <div
            style={{ flexGrow: 1, backgroundColor: "#5616f5", padding: "15px" }}
          >
            <h2 style={{ color: "white" }}>First time here?</h2>
            <ul class="modal__list" style={{ color: "white" }}>
              <li>premium access to all products</li>
              <li>free testing tools</li>
              <li>unlimited user accounts</li>
            </ul>
            <button
              class="modal__switch modal__switch--signup"
              data-popup="signup"
            >
              Signup
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
