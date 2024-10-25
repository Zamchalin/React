import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // Функция для конвертации из Цельсия в Фаренгейт
  const convertCelsiusToFahrenheit = (celsiusValue) => {
    const f = (celsiusValue * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
  };

  // Функция для конвертации из Фаренгейта в Цельсий
  const convertFahrenheitToCelsius = (fahrenheitValue) => {
    const c = ((fahrenheitValue - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
  };

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    if (value) {
      convertCelsiusToFahrenheit(Number(value));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    if (value) {
      convertFahrenheitToCelsius(Number(value));
    } else {
      setCelsius("");
    }
  };
  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Температурный конвертер
      </Typography>
      <TextField
        label="Цельсий (°C)"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Фаренгейт (°F)"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        fullWidth
        margin="normal"
      />
    </Box>
  );
}
