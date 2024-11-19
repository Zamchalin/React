import Footer from "../components/Footer";
import Header from "../components/Header";
import manPicture from "../images/man.svg";
import forMan from "../images/2-for men.svg";
import forWomen from "../images/1-for women.svg";
import forKids from "../images/3-for kids.svg";
import ACCESORIES from "../images/4-ACCESORIES.svg";
import Product from "../components/product";
import product1 from "../images/product1.svg";
import product2 from "../images/product2.svg";
import product3 from "../images/product3.svg";
import product4 from "../images/product4.svg";
import product5 from "../images/product5.svg";
import product6 from "../images/product6.svg";
import Advantage from "../components/advantages";
import Reviews from "../components/reviews";

function MainPage() {
  return (
    <div className="top">
      <Header />
      <div className="title">
        <img className="man_page" src={manPicture} alt="man" />
        <div className="text_title">
          <div className="main_title">
            <h1 className="the_brand">THE BRAND</h1>
            <div className="second_rows_in_title">
              <h3 className="of_luxerios">OF LUXERIOUS</h3>
              <h3 className="fashion">FASHION</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="four_pictures center">
        <div className="pictire1">
          <img src={forWomen} alt="" />
        </div>
        <div className="pictire2">
          <img src={forMan} alt="" />
        </div>
        <div className="pictire3">
          <img src={forKids} alt="" />
        </div>
        <div className="pictire4">
          <img src={ACCESORIES} alt="" />
        </div>
      </div>
      <div className="page_with_products center">
        <div className="title_page_with_products">
          <h1 className="main_title_page_with_products">Fetured Items</h1>
          <p className="subtitle_title_page_with_products">
            Shop for items based on what we featured in this week
          </p>
        </div>
        <div className="products">
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
          <Product
            img={product4}
            title="ELLERY X M'O CAPSULE"
            description="Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi."
            price="12.00"
          />
          <Product
            img={product5}
            title="ELLERY X M'O CAPSULE"
            description="Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi."
            price="67.00"
          />
          <Product
            img={product6}
            title="ELLERY X M'O CAPSULE"
            description="Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi."
            price="52.00"
          />
        </div>
        <button className="browse_all_Product">Browse All Product</button>
      </div>
      <Advantage />
      <Reviews />
      <Footer />
    </div>
  );
}

export default MainPage;
