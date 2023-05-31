import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logoWheelie.svg';
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';
import navIcon3 from '../assets/img/navIcon3.svg';



function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#600cc" className={activeLink === '600cc' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('600cc')} >600cc</Nav.Link>
            <Nav.Link href="#1000cc" className={activeLink === '1000cc' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('1000cc')} >1000cc</Nav.Link>
          </Nav>
            <span className='navbar-text'>
               <div className='social-icon'>
                 <a href='#'><img src={navIcon1} alt='' /></a> 
                 <a href='#'><img src={navIcon2} alt='' /></a> 
                 <a href='#'><img src={navIcon3} alt='' /></a> 
               </div>
               <button className='connectButton' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;