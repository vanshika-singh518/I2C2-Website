import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Card } from "./Card";
import health from "../assets/img/1health.png";
import edu from "../assets/img/2education.png";
import environ from "../assets/img/3environment.png";
import web3 from "../assets/img/4web3.jpg";
import sports from "../assets/img/5sports.jpg";
import misc from "../assets/img/6Miscel.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Challenges = () => {

  const challenges = [
    {
      title: "Health",
      description: "How will you solve the problems in health awareness for teenagers?",
      imgUrl: health,
    },
    {
      title: "Education",
      description: "How will you solve problems in the education sector based upon NEP using technology?",
      imgUrl: edu,
    },
    {
      title: "Environment",
      description: "How will you solve the problems in the environment sector in the post - covid world using the latest technologies?",
      imgUrl: environ,
    },
    {
      title: "Web3 Accessibility",
      description: "How can we make web3 space more accessible & improve the user onboarding experience?",
      imgUrl: web3,
    },
    {
      title: "Sports",
      description: "How can you contribute towards Aatmanirbhar Bharat and the growing sports culture of India?",
      imgUrl: sports,
    },
    {
      title: "Miscellaneous",
      description: "",
      imgUrl: misc,
    },
  ];

  return (
    <section className="challenge" id="challenge">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Challenges</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="challenge-tabs" defaultActiveKey="first">
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
                          challenges.map((challenge, index) => {
                            return (
                              <Card
                                key={index}
                                {...challenge}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
      <img className="background-image-left" src={colorSharp2} alt=""></img>
    </section>
  )
}
