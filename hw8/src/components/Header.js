import account from "../icons/account.svg";
import logo from "../icons/logo.svg";
import basket from "../icons/basket.svg";
import menu from "../icons/menu.svg";
import seach from "../icons/seach.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navigation_desk center">
      <div className="left_link">
        <Link to="/" className="nav_link">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/catalog" className="nav_link">
          <img src={seach} alt="seach" />
        </Link>
      </div>
      <div className="right_link">
        <input id="check" type="checkbox" />
        <label for="check">
          <img className="burger_button" src={menu} alt="menu" />
        </label>
        <div className="menu">
          <h2 className="menu_heading">MENU</h2>
          <h3 className="menu_subheading">MAN</h3>
          <ul className="menu_ul">
            <li>
              <a className="menu_link" href="#">
                Accessories
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                Bags
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                Denim
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                T-Shirts
              </a>
            </li>
          </ul>
          <h3 className="menu_subheading">WOMAN</h3>
          <ul className="menu_ul">
            <li>
              <a className="menu_link" href="#">
                Accessories
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                Jackets & Coats
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                Polos
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                T-Shirts
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                Shirts
              </a>
            </li>
          </ul>
          <h3 className="menu_subheading">KIDS</h3>
          <ul className="menu_ul">
            <li>
              <a className="menu_link" href="#">
                Accessories
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                Jackets & Coats
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                Polos
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                T-Shirts
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                Shirts
              </a>
            </li>
            <li>
              <a className="menu_link" href="#">
                Bags
              </a>
            </li>
          </ul>
        </div>
        <Link to="/registration" className="nav_link nav_link_mobile">
          <img src={account} alt="account" />
        </Link>
        <Link to="/cart" className="nav_link nav_link_mobile">
          <img src={basket} alt="basket" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
