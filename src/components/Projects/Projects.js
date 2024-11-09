import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Astromon"
              description="This is a health monitoring project at Astromeda Space Pvt. Ltd. for the Department of Telecommunication (DOT), where we monitor ECG and PPG data. It is a healthcare product. I worked fully on the frontend using React and was partially involved in the backend using Node.js."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Astrovest"
              description="This is a health monitoring project at Astromeda Space Pvt. Ltd. for the Indian Air Force (IAF), where we monitor ECG and PPG data. It is a healthcare product and a desktop application that runs fully locally using Docker. I worked fully on the frontend using React and was partially involved in the backend using Node.js."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="ADDC"
              description="This software is integrated with a Raspberry Pi display, used to control trays that automatically open and close for dispensing. It was developed for a medical-purpose automatic drug dispenser cabinet at Astromeda space pvt ltd. The frontend was built using Vue, the backend operations were handled with Node.js, PostgreSQL was used for database management, and Docker for deployment. The software controls the opening of medicine trays and was implemented locally using Electron, ensuring a smooth and responsive user experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Bus Booking"
              description="I am currently working on a personal project to develop a Bus booking web application for practice. This ongoing project leverages a tech stack that includes React for the frontend, Node.js for backend operations, PostgreSQL for database management, and Docker for deployment. The application aims to provide users with a seamless booking experience, allowing them to search for and reserve accommodations easily. Additionally, I plan to incorporate map functionality and other features to enhance usability and provide more information to users. This project not only serves as a valuable learning experience but also aims to showcase my skills in full-stack development."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Senseqube"
              description="Seseqube is a mobile application developed to analyze farming activities, providing valuable insights for agricultural work. This project was undertaken as a freelance opportunity in collaboration with the Indian Institute of Technology (IIT) Bombay. The application utilizes data analytics to enhance farm management and optimize productivity, helping farmers make informed decisions based on real-time data and trends. Through this project, I gained experience in mobile app development and contributed to the advancement of smart farming technologies."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="My Portfolio"
              description="This portfolio project showcases my skills in frontend development using React. It includes detailed information about my work experience and highlights the technologies I've utilized in my projects. Additionally, it features my updated resume, providing a comprehensive overview of my professional background and expertise."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
