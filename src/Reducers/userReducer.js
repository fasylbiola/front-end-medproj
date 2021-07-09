import {
  USER_INFO_FAILED,
  USER_INFO_SUCCESS,
  USER_INFO_REQUEST,
  USER_DESCRIPTION_FAILED,
  USER_DESCRIPTION_REQUEST,
  USER_DESCRIPTION_SUCCESS,
} from "../constant/userConstants";
export const userInfoReducer = (state = "", { payload, type }) => {
  switch (type) {
    case USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_INFO_SUCCESS:
      return {
        success: true,
        loading: false,
        userInfo: payload,
      };
    case USER_INFO_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const userDescriptionReducer = (state = "", { payload, type }) => {
  switch (type) {
    case USER_DESCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DESCRIPTION_SUCCESS:
      return {
        success: true,
        loading: false,
        usernameOrEmail: payload.username || payload.email,
        firstName: payload.first_name,
        lastName: payload.last_name,
        name: payload.name,
        userType: payload.usertype,
      };
    case USER_DESCRIPTION_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
