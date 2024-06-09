import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [scrollPos, setScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.pageYOffset;
      setVisible(scrollPos > currentPos || currentPos < 10);
      setScrollPos(currentPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <nav className={`navbar ${visible ? '' : 'navbar--hidden'}`}>
      <div className="navbar-container">
        <Link to="/" className={`navbar-logo ${isDesktop ? 'desktop' : ''}`} onClick={closeMobileMenu}>
          <span className="navbar-logo-text">JSN</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/ethical_principles" className="nav-links" onClick={closeMobileMenu}>
              ETHICAL PRINCIPLES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/guidance" className="nav-links" onClick={closeMobileMenu}>
              GUIDANCE ON ANTISEMITISM
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/committee" className="nav-links" onClick={closeMobileMenu}>
              MEMBERSHIP
            </Link>
          </li>
          <li className="nav-item">
            <a href="mailto:jewishstaffnetworkscotland@gmail.com" className="nav-links" onClick={closeMobileMenu}>
              <i className="far fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;