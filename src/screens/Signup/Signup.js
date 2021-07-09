import React from "react";

const Signup = () => {
  return (
    <div class="grid grid--margin bg-white">
      <div class="grid__row">
        <div class="grid__col grid__col--padding">
          <h3 class="grid__col-title">Form input size</h3>
        </div>
      </div>
      <div class="grid__row grid__row--margin">
        <div class="grid__col grid__col--margin">
          <label class="form__label">FULL WIDTH</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
      </div>
      <div class="grid__row grid__row--margin">
        <div class="grid__col grid__col--12 grid__col--margin">
          <label class="form__label">INPUT 1/2</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
        <div class="grid__col grid__col--12 grid__col--margin">
          <label class="form__label">INPUT 1/2</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
      </div>
      <div class="grid__row grid__row--margin">
        <div class="grid__col grid__col--13 grid__col--margin">
          <label class="form__label">INPUT 1/3</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
        <div class="grid__col grid__col--13 grid__col--margin">
          <label class="form__label">INPUT 1/3</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
        <div class="grid__col grid__col--13 grid__col--margin">
          <label class="form__label">INPUT 1/3</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
      </div>
      <div class="grid__row grid__row--margin">
        <div class="grid__col grid__col--14 grid__col--margin">
          <label class="form__label">INPUT 1/4</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
        <div class="grid__col grid__col--14 grid__col--margin">
          <label class="form__label">INPUT 1/4</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
        <div class="grid__col grid__col--14 grid__col--margin">
          <label class="form__label">INPUT 1/4</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
        <div class="grid__col grid__col--14 grid__col--margin">
          <label class="form__label">INPUT 1/4</label>
          <input
            name="input"
            id="input"
            class="form__input required"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
