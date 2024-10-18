import ComentsList from "./components/hw2";
import Message from "./Message";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="messages">
        <Message text="Это первый пропс" />
        <Message text="Это второй пропс" />
        <Message text="Это третий пропс" />
        <Message text="Это четвёртый пропс" />
        <Message text="Это пятый пропс" />
      </div>
      <div>
        <ComentsList />
      </div>
    </div>
  );
}

export default App;
