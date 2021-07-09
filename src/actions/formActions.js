import {
  FORM_DEFINITION_REQUEST,
  FORM_DEFINITION_FAILED,
  FORM_DEFINITION_SUCCESS,
} from "../constant/formConstants";

export const selectForm = (formDefinition) => async (dispatch) => {
  dispatch({ type: FORM_DEFINITION_REQUEST });

  if (formDefinition) {
    dispatch({ type: FORM_DEFINITION_SUCCESS, payload: formDefinition });
  } else {
    dispatch({ type: FORM_DEFINITION_FAILED, payload: "Error!" });
  }
};
