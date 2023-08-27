import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import i18n from "./i18n.js";
import { I18nextProvider } from 'react-i18next';

// Get the selected language from localStorage
const selectedLanguage = localStorage.getItem("selectedLanguage");

// Set the initial language in i18n
if (selectedLanguage) {
  i18n.changeLanguage(selectedLanguage);
}

// Set the direction based on the initial language
document.documentElement.setAttribute("lang", selectedLanguage || "en");
document.documentElement.setAttribute("dir", selectedLanguage === "ar" ? "rtl" : "ltr");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
