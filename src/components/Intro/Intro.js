import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";
import axios from "axios";
import { selectForm } from "../../actions/formActions";
import "./intro.css";

const Intro = ({ history }) => {
  const { success, error } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const [usernameOrEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false);
  const [formName, setFormName] = useState({});

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "70%",
      height: "47%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      border: "none",
      borderRadius: "0px",
    },
  };

  const openModalLogin = () => {
    setModalLoginOpen(true);
  };
  const openModalRegister = () => {
    setModalRegisterOpen(true);
  };
  const closeLoginModal = () => {
    setModalLoginOpen(false);
  };
  const closeRegisterModal = () => {
    setModalRegisterOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const user = {
      usernameOrEmail,
      password,
    };
    dispatch(loginUser(user));
    if (success) {
      history.push("/dashboard");
    }
  };
  const onSubmitRegistration = (e) => {
    e.preventDefault();
    console.log(formName);
    dispatch(selectForm(formName.category));
    history.push("/form");
  };

  return (
    <div>
      <section className="section section--intro" id="intro">
        <div className="section__content section__content--intro">
          <div className="intro">
            <div className="intro__content animated fadeInLeft">
              <h1 className="intro__title">
                <span>Welcome to MedBook</span> for world class medical
                assistance
              </h1>
              <div className="intro__subtitle">
                Using the latest web technologies, HTML, CSS, Javascript, with
                Sass and Gulp file included, this layout can be a strong
                starting point in creating your product design, landing page and
                administration dashboard.
              </div>
              <div className="intro__buttons intro__buttons--left">
                <button
                  onClick={openModalRegister}
                  className="btn btn--lightblue-bg"
                >
                  REGISTER
                </button>
                <button onClick={openModalLogin} className="btn btn--pink-bg">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="svg-intro-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M95,0 Q90,90 0,100 L100,100 100,0 Z"
            fill="#f1f6fb"
            fillOpacity={1}
          />
        </svg>
      </section>

      <Modal
        closeTimeoutMS={400}
        isOpen={modalLoginOpen}
        onRequestClose={closeLoginModal}
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
                Email/Username
              </label>

              <input
                autoFocus
                className="form__input"
                type="text"
                value={usernameOrEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span class="form__row-border"></span>
            </div>

            <div class="form__row">
              <label class="form__label" for="namec">
                Password
              </label>

              <input
                className="form__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span class="form__row-border"></span>
            </div>
            {error && (
              <p
                style={{
                  padding: "2px",
                  color: "red",
                  fontStyle: "italic",
                  fontSize: "80%",
                  marginTop: "10px",
                }}
              >
                {error}
              </p>
            )}
            <input
              type="submit"
              name="submit"
              className="form__submit btn btn--blue-bg"
              id="submitl"
              value="LOGIN"
            />
          </form>
          <div
            style={{
              flexGrow: 1,
              backgroundColor: "#5616f5",
              padding: "15px",
            }}
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
      <Modal
        closeTimeoutMS={300}
        isOpen={modalRegisterOpen}
        style={customStyles}
        onRequestClose={closeRegisterModal}
      >
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1, padding: "15px" }}>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <h3>You are a ...</h3>
            </div>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
              onSubmit={onSubmitRegistration}
            >
              <label class="container">
                Doctor
                <input
                  type="radio"
                  name="category"
                  value="Doctor"
                  onChange={({ target: { name, value } }) =>
                    setFormName({ [name]: value })
                  }
                />
                <span class="checkmark"></span>
              </label>

              <label class="container">
                Patient
                <input
                  type="radio"
                  name="category"
                  value="Patient"
                  onChange={({ target: { name, value } }) =>
                    setFormName({ [name]: value })
                  }
                />
                <span class="checkmark"></span>
              </label>

              <label class="container">
                Hospital
                <input
                  type="radio"
                  name="category"
                  value="Hospital"
                  onChange={({ target: { name, value } }) =>
                    setFormName({ [name]: value })
                  }
                />
                <span class="checkmark"></span>
              </label>

              <label class="container">
                Pharmacy
                <input
                  type="radio"
                  name="category"
                  value="Pharmacy"
                  onChange={({ target: { name, value } }) =>
                    setFormName({ [name]: value })
                  }
                />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                Laboratory
                <input
                  type="radio"
                  name="category"
                  value="Lab"
                  onChange={({ target: { name, value } }) =>
                    setFormName({ [name]: value })
                  }
                />
                <span class="checkmark"></span>
              </label>
              <input
                type="submit"
                value="Let's Go!"
                className="btn btn--blue-bg"
              />
            </form>
          </div>
          <div
            style={{
              flexGrow: 1,
              backgroundColor: "#5616f5",
              padding: "15px",
            }}
          >
            <h2 style={{ color: "white" }}>Not your first time here?</h2>
            <ul class="modal__list" style={{ color: "white" }}>
              <li>premium access to all products</li>
              <li>free testing tools</li>
              <li>unlimited user accounts</li>
            </ul>
            <button
              class="modal__switch modal__switch--signup"
              data-popup="signup"
            >
              Login
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Intro;
