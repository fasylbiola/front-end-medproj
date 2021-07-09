import React from "react";

class AboutTwo extends React.Component {
  render() {
    return (
      <section className="section section--about" id="about">
        <div className="\n    section__content section__content--fluid-width section__content--about\n  ">
          <div className="grid grid--about">
            <div className="grid__row">
              <div className="grid__col grid__col--25">
                <h3 className="grid__title">
                  Easy appointment scheduling with the
                  <span>intelligent BEM interface</span>
                </h3>
                <p className="grid__text">
                  Blocks, Elements and Modifiers. A smart HTML/CSS structure
                  that can easely be reused. Layout driven by the purpose of
                  modularity.
                </p>
                <ul className="grid__list">
                  <li>Simple and Smart HTML code</li>
                  <li>Works reintegrated in any part of the layout</li>
                  <li>Reuse the elements from one design to another</li>
                </ul>
              </div>
              <div className="grid__col grid__col--35">
                <div className="grid__image grid__image--right">
                  <img src="images/desktop-frame-about.png" alt title />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutTwo;
