import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Santhosh kumar </span>
            from <span className="purple"> Tamil nadu, India.</span>
            <br />
            I am currently <span className="purple">Co-founder</span> at <span className="purple">Neuraa Intelligent Systems Pvt Ltd </span> (Jan 2026 - Present).
            <br />
            Previously, I worked as a <span className="purple">Software Developer</span> and held <span className="purple">Operations and Execution</span> experience as a <span className="purple">Team Lead</span> at <span className="purple">Astromeda Space</span> (until Dec 2025).
            <br />
            I have completed my Bachelor's degree at Government College Of
            Engineering, Thanjavur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Santhosh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
