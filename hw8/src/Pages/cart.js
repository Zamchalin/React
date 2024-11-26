import { useState } from "react";
import CartForm from "../components/CartForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCart from "../components/productCart";
import Reviews from "../components/reviews";
import product1 from "../images/product1.svg";
import product2 from "../images/product2.svg";
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      img: product1,
      title: "MANGO PEOPLE T-SHIRT",
      price: 85,
      color: "red",
      size: "XL",
    },
    {
      img: product2,
      title: "MANGO PEOPLE T-SHIRT",
      price: 70,
      color: "red",
      size: "XL",
    },
    {
      img: product1,
      title: "MANGO PEOPLE T-SHIRT",
      price: 20,
      color: "red",
      size: "XL",
    },
    {
      img: product2,
      title: "MANGO PEOPLE T-SHIRT",
      price: 10,
      color: "red",
      size: "XL",
    },
  ]);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="top">
      <Header />
      <div className="top_head center">
        <h2 className="top-head__heading">SHOPPING CART</h2>
      </div>
      <div className="cart center">
        <div className="cart__products">
          {cartItems.map((item, index) => (
            <ProductCart
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
              color={item.color}
              size={item.size}
            />
          ))}
        </div>
        <div className="cart__form">
          <div className="cart__form-card">
            <h2 className="cart__form__heading">SHIPPING ADRESS</h2>
            <CartForm />
            <div className="pay">
              <h3 className="pay__subtotal">
                SUB TOTAL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
                {totalPrice}
              </h3>
              <h2 className="pay__grandtotal">
                GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="pay_color">${totalPrice}</span>
              </h2>
              <button
                className="pay__button"
                type="button"
                onClick={() => console.log("Proceed to checkout")}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
    </div>
  );
};

export default Cart;
