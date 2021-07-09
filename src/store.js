import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { formReducer } from "./Reducers/formReducer";
import {
  userDescriptionReducer,
  userInfoReducer,
} from "./Reducers/userReducer";

const reducer = combineReducers({
  forms: formReducer,
  userInfo: userInfoReducer,
  userDescription: userDescriptionReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
