// src/ThemeSwitcher.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./actions";

const ThemeSwitcher = () => {
  // Получаем dispatch и текущее состояние темы
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  // Обработчик клика для переключения темы
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  // Выбор классов в зависимости от темы
  const themeClass = isDarkTheme ? "dark" : "light";

  return (
    <div className={`theme-switcher ${themeClass}`}>
      <h1>{isDarkTheme ? "Темная тема" : "Светлая тема"}</h1>
      <button onClick={handleToggle}>
        Переключить на {isDarkTheme ? "светлую" : "темную"} тему
      </button>
      <style jsx>{`
        .theme-switcher {
          text-align: center;
          padding: 20px;
        }
        .light {
          background-color: white;
          color: black;
        }
        .dark {
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ThemeSwitcher;
