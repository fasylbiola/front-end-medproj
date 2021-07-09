import React from "react";

const Widgets = () => {
  return (
    <div>
      <div class="grid__row">
        <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-blue widget-icon selected">
          <span class="widget-icon__badge">3 NEW</span>
          <img src="images/icons/icons-64-white/chat.png" alt="" title="" />
          <h5>Active Conversations</h5>
        </div>
        <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-lightblue widget-icon selected">
          <span class="widget-icon__badge">14 NEW</span>
          <img
            src="images/icons/icons-64-white/laboratory.png"
            alt=""
            title=""
          />
          <h5>Laboratory Results</h5>
        </div>
        <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-pink widget-icon selected">
          <span class="widget-icon__badge">2 NEW</span>
          <img src="images/icons/icons-64-white/calendar.png" alt="" title="" />
          <h5>New Events</h5>
        </div>
        <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding bg-white widget-icon">
          <img src="images/icons/icons-64-blue/users.png" alt="" title="" />
          <h5>Important Patients</h5>
        </div>
        <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding bg-white widget-icon">
          <img src="images/icons/icons-64-blue/reports.png" alt="" title="" />
          <h5>Reports Archive</h5>
        </div>
        <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding bg-white widget-icon">
          <img src="images/icons/icons-64-blue/payments.png" alt="" title="" />
          <h5>Payments</h5>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
