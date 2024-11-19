import React, { useState } from "react";

const CartForm = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Форма отправлена: ", { country, state, postcode });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="cart__form__input"
          placeholder="Bangladesh"
          type="text"
          value={country}
          onChange={handleCountryChange}
        />
        <input
          required
          className="cart__form__input"
          placeholder="State"
          type="text"
          value={state}
          onChange={handleStateChange}
        />
        <input
          required
          className="cart__form__input"
          placeholder="Postcode / Zip"
          type="text"
          value={postcode}
          onChange={handlePostcodeChange}
        />
        <button className="cart__form__button" type="submit">
          GET A QUOTE
        </button>
      </form>
    </div>
  );
};

export default CartForm;
