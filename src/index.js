import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import reducers from "./reducer/store";
import App from "./App";
import { createStore } from "redux";

const rootElement = document.getElementById("root");
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
