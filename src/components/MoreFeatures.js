import React from "react";

class MoreFeatures extends React.Component {
  render() {
    return (
      <section className="section section--more-features" id="morefeatures">
        <div className="section__content section__content--fluid-width">
          <h2 className="section__title section__title--centered">
            More features
          </h2>
          <div className="section__description section__description--centered">
            We believe we have created the most creative Medical UI Kit existing
            on the market this time. Dashboard pages with features that will
            convince you to use it for your Medical business.
          </div>
          <div className="grid grid--more-features">
            <div className="grid__row">
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img
                    src="images/icons/icons-64-blue/security.png"
                    alt
                    title
                  />
                </div>
                <h3 className="grid__title">
                  <span>Reliable </span>and secure
                </h3>
              </div>
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img
                    src="images/icons/icons-64-blue/credit-card.png"
                    alt
                    title
                  />
                </div>
                <h3 className="grid__title">
                  Secure <span>payment</span>
                </h3>
              </div>
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img
                    src="images/icons/icons-64-blue/location.png"
                    alt
                    title
                  />
                </div>
                <h3 className="grid__title">
                  Location <span>detection and maps</span>
                </h3>
              </div>
            </div>
            <div className="grid__row">
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img src="images/icons/icons-64-blue/users.png" alt title />
                </div>
                <h3 className="grid__title">
                  User <span>friendly interface</span>
                </h3>
              </div>
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img
                    src="images/icons/icons-64-blue/calendar.png"
                    alt
                    title
                  />
                </div>
                <h3 className="grid__title">
                  Calendar <span>widget</span>
                </h3>
              </div>
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img src="images/icons/icons-64-blue/doctors.png" alt title />
                </div>
                <h3 className="grid__title">
                  <span>Add manage </span>doctors and patients
                </h3>
              </div>
            </div>
            <div className="grid__row">
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img src="images/icons/icons-64-blue/reports.png" alt title />
                </div>
                <h3 className="grid__title">
                  Charts and <span>Reports</span>
                </h3>
              </div>
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img src="images/icons/icons-64-blue/chat.png" alt title />
                </div>
                <h3 className="grid__title">
                  Chat and conversations <span>module</span>
                </h3>
              </div>
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img
                    src="images/icons/icons-64-blue/laboratory.png"
                    alt
                    title
                  />
                </div>
                <h3 className="grid__title">
                  Medical <span>widgets and modules</span>
                </h3>
              </div>
            </div>
            <div className="grid__row">
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img src="images/icons/icons-64-blue/support.png" alt title />
                </div>
                <h3 className="grid__title">
                  Online <span>support</span>
                </h3>
              </div>
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img src="images/icons/icons-64-blue/filters.png" alt title />
                </div>
                <h3 className="grid__title">
                  Options and settings <span>sidebar</span>
                </h3>
              </div>
              <div className="grid__col grid__col--margin grid__col--13">
                <div className="grid__icon">
                  <img
                    src="images/icons/icons-64-blue/messages-sent.png"
                    alt
                    title
                  />
                </div>
                <h3 className="grid__title">
                  Fast messaging <span>support</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MoreFeatures;
