import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#aboutus" className={activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutus')}>About</Nav.Link>
              <Nav.Link href="#challenge" className={activeLink === 'challenge' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('challenge')}>Challenges</Nav.Link>
              <Nav.Link href="#reward" className={activeLink === 'speaker' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('reward')}>Rewards</Nav.Link>
              <Nav.Link href="#schedule" className={activeLink === 'schedule' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('schedule')}>Schedule</Nav.Link>
              <Nav.Link href="#sponsor" className={activeLink === 'sponsor' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sponsor')}>Sponsors</Nav.Link>
              <Nav.Link href="#faq" className={activeLink === 'faq' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faq')}>FAQ</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to='#register'>
                <button className="vvd"><span>Register Now</span></button>
              </HashLink>
            </span>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
