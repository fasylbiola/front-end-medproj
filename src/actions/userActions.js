import axios from "axios";
import {
  USER_INFO_FAILED,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_DESCRIPTION_FAILED,
  USER_DESCRIPTION_REQUEST,
  USER_DESCRIPTION_SUCCESS,
} from "../constant/userConstants";

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: USER_INFO_REQUEST });
  try {
    const options = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:8080/api/auth/signin",
      user,
      options
    );
    console.log(user);
    dispatch({ type: USER_INFO_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(user.usernameOrEmail));
  } catch (e) {
    console.log(e.response.data.message);
    dispatch({ type: USER_INFO_FAILED, payload: e.response.data.message });
  }
};
export const getUser = (usernameOrEmail) => async (dispatch) => {
  dispatch({ type: USER_DESCRIPTION_REQUEST });
  try {
    const { data } = await axios.get(
      `http://localhost:8080/api/auth/hospby/${usernameOrEmail}`
    );
    dispatch({ type: USER_DESCRIPTION_SUCCESS, payload: data });
  } catch (e) {
    console.log(e.response);
    dispatch({
      type: USER_DESCRIPTION_FAILED,
      payload: e.response.data.message,
    });
  }
};
