import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { getAccessToken } from "./services/api-user-service";
import { AuthUser } from "./store/action-creators/userActions";

const token = getAccessToken();
if (token) {
  AuthUser(token, "Loaded from index", store.dispatch);
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
