// src/store.js

import themeReducer from "./themeReducer"; // Импортируем редюсер
import { configureStore } from "@reduxjs/toolkit";

// Создание Redux store с использованием редюсера
const store = configureStore({
  reducer: themeReducer,
});

export default store;
