import CartForm from "../components/CartForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCart from "../components/productCart";
import Reviews from "../components/reviews";
import product1 from "../images/product1.svg";
import product2 from "../images/product2.svg";

function Cart() {
  return (
    <div className="top">
      <Header />
      <div className="top_head center">
        <h2 className="top-head__heading">SHOPPING CART</h2>
      </div>
      <div className="cart center">
        <div className="cart__products">
          <ProductCart
            img={product1}
            title="MANGO PEOPLE T-SHIRT"
            price={52}
            color="red"
            size="XL"
          />
          <ProductCart
            img={product2}
            title="MANGO PEOPLE T-SHIRT"
            price={52}
            color="red"
            size="XL"
          />
        </div>
        <div className="cart__form">
          <div className="cart__form-card">
            <h2 className="cart__form__heading">SHIPPING ADRESS</h2>
            <CartForm />
            <div className="pay">
              <h3 className="pay__subtotal">
                SUB TOTAL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$900
              </h3>
              <h2 className="pay__grandtotal">
                GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="pay_color">$900</span>
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
}

export default Cart;
