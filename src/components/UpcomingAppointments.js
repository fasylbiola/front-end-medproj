import React from "react";

const UpcomingAppointments = () => {
  return (
    <div>
      <div class="grid__row grid__row--d-block">
        <div class="grid__col grid__col--margin grid__col--padding bg-white">
          <div class="grid__row justify-sb">
            <div class="grid__col grid__col--mb-12">
              <h3 class="grid__col-title">Upcoming Appointments</h3>
              <span class="grid__col-subtitle">
                01 FEBRUARY - 31 MARCH 2019
              </span>
            </div>
            <div class="grid__col grid__col--mb-12 d-flex justify-fe aligns-fs">
              <span
                class="show-more show-more--select show-more--select-gray has-dropdown"
                data-dropdown="upappointdropdown"
              >
                Select Period
              </span>
            </div>
          </div>

          <nav
            class="dropdown-menu dropdown-menu--content"
            id="upappointdropdown"
          >
            <ul>
              <li>
                <a href="#">Last 7 days</a>
              </li>
              <li>
                <a href="#">Last 2 weeks</a>
              </li>
              <li>
                <a href="#">Last month</a>
              </li>
              <li>
                <a href="#">+ Custom</a>
              </li>
            </ul>
          </nav>
          <div class="appointments">
            <div class="appointments__button--next swiper-button-next"></div>
            <div class="appointments__button--prev swiper-button-prev"></div>

            <div class="appointments__content swiper-wrapper">
              <div class="appointments__slide swiper-slide selected selected--blue">
                <div class="appointment__time" id="time-user1"></div>
                <div class="appointment__header">
                  <div class="appointment__thumb">
                    <img src="images/avatar-1.jpg" alt="" title="" />
                  </div>
                  <div class="appointment__header-details">
                    <div class="appointment__username">Patrick Alexander</div>
                    <div class="appointment__user-email">
                      <a href="mailto:email@website.com">email@website.com</a>
                    </div>
                  </div>
                </div>
                <div class="appointment__content">
                  <div class="appointment__info-content icon-doctor">
                    Dermatology, Dr. Joshua A.
                  </div>
                  <div class="appointment__info-content icon-location">
                    54 Medical Center, Room 34
                  </div>
                  <div class="appointment__info-content icon-calendar">
                    Tuesday, February 09, 2019
                  </div>
                  <div class="appointment__info-content icon-clock">
                    <strong>10:00 - 10:30</strong>
                  </div>
                </div>
                <div class="appointment__buttons">
                  <button class="appointment__button appointment__button--confirm">
                    Confirm
                  </button>
                  <button class="appointment__button appointment__button--cancel">
                    Cancel
                  </button>
                </div>
              </div>

              <div class="appointments__slide swiper-slide">
                <div class="appointment__time" id="time-user2"></div>
                <div class="appointment__header">
                  <div class="appointment__thumb">
                    <img src="images/avatar-2.jpg" alt="" title="" />
                  </div>
                  <div class="appointment__header-details">
                    <div class="appointment__username">Jada Sacks</div>
                    <div class="appointment__user-phone">
                      <a href="tel:889400322">+889 400322</a>
                    </div>
                  </div>
                </div>
                <div class="appointment__content">
                  <div class="appointment__info-content icon-doctor">
                    Cardiology, Dr. Michael V.
                  </div>
                  <div class="appointment__info-content icon-location">
                    T600 Medical Center, Room 2
                  </div>
                  <div class="appointment__info-content icon-calendar">
                    Wednesday, February 18, 2019
                  </div>
                  <div class="appointment__info-content icon-clock">
                    <strong>08:00 - 09:30</strong>
                  </div>
                </div>
                <div class="appointment__buttons">
                  <button class="appointment__button appointment__button--confirm">
                    Confirm
                  </button>
                  <button class="appointment__button appointment__button--cancel">
                    Cancel
                  </button>
                </div>
              </div>

              <div class="appointments__slide swiper-slide">
                <div class="appointment__header">
                  <div class="appointment__thumb">
                    <img src="images/avatar-3.jpg" alt="" title="" />
                  </div>
                  <div class="appointment__header-details">
                    <div class="appointment__username">Jenifer Vandebild</div>
                    <div class="appointment__user-email">
                      <a href="mailto:email@website.com">
                        jenifer@vanderbild.com
                      </a>
                    </div>
                  </div>
                </div>
                <div class="appointment__content">
                  <div class="appointment__info-content icon-doctor">
                    Gastroenterology, Dr. Joshua A.
                  </div>
                  <div class="appointment__info-content icon-location">
                    54 Medical Center, Room 34
                  </div>
                  <div class="appointment__info-content icon-calendar">
                    Friday, February 09, 2019
                  </div>
                  <div class="appointment__info-content icon-clock">
                    <strong>10:00 - 10:30</strong>
                  </div>
                </div>
                <div class="appointment__buttons">
                  <button class="appointment__button appointment__button--confirm">
                    Confirm
                  </button>
                  <button class="appointment__button appointment__button--cancel">
                    Cancel
                  </button>
                </div>
              </div>

              <div class="appointments__slide swiper-slide">
                <div class="appointment__header">
                  <div class="appointment__thumb">
                    <img src="images/avatar-4.jpg" alt="" title="" />
                  </div>
                  <div class="appointment__header-details">
                    <div class="appointment__username">Michael Smith</div>

                    <div class="appointment__user-phone">
                      <a href="tel:889400322">+781 554689</a>
                    </div>
                  </div>
                </div>
                <div class="appointment__content">
                  <div class="appointment__info-content icon-doctor">
                    Endocrinology, Dr. Joshua A.
                  </div>
                  <div class="appointment__info-content icon-location">
                    83 Medical Center, Room 01
                  </div>
                  <div class="appointment__info-content icon-calendar">
                    Wednesday, February 28, 2019
                  </div>
                  <div class="appointment__info-content icon-clock">
                    <strong>09:30 - 10:30</strong>
                  </div>
                </div>
                <div class="appointment__buttons">
                  <button class="appointment__button appointment__button--confirm">
                    Confirm
                  </button>
                  <button class="appointment__button appointment__button--cancel">
                    Cancel
                  </button>
                </div>
              </div>

              <div class="appointments__slide swiper-slide">
                <div class="appointment__header">
                  <div class="appointment__thumb">
                    <img src="images/avatar-5.jpg" alt="" title="" />
                  </div>
                  <div class="appointment__header-details">
                    <div class="appointment__username">Sarah Smithson</div>
                    <div class="appointment__user-email">
                      <a href="mailto:email@website.com">sarah@smitson.com</a>
                    </div>
                  </div>
                </div>
                <div class="appointment__content">
                  <div class="appointment__info-content icon-doctor">
                    Orthodontics, Dr. Victoria B.
                  </div>
                  <div class="appointment__info-content icon-location">
                    54 Medical Center, Room 34
                  </div>
                  <div class="appointment__info-content icon-calendar">
                    Monday, February 28, 2019
                  </div>
                  <div class="appointment__info-content icon-clock">
                    <strong>10:00 - 10:30</strong>
                  </div>
                </div>
                <div class="appointment__buttons">
                  <button class="appointment__button appointment__button--confirm">
                    Confirm
                  </button>
                  <button class="appointment__button appointment__button--cancel">
                    Cancel
                  </button>
                </div>
              </div>

              <div class="appointments__slide swiper-slide">
                <div class="appointment__header">
                  <div class="appointment__thumb">
                    <img src="images/avatar-6.jpg" alt="" title="" />
                  </div>
                  <div class="appointment__header-details">
                    <div class="appointment__username">Alicia Kimston</div>
                    <div class="appointment__user-phone">
                      <a href="tel:889400322">+333 400322</a>
                    </div>
                  </div>
                </div>
                <div class="appointment__content">
                  <div class="appointment__info-content icon-doctor">
                    Neonatology, Dr. Alexa A.
                  </div>
                  <div class="appointment__info-content icon-location">
                    54 Medical Center, Room 34
                  </div>
                  <div class="appointment__info-content icon-calendar">
                    Tuesday, March 01, 2019
                  </div>
                  <div class="appointment__info-content icon-clock">
                    <strong>10:00 - 10:30</strong>
                  </div>
                </div>
                <div class="appointment__buttons">
                  <button class="appointment__button appointment__button--confirm">
                    Confirm
                  </button>
                  <button class="appointment__button appointment__button--cancel">
                    Cancel
                  </button>
                </div>
              </div>

              <div class="appointments__slide swiper-slide">
                <div class="appointment__header">
                  <div class="appointment__thumb">
                    <img src="images/avatar-7.jpg" alt="" title="" />
                  </div>
                  <div class="appointment__header-details">
                    <div class="appointment__username">Duran Jackson</div>
                    <div class="appointment__user-email">
                      <a href="mailto:email@website.com">duran@jackson.com</a>
                    </div>
                  </div>
                </div>
                <div class="appointment__content">
                  <div class="appointment__info-content icon-doctor">
                    Psychiatry, Dr. Aby D.
                  </div>
                  <div class="appointment__info-content icon-location">
                    Main Hospital Center, Room 12, 3'rd fl
                  </div>
                  <div class="appointment__info-content icon-calendar">
                    Friday, March 12, 2019
                  </div>
                  <div class="appointment__info-content icon-clock">
                    <strong>14:00 - 15:30</strong>
                  </div>
                </div>
                <div class="appointment__buttons">
                  <button class="appointment__button appointment__button--confirm">
                    Confirm
                  </button>
                  <button class="appointment__button appointment__button--cancel">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
