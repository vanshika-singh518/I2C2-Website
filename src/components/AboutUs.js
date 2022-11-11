import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const AboutUs = () => {

  return (
    <section className="aboutus" id="aboutus">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="aboutus-bx wow zoomIn">
                        <h2>About Us</h2>
                        <p>Code8 and Befikra are collaborating in organising this ideathon.<br/>
                        It will be mandatory for everyone to attend the opening session on the topic “How to identify a problem, brainstorm and ideate a solution to it?”. After this, the idea submission week will begin in which we are inviting the students, working professionals, researchers to build a website and PPT as a part of submission in the Ideathon.
                        <br/>Kindly join the Whatsapp Group for easy communication.</p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
