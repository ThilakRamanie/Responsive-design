import "./section1.css";

const Section1 = () => {
  return (
    <div>
      <section className="section-1" id="home">
        <nav className="navbar">
          <a href="#home" className="navbar-link">
            Design
          </a>
          <a href="#customers" className="navbar-link">
            Customers
          </a>
          <a href="#team" className="navbar-link">
            Team
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </nav>
        <div className="floating-bg"></div>
        <h1 className="section-1-heading">Developed &nbsp;With &nbsp;React</h1>
        <div className="logo">
          <i className="fas fa-code"></i>
        </div>
      </section>
    </div>
  );
};

export default Section1;
