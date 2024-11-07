// src/themeReducer.js
import { TOGGLE_THEME } from "./actions";

// Начальное состояние
const initialState = {
  isDarkTheme: false, // false - светлая тема, true - темная тема
};

// Reducer для обработки переключения темы
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: // Если действие - переключение темы
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme, // Изменяем состояние темы
      };
    default: // Для любых других действий возвращаем текущее состояние
      return state;
  }
};

export default themeReducer;
