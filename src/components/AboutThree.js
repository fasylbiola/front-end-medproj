import React from "react";

class AboutThree extends React.Component {
  render() {
    return (
      <section className="section section--about">
        <div className="\n    section__content section__content--fluid-width section__content--about\n  ">
          <div className="grid grid--about">
            <div className="grid__row">
              <div className="grid__col grid__col--25 grid__col--floated-right">
                <h3 className="grid__title">
                  Add and manage doctors with the
                  <span>special designed</span> sections
                </h3>
                <p className="grid__text">
                  Responsive code that makes your landing page look good on all
                  devices (desktops, tablets, and phones). Created with mobile
                  specialists.
                </p>
                <ul className="grid__list">
                  <li>Responsive code</li>
                  <li>Look good on all devices</li>
                  <li>Created with mobile specialists</li>
                </ul>
              </div>
              <div className="grid__col grid__col--35">
                <div className="grid__image grid__image--left">
                  <img src="images/desktop-frame-about-2.png" alt title />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutThree;
