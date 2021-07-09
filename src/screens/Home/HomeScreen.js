import React from "react";
import About from "../../components/About";
import AboutTwo from "../../components/AboutTwo";
import AboutThree from "../../components/AboutThree";
import AboutFour from "../../components/AboutFour";
import Intro from "../../components/Intro/Intro";
import IndexHeader from "../../components/IndexHeader";
import Footer from "../../components/Footer";
import Features from "../../components/Features";
import MoreFeatures from "../../components/MoreFeatures";
import ModalLoginSignup from "../../components/ModalLoginSignup";
import Clients from "../../components/Clients";
import Testimonial from "../../components/Testimonials";

import Support from "../../components/Support";
import $ from "jquery";
import Swiper from "swiper";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var swiper = new Swiper(".testimonials", {
      speed: 600,
      slidesPerView: "auto",
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    });
  }
  render() {
    return (
      <div>
        <IndexHeader />
        <Intro history={this.props.history} />
        <Features />
        <About />
        <AboutTwo />
        <AboutThree />
        <AboutFour />
        <Clients />
        <MoreFeatures />
        <Testimonial />
        <Footer />
        <ModalLoginSignup />
      </div>
    );
  }
}

export default HomeScreen;
