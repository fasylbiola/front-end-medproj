import React from "react";

class AboutFour extends React.Component {
  render() {
    return (
      <section className="section section--about" id="about2">
        <div className="\n    section__content section__content--fluid-width section__content--about\n  ">
          <div className="grid grid--about">
            <div className="grid__row">
              <div className="grid__col grid__col--25">
                <h3 className="grid__title">
                  Instant messaging with <span>chat module integration</span>.
                </h3>
                <p className="grid__text">
                  Choose between multiple unique designs and easy integrate
                  elements from one design to another. Following the latest
                  design trends.
                </p>
                <ul className="grid__list">
                  <li>Elements from one design to another</li>
                  <li>Following the latest design trends</li>
                  <li>Reuse the elements from one design to another</li>
                </ul>
              </div>
              <div className="grid__col grid__col--35">
                <div className="grid__image grid__image--right">
                  <img src="images/desktop-frame-about-3.png" alt title />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutFour;
