import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <div className="\n    footer__content footer__content--fluid-width footer__content--padding\n  ">
          <div className="grid grid--footer">
            <div className="grid__row">
              <div className="grid__col grid__col--margin grid__col--25">
                <h3 className="grid__title grid__title--footer-logo">
                  MEDIKIT
                </h3>
                <p className="grid__text grid__text--copyright">
                  Copyright © 2018 SmartTemplate.net. <br />
                  All Rights Reserved.
                </p>
                <ul className="grid__list grid__list--sicons">
                  <li>
                    <a href="#">
                      <img src="images/social/white/twitter.png" alt title />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/social/white/facebook.png" alt title />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/social/white/linkedin.png" alt title />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid__col grid__col--margin grid__col--15">
                <h3 className="grid__title grid__title--footer">Company</h3>
                <ul className="grid__list grid__list--fmenu">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Carrers</a>
                  </li>
                  <li>
                    <a href="#">Awards</a>
                  </li>
                  <li>
                    <a href="#">Users Program</a>
                  </li>
                  <li>
                    <a href="#">Locations</a>
                  </li>
                </ul>
              </div>
              <div className="grid__col grid__col--margin grid__col--15">
                <h3 className="grid__title grid__title--footer">Products</h3>
                <ul className="grid__list grid__list--fmenu">
                  <li>
                    <a href="#">Integrations</a>
                  </li>
                  <li>
                    <a href="#">API</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Release Notes</a>
                  </li>
                </ul>
              </div>
              <div className="grid__col grid__col--margin grid__col--15">
                <h3 className="grid__title grid__title--footer">Support</h3>
                <ul className="grid__list grid__list--fmenu">
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
