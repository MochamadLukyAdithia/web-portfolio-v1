import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project1.png";
import projImg2 from "../assets/images/project2.png";
import projImg3 from "../assets/images/project3.png";
import projImg4 from "../assets/images/project4.png";
import projImg5 from "../assets/images/project5.png";
import projImg6 from "../assets/images/project6.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Coffe Startup",
      description: "Project Manager & Fullstack Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Steganography App",
      description: "Fullstack Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Coffe Startup",
      description: "Project Manager & Backend Dekstop Development",
      imgUrl: projImg3,
    },
    {
      title: "Education Startup",
      description: "Fullstack Web Development",
      imgUrl: projImg4,
    },
    {
      title: "Education Startup",
      description: "Fullstack Web Development",
      imgUrl: projImg5,
    },
    {
      title: "Internet Of Thing Coffe Startup",
      description: "Project Manager & Fullstack Mobile Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    {" "}
                    Here are some of the projects I've led and developed,
                    ranging from education platforms to IoT and business-focused
                    apps.{" "}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                        
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                    
                          <p>
                          
                          </p>
                       
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
