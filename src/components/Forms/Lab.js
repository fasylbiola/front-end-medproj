import React from "react";

const Lab = () => {
  return (
    <form className="dashboard-wrap">
      <div class="grid grid--margin bg-white">
        <div class="grid__row">
          <div class="grid__col grid__col--padding">
            <h3 style={{ fontSize: "340%" }} class="grid__col-title color-blue">
              Laboratory
            </h3>
          </div>
        </div>
        <hr
          style={{ width: "94%", height: "2px", backgroundColor: "#5616f5" }}
        />
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--margin">
            <label class="form__label">Name</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Username</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
            />

            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Address</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Registration Number</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--12 grid__col--margin">
            <label class="form__label">Phone number</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="email"
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--12 grid__col--margin">
            <label class="form__label">Contact Person</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="password"
            />
            <span class="form__row-border"></span>
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Email</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Services</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--13 grid__col--margin">
            <label class="form__label">Bank</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
            />
            <span class="form__row-border"></span>
          </div>
        </div>

        <div class="grid__row grid__row--margin">
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Password</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Bankcode</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
            />
            <span class="form__row-border"></span>
          </div>
          <div class="grid__col grid__col--14 grid__col--margin">
            <label class="form__label">Role</label>
            <input
              name="input"
              id="input"
              class="form__input required"
              type="text"
              value="Laboratory"
              disabled={true}
            />
          </div>
        </div>
        <div class="grid__row grid__row--margin">
          <input type="submit" className="btn btn--blue-bg" value="Submit" />
        </div>
      </div>
    </form>
  );
};

export default Lab;
