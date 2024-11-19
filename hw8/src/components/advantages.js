import advantage1 from "../icons/advantage1.svg";
import advantage2 from "../icons/advantage2.svg";
import advantage3 from "../icons/advantage3.svg";

function Advantages() {
  return (
    <section className="advantages center">
      <article className="advantage">
        <img src={advantage1} alt="advantage1" className="img_advantage" />
        <h1 className="title_advatage">Free Delivery</h1>
        <p className="advantage_text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </article>
      <article className="advantage">
        <img src={advantage2} alt="advantage2" className="img_advantage" />
        <h1 className="title_advatage">Sales & discounts</h1>
        <p className="advantage_text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </article>
      <article className="advantage">
        <img src={advantage3} alt="advantage3" className="img_advantage" />
        <h1 className="title_advatage">Quality assurance</h1>
        <p className="advantage_text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </article>
    </section>
  );
}

export default Advantages;
