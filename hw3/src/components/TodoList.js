import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() === "") return; // Проверка на пустое значение
    setTasks([...tasks, inputValue]);
    setInputValue(""); // Очистка поля ввода после добавления задачи
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <TextField
        label="Введите новую задачу"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Добавить
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} component={Card} style={{ margin: "10px 0" }}>
            <ListItemText primary={task} />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDeleteTask(index)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
