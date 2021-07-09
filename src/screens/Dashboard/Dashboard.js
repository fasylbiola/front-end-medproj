import React from "react";
import Header from "../../components/Headers";
import Summary from "../../components/Summary";
import Widgets from "../../components/Widgets";
import RecentPatientsActivity from "../../components/RecentPatientsActivity";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import CalendarDiseaseReportLatestReport from "../../components/CalendarDiseaseReportLatestReport";
import Sidebar from "../../components/Sidebar";
import $ from "jquery";
import Swiper from "swiper";

class Dashboard extends React.Component {
  componentDidMount() {
    // Sidebar resize
    $(".sidebar-resize").on("click", function (e) {
      $(this).toggleClass("enlarge");
      $("#sidebar").toggleClass("sidebar--dinamic");
      $(".sidebar-header__logo").toggleClass("logo--dinamic");
      $(".sidebar-menu").toggleClass("menu--dinamic");
      if (
        $(".sidebar-menu__submenu").hasClass("active") &&
        $("#sidebar").hasClass("sidebar--dinamic")
      ) {
        $(".sidebar-menu__submenu.active").slideUp();
      } else {
        $(".sidebar-menu__submenu.active").slideDown();
      }
    });

    // Panel resize
    $(".settings").on("click", function (e) {
      $("#panel").addClass("section-panel--dinamic");
    });
    $(".panel-resize").on("click", function (e) {
      $("#panel").removeClass("section-panel--dinamic");
    });

    if (typeof Swiper == "function") {
      var swiper = new Swiper(".appointments", {
        speed: 600,
        slidesPerView: "auto",
        spaceBetween: 0,
        pagination: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swipert = new Swiper(".timeline", {
        speed: 600,
        slidesPerView: "auto",
        spaceBetween: 0,
        pagination: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }

    // Mobile menu
    $(".mobile-menu").on("click", function (e) {
      $(".st-burger-icon").toggleClass("st-burger-icon--transformed");
      $("#sidebar").toggleClass("sidebar--open");
    });
    $(".mobile-submenu").on("click", function (e) {
      $(this).toggleClass("selected");
      $(".content-header__menu").toggleClass("active");
    });

    // Sidebar menu drop down accordion
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      var links = this.el.find(".has-submenu");
      links.on(
        "click",
        {
          el: this.el,
          multiple: this.multiple,
        },
        this.dropdown
      );
    };

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      var $this = $(this),
        $next = $(this).children(".sidebar-menu__submenu");

      $next.slideToggle();
      $this.toggleClass("open");
      $next.toggleClass("active");

      if (!e.data.multiple) {
        $el.find(".sidebar-menu__submenu").not($next).slideUp();
        $el.find(".sidebar-menu__submenu").not($next).removeClass("active");
        $(".sidebar-menu ul li").not($this).removeClass("open");
      }
    };
    var accordion = new Accordion($(".sidebar-menu"), false);

    // Dinamic sidebar on mouse enter
    $(".dashboard-wrap").on("mouseenter", ".sidebar--dinamic", function () {
      $("#sidebar").addClass("sidebar--dinamic-large");
      $(".sidebar-header__logo").addClass("logo--dinamic-show");
      $(".sidebar-menu").addClass("menu--dinamic-show");
      $(".sidebar-menu ul li a b").each(function (i) {
        $(this).css("transition-delay", i / 10 + "s");
      });
      $(".sidebar-menu__submenu.active").slideDown();
    });
    $(".dashboard-wrap").on("mouseleave", ".sidebar--dinamic", function () {
      $("#sidebar").removeClass("sidebar--dinamic-large");
      $(".sidebar-header__logo").removeClass("logo--dinamic-show");
      $(".sidebar-menu").removeClass("menu--dinamic-show");
      $(".sidebar-menu ul li a b").css("transition-delay", "0s");
      $(".sidebar-menu__submenu.active").slideUp();
    });

    // Drop down menu used in sections content
    $(".content-header").on(
      "click",
      ".content-header__dropdown-activate",
      function (e) {
        $(".content-header__dropdown-activate").removeClass("selected");
        $(".content-header__menu").removeClass("active");
        $(".mobile-submenu").removeClass("selected");

        var dropdownid = $(this).data("dropdown");
        if ($("#" + dropdownid).hasClass("active")) {
          $("#" + dropdownid).removeClass("active");
          $(this).removeClass("selected");
        } else {
          $(".dropdown-menu").removeClass("active");
          $("#" + dropdownid).addClass("active");
          $(this).addClass("selected");
        }
      }
    );

    $(".content-header__dropdown").hover(
      function () {
        $(this).addClass("hovered");
      },
      function () {
        $(this).removeClass("hovered");
      }
    );

    $(".section--content").on("click", ".has-dropdown", function (e) {
      var dropdownid = $(this).data("dropdown");
      if ($("#" + dropdownid).hasClass("active")) {
        $("#" + dropdownid).removeClass("active");
      } else {
        $(".dropdown-menu").removeClass("active");
        $("#" + dropdownid).addClass("active");
      }
    });

    $(".dropdown-menu--content").hover(
      function () {
        $(this).addClass("hovered");
      },
      function () {
        $(this).removeClass("hovered");
      }
    );

    $("body").click(function (e) {
      if (
        !$(e.target).is(".content-header__dropdown") &&
        !$(".content-header__dropdown").hasClass("hovered")
      ) {
        $(".dropdown-menu--header").removeClass("active");
        $(".content-header__dropdown-activate").removeClass("selected");
      }
      if (
        !$(e.target).is(".has-dropdown") &&
        !$(".dropdown-menu--content").hasClass("hovered")
      ) {
        $(".dropdown-menu--content").removeClass("active");
      }
    });

    // Notifications icon animation
    setInterval(function () {
      $(".content-header__notifications-icon").toggleClass("alert");
    }, 2000);
    $(".content-header__notifications-icon").hover(function () {
      $(this).addClass("alert");
    });

    // Switcher button
    $(".switcher__button").on("click", function (e) {
      $(this).toggleClass("switcher__button--enabled");
    });

    // Modal login and signup
    $(".modal-toggle").on("click", function (e) {
      e.preventDefault();
      var modalopen = $(this).data("openpopup");
      $(".modal--" + modalopen).toggleClass("modal--visible");
    });

    $(".modal__overlay--toggle").on("click", function (e) {
      e.preventDefault();
      $(".modal").removeClass("modal--visible");
    });

    // Messages
    $(".message__short").on("click", function (e) {
      $(".message__short").removeClass("selected");
      $(this).toggleClass("selected");
    });
  }
  render() {
    return (
      <div className="dashboard-wrap">
        <header class="sidebar-header">
          <h1 class="sidebar-header__logo">
            m
            <span>
              edi<strong>kit</strong>
            </span>
          </h1>
        </header>
        <Sidebar />
        <div class="section section--content" id="content">
          <Header />
          <div class="grid grid--margin">
            <Summary />
            <Widgets />
            <RecentPatientsActivity />
            <UpcomingAppointments />
            <CalendarDiseaseReportLatestReport />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
