import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            JSN
          </div>
          <small className='website-rights'>JEWISH STAFF NETWORK © 2024</small>
          <div className='social-icons'>
            <a href="mailto:jewishstaffnetworkscotland@gmail.com" className='social-icon-link' aria-label='Email'>
              <i className='far fa-envelope' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;