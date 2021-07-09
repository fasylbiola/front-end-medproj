import React from "react";

class Clients extends React.Component {
  render() {
    return (
      <section className="section section--clients" id="clients">
        <div className="section__content section__content--fluid-width">
          <h2 className="\n      section__title section__title--smaller section__title--centered\n    ">
            Successfully used by
          </h2>
          <div className="grid grid--clients">
            <div className="grid__row">
              <div className="grid__col grid__col--margin grid__col--15">
                <div className="grid__client-logo">
                  <a href="#">
                    <img src="images/clients/clients-logo1.png" alt title />
                  </a>
                </div>
              </div>
              <div className="grid__col grid__col--margin grid__col--15">
                <div className="grid__client-logo">
                  <a href="#">
                    <img src="images/clients/clients-logo2.png" alt title />
                  </a>
                </div>
              </div>
              <div className="grid__col grid__col--margin grid__col--15">
                <div className="grid__client-logo">
                  <a href="#">
                    <img src="images/clients/clients-logo3.png" alt title />
                  </a>
                </div>
              </div>
              <div className="grid__col grid__col--margin grid__col--15">
                <div className="grid__client-logo">
                  <a href="#">
                    <img src="images/clients/clients-logo4.png" alt title />
                  </a>
                </div>
              </div>
              <div className="grid__col grid__col--margin grid__col--15">
                <div className="grid__client-logo">
                  <a href="#">
                    <img src="images/clients/clients-logo5.png" alt title />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Clients;
