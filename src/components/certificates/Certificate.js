import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificateCard";
import Particle from "../Particle";
import udemy from "../../Assets/Projects/udemy.png";
import shiash from "../../Assets/Projects/Shiash.png";
import react_course from "../../Assets/Projects/react_course.png";
import advanced_react from "../../Assets/Projects/advanced_react.png";
import javascript from "../../Assets/Projects/javascript_course.png";
import node from "../../Assets/Projects/node.png";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certifications I've completed to enhance my knowledge.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react_course}
              isBlog={false}
              title="React-Basics"
              description="I completed the full React Basics course provided by Meta on Coursera, attended the test, and submitted the required task for certification. I learned the fundamentals of React for developing web application frontends"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={advanced_react}
              isBlog={false}
              title="React-Advance"
              description="I completed the full React Advanced course provided by Meta on Coursera, attended the test, and submitted the required task for certification. I learned advanced concepts of React for developing web application frontends."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javascript}
              isBlog={false}
              title="Javascript"
              description="I completed the programming JavaScript course provided by Meta on Coursera. I attended the test and submitted the required task for certification. This course taught me the fundamentals of JavaScript programming"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={node}
              isBlog={false}
              title="Backend with Node"
              description="I completed the backend development course with Node.js provided by IBM on Coursera. I attended the test and submitted the required task for certification. This course taught me backend development concepts using Node.js."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={udemy}
              isBlog={false}
              title="web development"
              description="I completed the Full Stack Web Development Bootcamp from Udemy. The course covered a comprehensive range of technologies and practices for developing full-stack web applications. It equipped me with the skills needed to build robust web solutions."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shiash}
              isBlog={false}
              title="Java basics"
              description="I completed the Java Basics course from Shiash Info Tech Solutions Pvt Ltd, Chennai. The course provided foundational knowledge of Java programming concepts. It equipped me with the skills needed to write basic Java applications."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
