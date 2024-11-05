import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Это главная страница нашего сайта</p>
      <Link to="/about">О нас</Link>
    </div>
  );
}

export default HomePage;
