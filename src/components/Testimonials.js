import React from "react";

class Testimonials extends React.Component {
  render() {
    return (
      <section className="section section--testimonials" id="testimonials">
        <div className="\n    section__content\n    section__content--fluid-width\n    section__content--padding\n  ">
          <h2 className="section__title section__title--centered">
            What our clients say
          </h2>
          <div className="testimonials">
            <div className="testimonials__content swiper-wrapper">
              <div className="testimonials__slide swiper-slide">
                <div
                  className="testimonials__thumb"
                  data-swiper-parallax="-50%"
                >
                  <img src="images/avatar-1.jpg" alt title />
                </div>
                <div
                  className="testimonials__text"
                  data-swiper-parallax="-100%"
                >
                  <p>
                    "FANTASTIC Customer support! I love the theme and it's
                    perfect for what I'm wanting. I wanted to make an element
                    have a link that wasn't originally linked and have that
                    customization and they were super helpful in making that
                    possible!
                    <br />
                    Great theme and great customer support! "
                  </p>
                </div>
                <div className="testimonials__source">
                  medical solutions
                  <a href="https://themeforest.net/user/smarttemplates/reviews?page=2">
                    USA
                  </a>
                </div>
              </div>
              <div className="testimonials__slide swiper-slide">
                <div
                  className="testimonials__thumb"
                  data-swiper-parallax="-50%"
                >
                  <img src="images/avatar-2.jpg" alt title />
                </div>
                <div
                  className="testimonials__text"
                  data-swiper-parallax="-100%"
                >
                  <p>
                    "Can praise the after-sales service enough. Communication
                    and technical help was great. Thanks guys!"
                  </p>
                </div>
                <div className="testimonials__source">
                  williak1
                  <a href="https://themeforest.net/user/smarttemplates/reviews?page=2">
                    Australia
                  </a>
                </div>
              </div>
              <div className="testimonials__slide swiper-slide">
                <div
                  className="testimonials__thumb"
                  data-swiper-parallax="-50%"
                >
                  <img src="images/avatar-3.jpg" alt title />
                </div>
                <div
                  className="testimonials__text"
                  data-swiper-parallax="-100%"
                >
                  <p>
                    "Product is easily configurable and the Customer Support has
                    been outstanding.I couldn't be happier! "
                  </p>
                </div>
                <div className="testimonials__source">
                  dluczywo
                  <a href="https://themeforest.net/user/smarttemplates/reviews?page=2">
                    United Kingdom
                  </a>
                </div>
              </div>
            </div>
            <div className="testimonials__pagination swiper-pagination" />
          </div>
          <div className="clear" />
        </div>
      </section>
    );
  }
}

export default Testimonials;
