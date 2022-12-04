import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import {WhyJoinUs} from "./components/WhyJoin"
import { AboutUs } from "./components/AboutUs";
import { Challenges } from "./components/Challenges";
import { Speakers } from "./components/Speakers"
import Timeline from "./components/Timeline"
import { Footer } from "./components/Footer";
import Accordion from './components/Accordion';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <WhyJoinUs/>

      <AboutUs />
      <Challenges />
      <Speakers />
      <Timeline />
      <Accordion/>
      <Footer />
    </div>
  );
}

export default App;
