import React from "react";

class Support extends React.Component {
  render() {
    return (
      <section className="section section--support" id="support">
        <div className="\n    section__content\n    section__content--fluid-width\n    section__content--padding\n  ">
          <div className="grid grid--support">
            <div className="grid__row">
              <div className="grid__col">
                <h3 className="grid__title">Get started for free today!</h3>
                <p className="grid__text">
                  Find out what MEDIKIT can do for your business
                </p>
              </div>
              <div className="grid__col">
                <a href="#" className="grid__more">
                  REQUEST A FREE DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Support;
