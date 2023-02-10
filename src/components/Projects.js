import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "todo-list",
      description: "Organise Your Day",
      imgUrl: projImg1,
      link: "https://github.com/RahuRabh/todo-list",
    },
    {
      title: "Journal",
      description: "Make Your own Diary",
      imgUrl: projImg2,
      link: "https://github.com/RahuRabh/Journal",
    },
    {
      title: "White-Board",
      description: "Design & Develop",
      imgUrl: projImg3,
      link: "https://github.com/RahuRabh/Collabrative_WhiteBoard_Application",
      live: "https://rahul-collabwb.netlify.app/",
    },
    {
      title: "Drum Kit",
      description: "Drop your beat",
      imgUrl: projImg4,
      link: "https://github.com/RahuRabh/Drum-Kit",
      live: "https://playthedrum.netlify.app/",
    },
    {
      title: "Movie Recommendation",
      description: "Recommendation System",
      imgUrl: projImg5,
      link: "https://github.com/RahuRabh/Movie-Recommender-System",
    },
    {
      title: "Tin Dog",
      description: "Socialize your Dog",
      imgUrl: projImg6,
      link: "https://github.com/RahuRabh/Tin-Dog",
      live: "https://rahurabh.github.io/Tin-Dog/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
