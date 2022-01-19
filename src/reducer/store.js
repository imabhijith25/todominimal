import { combineReducers } from "redux";
import { todoReducer, selectedReducer } from "./reducer";
// const store = createStore(
//   todoReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;
const reducers = combineReducers({
  todoReducer,
  selectedReducer
});

export default reducers;
