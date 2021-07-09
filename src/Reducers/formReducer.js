import {
  FORM_DEFINITION_REQUEST,
  FORM_DEFINITION_FAILED,
  FORM_DEFINITION_SUCCESS,
} from "../constant/formConstants";

export const formReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FORM_DEFINITION_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case FORM_DEFINITION_SUCCESS:
      return {
        loading: false,
        form: payload,
      };
    case FORM_DEFINITION_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
