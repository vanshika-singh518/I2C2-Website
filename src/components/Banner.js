import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headerImg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`I2C2 X Hackathon`}</h1>
                  <p>I2C2 : Ideate, Innovate, Code, Compete is an ideathon.<br/>An ideathon is a short, intensive, workshop-like experience for students to address some of the most pressing challenges of our time. Participants work individually and use design thinking and innovative learning practices to ideate and collaborate on possible solutions.</p>
                  
                  <button onClick={() => console.log('connect')}>Register Now <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
            
          </Col>
          
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
