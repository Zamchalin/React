// src/App.js
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher"; // Импортируем ThemeSwitcher
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <div>
      <h1>Приложение с переключением темы</h1>
      <Provider store={store}>
        {" "}
        {/* Обертываем приложение в Provider */}
        <ThemeSwitcher />
      </Provider>
    </div>
  );
};

export default App;
