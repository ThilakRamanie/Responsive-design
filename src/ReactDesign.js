import Section1 from "./Components/Section1/section1";
import Section2 from "./Components/Section2/section2";
import Section3 from "./Components/Section3/section3";
import Section4 from "./Components/Section4/section4";
import "./ReactDesign.css";
const ReactDesign = () => {
  return (
    <div className="container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <a href="#home" className="scroll-up-btn">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default ReactDesign;
