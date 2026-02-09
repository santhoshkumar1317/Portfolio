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
              description="This is a health monitoring project at Astromeda Space Pvt. Ltd. for the Department of Telecommunication (DOT), where we monitor ECG and PPG data. As a Team Lead, I oversaw the operation and execution while working fully on the frontend using React and participating in backend development with Node.js."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Astrovest"
              description="A health monitoring project for the Indian Air Force (IAF) at Astromeda Space, focused on ECG and PPG data monitoring. In my role as Team Lead, I managed the end-to-end operation and execution of this Docker-based desktop application, leading the React frontend development and Node.js backend integration."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="ADDC"
              description="Integrated with a Raspberry Pi display for medical drug dispensing, I led the team in the development and operation of this software at Astromeda Space. Built with Vue, Node.js, PostgreSQL, and Electron, I ensured smooth execution and deployment using Docker for this local medical automation system."
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
              description="This portfolio project showcases my skills in frontend development using React. It includes detailed information about my work experience and highlights the technologies I've utilized in my projects, reflecting my professional journey and expertise."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
