import { Link } from "react-router-dom";

function Product(props) {
  return (
    <Link to="/product" className="products_card">
      <img src={props.img} alt="" />
      <div className="text_in_card">
        <h1 className="title_products_card">{props.title}</h1>
        <p className="description">{props.description}</p>
        <p className="price">${props.price}</p>
      </div>
    </Link>
  );
}

export default Product;
