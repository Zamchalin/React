import Message from "./Message";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Message text="Это первый пропс" />
      <Message text="Это второй пропс" />
      <Message text="Это третий пропс" />
      <Message text="Это четвёртый пропс" />
      <Message text="Это пятый пропс" />
    </div>
  );
}

export default App;
