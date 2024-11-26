import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/product";
import product1 from "../images/product1.svg";
import product2 from "../images/product2.svg";
import product3 from "../images/product3.svg";
import product4 from "../images/product4.svg";
import product5 from "../images/product5.svg";
import product6 from "../images/product6.svg";
import slider_left from "../icons/slider_left.svg";
import slider_right from "../icons/slider_right.svg";
import Advantages from "../components/advantages";
import Reviews from "../components/reviews";
import { useState } from "react";
import ProductFilter from "../components/ProductFilter";
const products = [
  {
    img: product1,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "32.00",
    size: "M",
  },
  {
    img: product2,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "L",
  },
  {
    img: product3,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "S",
  },
  {
    img: product4,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "L",
  },
  {
    img: product5,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "L",
  },
  {
    img: product6,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "XS",
  },
  {
    img: product1,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "L",
  },
  {
    img: product2,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "XS",
  },
  {
    img: product3,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "M",
  },
  {
    img: product2,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "L",
  },
  {
    img: product2,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "XS",
  },
  {
    img: product2,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "30.00",
    size: "M",
  },
];

function Catalog() {
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products); // Инициализируем с полным списком товаров

  const handleFilterChange = (sizes) => {
    setFilteredSizes(sizes); // Установить состояния выбранных размеров
    const filteredProducts = sizes.length
      ? products.filter((product) => sizes.includes(product.size)) // Фильтр по размерам
      : products; // Если размеры не выбраны, отображаем все товары
    setFilteredProducts(filteredProducts); // Обновляем состояние отфильтрованных товаров
  };

  return (
    <div className="top">
      <Header />
      <div className="top_head center">
        <h2 className="top-head__heading">NEW ARRIVALS</h2>
        <nav className="breadcrumps">
          <a href="#" className="breadcrumps_link">
            HOME /
          </a>
          <a href="#" className="breadcrumps_link">
            MEN /
          </a>
          <a href="#" className="breadcrumps_link main_breadcrumps_link">
            NEW ARRIVALS
          </a>
        </nav>
      </div>
      <div className="catalog_of_products center">
        <div className="filter_and_setting_sort">
          <details className="filter">
            <summary className="filter__summary">
              <span className="filter__heading">FILTER</span>
              <svg
                width="15.000000"
                height="10.000000"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M0.83 10L4.16 10C4.62 10 5 9.62 5 9.16C5 8.7 4.62 8.33 4.16 8.33L0.83 8.33C0.37 8.33 0 8.7 0 9.16C0 9.62 0.37 10 0.83 10ZM0 0.83C0 1.29 0.37 1.66 0.83 1.66L14.16 1.66C14.62 1.66 15 1.29 15 0.83C15 0.37 14.62 0 14.16 0L0.83 0C0.37 0 0 0.37 0 0.83ZM0.83 5.83L9.16 5.83C9.62 5.83 10 5.45 10 5C10 4.54 9.62 4.16 9.16 4.16L0.83 4.16C0.37 4.16 0 4.54 0 5C0 5.45 0.37 5.83 0.83 5.83Z"
                  fill="#000000"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
            </summary>
            <div className="filter__content">
              <details className="filter__item" open>
                <summary className="filter__head">CATEGORY</summary>
                <div className="category_menu">
                  <a className="category_menu_link" href="#">
                    Accessories
                  </a>
                  <a className="category_menu_link" href="#">
                    Bags
                  </a>
                  <a className="category_menu_link" href="#">
                    Denim
                  </a>
                  <a className="category_menu_link" href="#">
                    Hoodies & Sweatshirts
                  </a>
                  <a className="category_menu_link" href="#">
                    Jackets & Coats
                  </a>
                  <a className="category_menu_link" href="#">
                    Polos
                  </a>
                  <a className="category_menu_link" href="#">
                    Shirts
                  </a>
                  <a className="category_menu_link" href="#">
                    Shoes
                  </a>
                  <a className="category_menu_link" href="#">
                    Sweaters & Knits
                  </a>
                  <a className="category_menu_link" href="#">
                    T-Shirts
                  </a>
                  <a className="category_menu_link" href="#">
                    Tanks
                  </a>
                </div>
              </details>
              <details className="filter__item">
                <summary className="filter__head">BRAND</summary>
                <div className="category_menu">
                  <a className="category_menu_link" href="#">
                    Accessories
                  </a>
                  <a className="category_menu_link" href="#">
                    Bags
                  </a>
                  <a className="category_menu_link" href="#">
                    Denim
                  </a>
                  <a className="category_menu_link" href="#">
                    Hoodies & Sweatshirts
                  </a>
                  <a className="category_menu_link" href="#">
                    Jackets & Coats
                  </a>
                  <a className="category_menu_link" href="#">
                    Polos
                  </a>
                  <a className="category_menu_link" href="#">
                    Shirts
                  </a>
                  <a className="category_menu_link" href="#">
                    Shoes
                  </a>
                  <a className="category_menu_link" href="#">
                    Sweaters & Knits
                  </a>
                  <a className="category_menu_link" href="#">
                    T-Shirts
                  </a>
                  <a className="category_menu_link" href="#">
                    Tanks
                  </a>
                </div>
              </details>
              <details className="filter__item">
                <summary className="filter__head">DESIGNER</summary>
                <div className="category_menu">
                  <a className="category_menu_link" href="#">
                    Accessories
                  </a>
                  <a className="category_menu_link" href="#">
                    Bags
                  </a>
                  <a className="category_menu_link" href="#">
                    Denim
                  </a>
                  <a className="category_menu_link" href="#">
                    Hoodies & Sweatshirts
                  </a>
                  <a className="category_menu_link" href="#">
                    Jackets & Coats
                  </a>
                  <a className="category_menu_link" href="#">
                    Polos
                  </a>
                  <a className="category_menu_link" href="#">
                    Shirts
                  </a>
                  <a className="category_menu_link" href="#">
                    Shoes
                  </a>
                  <a className="category_menu_link" href="#">
                    Sweaters & Knits
                  </a>
                  <a className="category_menu_link" href="#">
                    T-Shirts
                  </a>
                  <a className="category_menu_link" href="#">
                    Tanks
                  </a>
                </div>
              </details>
            </div>
          </details>
          <div className="sort">
            <details className="sort__details">
              <summary className="sort__summary">
                <span className="sort__heading for_smartphone">
                  TRENDING NOW
                </span>
                <svg
                  width="10.020004"
                  height="5.003906"
                  viewBox="0 0 10.02 5.00391"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                    fill="#6F6E6E"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </summary>
            </details>
            <details className="sort__details">
              <summary className="sort__summary">
                <span className="sort__heading">SIZE </span>
                <svg
                  width="10.020004"
                  height="5.003906"
                  viewBox="0 0 10.02 5.00391"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                    fill="#6F6E6E"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </summary>
              <div className="sort__box">
                <ProductFilter onFilterChange={handleFilterChange} />
              </div>
            </details>

            <details className="sort__details">
              <summary className="sort__summary">
                <span className="sort__heading">PRICE</span>
                <svg
                  width="10.020004"
                  height="5.003906"
                  viewBox="0 0 10.02 5.00391"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                    fill="#6F6E6E"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </summary>
            </details>
          </div>
        </div>
      </div>
      <div className="products center">
        {filteredProducts.map((item, index) => (
          <Product
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
            size={item.size}
          />
        ))}
      </div>
      <div className="slider_container">
        <div className="slider">
          <button className="slider_button" type="button">
            <img className="button_arrow" src={slider_left} alt="slider_left" />
          </button>
          <div className="slider_links">
            <a className="slider_link" href="#">
              1
            </a>
            <a className="slider_link" href="#">
              2
            </a>
            <a className="slider_link" href="#">
              3
            </a>
            <a className="slider_link" href="#">
              4
            </a>
            <a className="slider_link" href="#">
              5
            </a>
            <a className="slider_link" href="#">
              6
            </a>
          </div>

          <button className="slider_button" type="button">
            <img
              className="button_arrow"
              src={slider_right}
              alt="slider_right"
            />
          </button>
        </div>
      </div>
      <Advantages />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Catalog;
