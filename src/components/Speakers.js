import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Card } from "./Card";
import speaker1 from "../assets/img/speaker1.jpg";
import speaker2 from "../assets/img/speaker2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Speakers = () => {

  const speakers = [
    {
      title: "Abhilash Jain",
      description: "Web Developer",
      imgUrl: speaker1,
    },
    {
      title: "Rajesh Singh",
      description: "iOS App Developer",
      imgUrl: speaker2,
    },
    {
        title: "Mayank Rajvansh",
        description: "UI/ UX Designer",
        imgUrl: speaker1,
      },
  ];

  return (
    <section className="speaker" id="speaker">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Speakers</h2>
                <p>Here are our speakers</p>
                <Tab.Container id="challenge-tabs">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                      <Row>
                        {
                          speakers.map((speaker, index) => {
                            return (
                              <Card
                                key={index}
                                {...speaker}
                                />
                            )
                          })
                        }
                      </Row>
                   
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
