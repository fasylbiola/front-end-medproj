import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="section section--about" id="about">
        <div className="\n    section__content section__content--fluid-width section__content--about\n  ">
          <h2 className="section__title section__title--centered">
            Created with medical specialists
          </h2>
          <div className="section__description section__description--centered">
            Chart reports about your medical activity. New registered patients,
            diseases reports, countdown to medical visit, confirm and cancel
            appointment.
          </div>
          <div className="grid">
            <div className="grid__row">
              <div className="grid__col">
                <div
                  className="grid__image grid__image--center animate"
                  data-animate="fadeIn"
                  data-duration="2.0s"
                  data-delay="0.1s"
                  data-offset={100}
                >
                  <img
                    src="images/desktop-frame-about-centered.png"
                    alt
                    title
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
