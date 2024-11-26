import Footer from "../components/Footer";
import Header from "../components/Header";
import Reviews from "../components/reviews";
import slider_photo from "../images/slider_photo.svg";
import product1 from "../images/product1.svg";
import product2 from "../images/product2.svg";
import product3 from "../images/product3.svg";
import Product from "../components/product";
const price = 30;
function ProductPage() {
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
      <div className="slider">
        <button className="arrow__slider left-arrow">
          <svg
            className="arrow__button"
            width="12.399902"
            height="21.699951"
            viewBox="0 0 12.3999 21.7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M12.39 3.1L4.64 10.85L12.39 18.6L10.85 21.7L0 10.85L10.85 0L12.39 3.1Z"
              fill="#000000"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <img src={slider_photo} alt="product_photo" />
        <button className="arrow__slider right-arrow">
          <svg
            width="12.399902"
            height="21.699951"
            viewBox="0 0 12.3999 21.7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M0 18.6L7.75 10.85L0 3.1L1.54 0L12.39 10.85L1.54 21.7L0 18.6Z"
              fill="#000000"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
      <div className="contein__info__product">
        <div className="info__product center">
          <h3 className="info__product__collection">WOMEN COLLECTION</h3>
          <svg
            width="63.000000"
            height="3.025391"
            viewBox="0 0 63 3.02539"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Rectangle 28"
              d="M0 0L63 0L63 3.02L0 3.02L0 0Z"
              fill="#EF5B70"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>

          <h2 className="info__product__head">MOSCHINO CHEAP AND CHIC</h2>
          <p className="info__product__about">
            Compellingly actualize fully researched processes before proactive
            outsourcing. Progressively syndicate collaborative architectures
            before cutting-edge services. Completely visualize parallel core
            competencies rather than exceptional portals.
          </p>
          <p className="info__product__price">$561</p>
          <svg
            className="info__product_line"
            width="642.000000"
            height="1.008545"
            viewBox="0 0 642 1.00854"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M0 0L642 0L642 1L0 1L0 0Z"
              fill="#EF5B70"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>

          <div className="sort__product">
            <details className="info__product__sort">
              <summary className="info__product__sort__summary">
                CHOOSE COLOR
                <svg
                  width="10.020020"
                  height="5.046143"
                  viewBox="0 0 10.02 5.04614"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M5 5.04C4.83 5.04 4.67 4.98 4.54 4.87L0.25 1.27C0.11 1.15 0.02 0.97 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.26C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.39L8.83 0.28C8.9 0.22 8.98 0.17 9.07 0.15C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.55 9.98 0.64C10.01 0.73 10.02 0.83 10.01 0.93C10 1.03 9.97 1.13 9.93 1.21C9.88 1.3 9.81 1.38 9.73 1.44L5.45 4.92C5.31 5.01 5.16 5.05 5 5.04Z"
                    fill="#6F6E6E"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </summary>
            </details>
            <details className="info__product__sort">
              <summary className="info__product__sort__summary">
                CHOOSE SIZE
                <svg
                  width="10.020020"
                  height="5.046143"
                  viewBox="0 0 10.02 5.04614"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M5 5.04C4.83 5.04 4.67 4.98 4.54 4.87L0.25 1.27C0.11 1.15 0.02 0.97 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.26C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.39L8.83 0.28C8.9 0.22 8.98 0.17 9.07 0.15C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.55 9.98 0.64C10.01 0.73 10.02 0.83 10.01 0.93C10 1.03 9.97 1.13 9.93 1.21C9.88 1.3 9.81 1.38 9.73 1.44L5.45 4.92C5.31 5.01 5.16 5.05 5 5.04Z"
                    fill="#6F6E6E"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </summary>
            </details>
            <details className="info__product__sort">
              <summary className="info__product__sort__summary">
                QUANTITY
                <svg
                  width="10.020020"
                  height="5.046143"
                  viewBox="0 0 10.02 5.04614"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M5 5.04C4.83 5.04 4.67 4.98 4.54 4.87L0.25 1.27C0.11 1.15 0.02 0.97 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.26C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.39L8.83 0.28C8.9 0.22 8.98 0.17 9.07 0.15C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.55 9.98 0.64C10.01 0.73 10.02 0.83 10.01 0.93C10 1.03 9.97 1.13 9.93 1.21C9.88 1.3 9.81 1.38 9.73 1.44L5.45 4.92C5.31 5.01 5.16 5.05 5 5.04Z"
                    fill="#6F6E6E"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </summary>
            </details>
          </div>
          <button className="info__product__add_to_cart">
            <svg
              width="26.012207"
              height="24.203125"
              viewBox="0 0 26.0122 24.2031"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Forma 1 copy"
                d="M5.49 21.96C5.5 21.53 5.64 21.1 5.88 20.75C6.12 20.39 6.47 20.12 6.87 19.96C7.27 19.8 7.7 19.76 8.12 19.85C8.54 19.94 8.93 20.15 9.23 20.46C9.53 20.77 9.73 21.16 9.81 21.58C9.89 22.01 9.85 22.45 9.68 22.85C9.52 23.25 9.24 23.59 8.88 23.83C8.52 24.07 8.1 24.2 7.67 24.2C7.38 24.19 7.1 24.13 6.83 24.02C6.57 23.91 6.33 23.74 6.12 23.53C5.92 23.33 5.76 23.08 5.65 22.81C5.55 22.54 5.49 22.25 5.49 21.96ZM21.3 24.2C20.87 24.2 20.44 24.08 20.07 23.85C19.71 23.61 19.42 23.28 19.24 22.88C19.06 22.48 19.01 22.04 19.08 21.6C19.14 21.17 19.34 20.77 19.63 20.45C19.92 20.13 20.3 19.9 20.72 19.79C21.14 19.68 21.59 19.7 21.99 19.85C22.4 19.99 22.76 20.25 23.03 20.6C23.29 20.94 23.45 21.36 23.48 21.8C23.52 22.39 23.33 22.97 22.95 23.43C22.77 23.65 22.54 23.83 22.28 23.96C22.03 24.1 21.75 24.18 21.46 24.2L21.3 24.2ZM8.59 17.26C8.38 17.26 8.17 17.19 8 17.06C7.83 16.93 7.71 16.74 7.66 16.54L3.73 1.97L0.97 1.97C0.71 1.97 0.47 1.86 0.28 1.68C0.1 1.49 0 1.24 0 0.98C0 0.72 0.1 0.47 0.28 0.28C0.47 0.1 0.71 0 0.97 0L4.45 0C4.66 0 4.87 0.07 5.04 0.2C5.21 0.33 5.33 0.51 5.38 0.72L9.31 15.29L20.01 15.29L23.57 6.9L11.71 6.9C11.45 6.9 11.21 6.8 11.02 6.61C10.84 6.43 10.74 6.17 10.74 5.91C10.74 5.65 10.84 5.4 11.02 5.22C11.21 5.03 11.45 4.93 11.71 4.93L25.05 4.93C25.21 4.93 25.37 4.97 25.5 5.05C25.64 5.12 25.76 5.24 25.85 5.37C25.94 5.51 25.99 5.67 26 5.83C26.02 5.99 25.99 6.16 25.93 6.31L21.54 16.67C21.46 16.84 21.34 16.99 21.18 17.1C21.03 17.2 20.84 17.26 20.66 17.26L8.59 17.26Z"
                fill="#EF5B70"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>

            <span className="add_to_cart__button_name">Add to Cart</span>
          </button>
        </div>
      </div>
      <div className="contein__products">
        <div className="products center">
          <Product
            img={product1}
            title="ELLERY X M'O CAPSULE"
            description="Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi."
            price="32.00"
          />
          <Product
            img={product2}
            title="ELLERY X M'O CAPSULE"
            description="Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi."
            price="30.00"
          />
          <Product
            img={product3}
            title="ELLERY X M'O CAPSULE"
            description="Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi."
            price="15.00"
          />
        </div>
      </div>
      <Reviews />
      <Footer />
    </div>
  );
}

export default ProductPage;
