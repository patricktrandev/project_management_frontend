import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { projectReducer } from "./reducers/projectReducer";

const reducer = combineReducers({
  authReducer: authReducer,
  projectReducer: projectReducer,
});

let initialState = {};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
