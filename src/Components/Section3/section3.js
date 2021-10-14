import "./section3.css";
import Cus1 from "../../images/cus1.png";
import Cus2 from "../../images/cus2.jpg";
import Cus3 from "../../images/cus3.jpg";
import React from "react";
const Section3 = () => {
  const btn1 = React.useRef(null);
  const btn2 = React.useRef(null);
  const btn3 = React.useRef(null);
  const toggleButton = (ref) => {
    ref.current.classList.toggle("change");
    ref.current.nextElementSibling.classList.toggle("change");
  };
  return (
    <div>
      <section className="section-3" id="team">
        <h1 className="section-heading">Team</h1>
        <div className="team-wrapper">
          <div className="team-member">
            <img src={Cus1} className="team-member-img" alt="team member1" />
            <h2 className="team-member-name">
              Nick Smith <span>(Designer)</span>
            </h2>
            <ul className="team-member-skills">
              <li>Ps</li>
              <li>Figma</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Ai</li>
            </ul>
            <a href="#team" className="projects-btn">
              Projects
            </a>
            <div
              className="story-btn"
              title="My Story"
              ref={btn1}
              onClick={() => toggleButton(btn1)}
            >
              <div className="story-btn-line"></div>
            </div>
            <div className="story">
              <h4 className="story-heading">About Me</h4>
              <p className="story-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio
                nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum
                sunt atque exercitationem perspiciatis, beatae aliquam
                voluptates perferendis. Doloribus exercitationem adipisci,
                quidem veritatis temporibus magni. Sunt, exercitationem?
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={Cus2} className="team-member-img" alt="team member2" />
            <h2 className="team-member-name">
              Bob Brown <span>(Designer)</span>
            </h2>
            <ul className="team-member-skills">
              <li>Ae</li>
              <li>Pr</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Inkscape</li>
            </ul>
            <a href="#team" className="projects-btn">
              Projects
            </a>
            <div
              className="story-btn"
              title="My Story"
              ref={btn2}
              onClick={() => toggleButton(btn2)}
            >
              <div className="story-btn-line"></div>
            </div>
            <div className="story">
              <h4 className="story-heading">About Me</h4>
              <p className="story-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio
                nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum
                sunt atque exercitationem perspiciatis, beatae aliquam
                voluptates perferendis. Doloribus exercitationem adipisci,
                quidem veritatis temporibus magni. Sunt, exercitationem?
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={Cus3} className="team-member-img" alt="team member3" />
            <h2 className="team-member-name">
              John Doe <span>(Developer)</span>
            </h2>
            <ul className="team-member-skills">
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Python</li>
            </ul>
            <a href="#team" className="projects-btn">
              Projects
            </a>
            <div
              className="story-btn"
              title="My Story"
              ref={btn3}
              onClick={() => toggleButton(btn3)}
            >
              <div className="story-btn-line"></div>
            </div>
            <div className="story">
              <h4 className="story-heading">About Me</h4>
              <p className="story-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio
                nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum
                sunt atque exercitationem perspiciatis, beatae aliquam
                voluptates perferendis. Doloribus exercitationem adipisci,
                quidem veritatis temporibus magni. Sunt, exercitationem?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
