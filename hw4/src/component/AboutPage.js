import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h1>О нас</h1>
      <p>Тут вы можете больше узнать о нас</p>
      <Link to="/">Главная</Link>
    </div>
  );
}

export default AboutPage;
