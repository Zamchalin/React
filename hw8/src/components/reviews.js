import reviwer from "../icons/reviwer.svg";
function Reviews() {
  return (
    <section className="reviews center">
      <article className="review">
        <img className="photo_reviewer" src={reviwer} alt="reviewer" />
        <p className="review_text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
          purus condimentum“
        </p>
      </article>
      <article className="review_level">
        <h1 className="level_review_title1">SUBSCRIBE</h1>
        <h2 className="level_review_title2">FOR OUR NEWLETTER AND PROMOTION</h2>
        <form className="form_email" action="#">
          <input
            className="email_input"
            placeholder="Enter Your Email"
            type="email"
          />
          <button className="email_input_button" type="submit">
            Subscribe
          </button>
        </form>
      </article>
    </section>
  );
}

export default Reviews;
