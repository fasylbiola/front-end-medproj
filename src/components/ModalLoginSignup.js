import React from "react";

class ModalLoginSignup extends React.Component {
  render() {
    return (
      <section className="modal modal--signuplogin">
        <div className="modal__overlay modal__overlay--toggle" />
        <div className="modal__wrapper modal-transition">
          <div className="modal__body">
            <div className="modal__content modal__content--login">
              <div className="modal__info">
                <h2 className="modal__title">First time here?</h2>
                <div className="modal__descr">
                  Join now and get <span>20% OFF</span> for all products
                </div>
                <ul className="modal__list">
                  <li>premium access to all products</li>
                  <li>free testing tools</li>
                  <li>unlimited user accounts</li>
                </ul>
                <button
                  className="modal__switch modal__switch--signup"
                  data-popup="signup"
                >
                  Signup
                </button>
              </div>
              <div className="modal__form form">
                <h2 className="form__title">Login</h2>
                <form
                  className="form__container"
                  id="LoginForm"
                  method="post"
                  action="index.html"
                >
                  <div className="form__row">
                    <label className="form__label" htmlFor="namec">
                      Name
                    </label>
                    <input
                      name="namec"
                      id="namec"
                      className="form__input"
                      type="text"
                    />
                    <span className="form__row-border" />
                  </div>
                  <div className="form__row">
                    <label className="form__label">Email</label>
                    <input name="emailc" className="form__input" type="text" />
                    <span className="form__row-border" />
                  </div>
                  <div className="modal__checkbox">
                    <input
                      id="remember"
                      name="remember"
                      defaultValue="remember"
                      defaultChecked
                      type="checkbox"
                    />
                    <label htmlFor="remember">Keep me Signed in</label>
                  </div>
                  <div
                    className="modal__switch modal__switch--forgot"
                    data-popup="forgot"
                  >
                    Forgot Password?
                  </div>
                  <input
                    type="submit"
                    name="submit"
                    className="form__submit btn btn--blue-bg"
                    id="submitl"
                    defaultValue="LOGIN"
                  />
                </form>
              </div>
            </div>
            {}
            <div className="modal__content modal__content--forgot">
              <div className="modal__form form">
                <h2 className="form__title">Forgot Password</h2>
                <form
                  className="form__container"
                  id="ForgotForm"
                  method="post"
                  action="index.html"
                >
                  <div className="form__row">
                    <label className="form__label">Email</label>
                    <input name="emailf" className="form__input" type="text" />
                    <span className="form__row-border" />
                  </div>
                  <input
                    type="submit"
                    name="submit"
                    className="form__submit btn btn--blue-bg"
                    id="submitf"
                    defaultValue="RESET PASSWORD"
                  />
                </form>
              </div>
              <div className="modal__info">
                <h2 className="modal__title">We got you covered</h2>
                <div className="modal__descr">
                  A new password will be sent by email. Remembered your
                  password?
                </div>
                <button
                  className="modal__switch modal__switch--signup"
                  data-popup="login"
                >
                  Login
                </button>
              </div>
            </div>
            {}
            <div className="modal__content modal__content--signup">
              <div className="modal__form form">
                <h2 className="form__title">Signup</h2>
                <form
                  className="form__container"
                  id="SignupForm"
                  method="post"
                  action="index.html"
                >
                  <div className="form__row">
                    <label className="form__label" htmlFor="names">
                      Username
                    </label>
                    <input
                      name="namec"
                      id="names"
                      className="form__input"
                      type="text"
                    />
                    <span className="form__row-border" />
                  </div>
                  <div className="form__row">
                    <label className="form__label">Email</label>
                    <input name="emails" className="form__input" type="text" />
                    <span className="form__row-border" />
                  </div>
                  <div className="form__row">
                    <label className="form__label" htmlFor="pass">
                      Password
                    </label>
                    <input
                      name="pass"
                      id="pass"
                      className="form__input"
                      type="password"
                    />
                    <span className="form__row-border" />
                  </div>
                  <input
                    type="submit"
                    name="submit"
                    className="form__submit btn btn--blue-bg"
                    id="submit"
                    defaultValue="SIGNUP"
                  />
                </form>
              </div>
              <div className="modal__info">
                <h2 className="modal__title">Allready have an account?</h2>
                <div className="modal__descr">
                  Login now and starting using our <span>amazing</span> products
                </div>
                <ul className="modal__list">
                  <li>premium access to all products</li>
                  <li>free testing tools</li>
                  <li>unlimited user accounts</li>
                </ul>
                <button
                  className="modal__switch modal__switch--login"
                  data-popup="login"
                >
                  Login
                </button>
              </div>
            </div>
            {}
          </div>
        </div>
      </section>
    );
  }
}

export default ModalLoginSignup;
