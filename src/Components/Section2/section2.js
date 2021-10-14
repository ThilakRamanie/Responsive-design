import "./section2.css";
import Cus1 from "../../images/cus1.png";
import Cus2 from "../../images/cus2.jpg";
import Cus3 from "../../images/cus3.jpg";
const Section2 = () => {
  return (
    <div>
      <section className="section-2" id="customers">
        <h1 className="section-heading">Customers</h1>
        <div className="customers-wrapper">
          <div className="customer">
            <i className="fas fa-quote-left"></i>
            <p className="customer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa
              quisquam repellat atque, tempore assumenda vitae. Earum fuga a
              accusamus, nisi ullam delectus!
            </p>
            <div className="customer-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <img src={Cus1} alt="customer 1" className="customer-img" />
            <h4 className="customer-name">Jane Lee</h4>
          </div>
          <div className="customer">
            <i className="fas fa-quote-left"></i>
            <p className="customer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa
              quisquam repellat atque, tempore assumenda vitae. Earum fuga a
              accusamus, nisi ullam delectus!
            </p>
            <div className="customer-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <img src={Cus2} alt="customer 2" className="customer-img" />
            <h4 className="customer-name">Bob Smith</h4>
          </div>
          <div className="customer">
            <i className="fas fa-quote-left"></i>
            <p className="customer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa
              quisquam repellat atque, tempore assumenda vitae. Earum fuga a
              accusamus, nisi ullam delectus!
            </p>
            <div className="customer-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <img src={Cus3} alt="customer 3" className="customer-img" />
            <h4 className="customer-name">Ann Brown</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
