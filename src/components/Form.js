import React from "react";
import Spinner from "./Spinner/Spinner";
import { useSelector } from "react-redux";
import Doctor from "./Forms/Doctor";
import Hospital from "./Forms/Hospital";
import Patient from "./Forms/Patient";
import Pharmacy from "./Forms/Pharmacy";
import Lab from "./Forms/Lab";

const Form = () => {
  const { form: formInfo, loading } = useSelector((state) => state.forms);

  switch (formInfo) {
    case "Doctor":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            className="color-blue"
            style={{ flexGrow: 1, backgroundColor: "#5616f5" }}
          >
            <div
              style={{
                flexGrow: 1,
                backgroundColor: "#5616f5",
                padding: "15px",
              }}
            >
              <h2 style={{ color: "white" }}>First time here?</h2>
              <ul class="modal__list" style={{ color: "white" }}>
                <li>premium access to all products</li>
                <li>free testing tools</li>
                <li>unlimited user accounts</li>
              </ul>
              <button
                class="modal__switch modal__switch--signup"
                data-popup="signup"
              >
                Signup
              </button>
            </div>
          </div>
          <div style={{ flexGrow: 1 }}>
            <Doctor />
          </div>
        </div>
      );
    case "Hospital":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            className="color-blue"
            style={{ flexGrow: 1, backgroundColor: "#5616f5" }}
          >
            <div
              style={{
                flexGrow: 1,
                backgroundColor: "#5616f5",
                padding: "15px",
              }}
            >
              <h2 style={{ color: "white" }}>First time here?</h2>
              <ul class="modal__list" style={{ color: "white" }}>
                <li>premium access to all products</li>
                <li>free testing tools</li>
                <li>unlimited user accounts</li>
              </ul>
              <button
                class="modal__switch modal__switch--signup"
                data-popup="signup"
              >
                Signup
              </button>
            </div>
          </div>
          <div style={{ flexGrow: 1 }}>
            <Hospital />;
          </div>
        </div>
      );
    case "Lab":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            className="color-blue"
            style={{ flexGrow: 1, backgroundColor: "#5616f5" }}
          >
            <div
              style={{
                flexGrow: 1,
                backgroundColor: "#5616f5",
                padding: "15px",
              }}
            >
              <h2 style={{ color: "white" }}>First time here?</h2>
              <ul class="modal__list" style={{ color: "white" }}>
                <li>premium access to all products</li>
                <li>free testing tools</li>
                <li>unlimited user accounts</li>
              </ul>
              <button
                class="modal__switch modal__switch--signup"
                data-popup="signup"
              >
                Signup
              </button>
            </div>
          </div>
          <div style={{ flexGrow: 1 }}>
            <Lab />
          </div>
        </div>
      );
    case "Patient":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            className="color-blue"
            style={{ flexGrow: 1, backgroundColor: "#5616f5" }}
          >
            <div
              style={{
                flexGrow: 1,
                backgroundColor: "#5616f5",
                padding: "15px",
              }}
            >
              <h2 style={{ color: "white" }}>First time here?</h2>
              <ul class="modal__list" style={{ color: "white" }}>
                <li>premium access to all products</li>
                <li>free testing tools</li>
                <li>unlimited user accounts</li>
              </ul>
              <button
                class="modal__switch modal__switch--signup"
                data-popup="signup"
              >
                Signup
              </button>
            </div>
          </div>
          <div style={{ flexGrow: 1 }}>
            <Patient />;
          </div>
        </div>
      );
    case "Pharmacy":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            className="color-blue"
            style={{ flexGrow: 1, backgroundColor: "#5616f5" }}
          >
            <div
              style={{
                flexGrow: 1,
                backgroundColor: "#5616f5",
                padding: "15px",
              }}
            >
              <h2 style={{ color: "white" }}>First time here?</h2>
              <ul class="modal__list" style={{ color: "white" }}>
                <li>premium access to all products</li>
                <li>free testing tools</li>
                <li>unlimited user accounts</li>
              </ul>
              <button
                class="modal__switch modal__switch--signup"
                data-popup="signup"
              >
                Signup
              </button>
            </div>
          </div>
          <div style={{ flexGrow: 1 }}>
            <Pharmacy />
          </div>
        </div>
      );
    default:
      return <Spinner />;
  }
};

export default Form;
