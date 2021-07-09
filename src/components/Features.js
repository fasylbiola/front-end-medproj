import React from "react";

class Features extends React.Component {
  render() {
    return (
      <section className="section section--features" id="features">
        <div className="section__content section__content--fluid-width">
          <h2 className="section__title section__title--centered">
            Key features
          </h2>
          <div className="section__description section__description--centered">
            We believe we have created the most creative Medical UI Kit existing
            on the market this time. Dashboard pages with features that will
            convince you to use it for your Medical business.
          </div>
          <div className="grid grid--features">
            <div className="grid__row">
              <div className="grid__col grid__col--13 grid__col--margin">
                <div className="grid__icon">
                  <img
                    src="images/icons/icons-96-blue/responsive.png"
                    alt
                    title
                  />
                </div>
                <h3 className="grid__title">
                  <span>Mobile</span> Ready
                </h3>
                <p className="grid__text">
                  Responsive code that makes your landing page look good on all
                  devices (desktops, tablets, and phones). Created with mobile
                  specialists.
                </p>
              </div>
              <div className="grid__col grid__col--13 grid__col--margin">
                <div className="grid__icon">
                  <img
                    src="images/icons/icons-96-blue/analysis.png"
                    alt
                    title
                  />
                </div>
                <h3 className="grid__title">
                  Unique Medical <span>Sections</span>
                </h3>
                <p className="grid__text">
                  A perfect structure created after we analized trends in
                  Medical applications. Analysis made to the most popular
                  Medical businesses.
                </p>
              </div>
              <div className="grid__col grid__col--13 grid__col--margin">
                <div className="grid__icon">
                  <img src="images/icons/icons-96-blue/grid.png" alt title />
                </div>
                <h3 className="grid__title">
                  Smart <span>BEM</span> Grid
                </h3>
                <p className="grid__text">
                  Blocks, Elements and Modifiers. A smart HTML/CSS structure
                  that can easely be reused. Layout driven by the purpose of
                  modularity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
