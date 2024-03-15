import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import './footer.css';
import logoStreamm from '../../assets/logoStreammNobg.png'


const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
          <img src={logoStreamm}/>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/streamm/">Home</Link>
            <Link to="/streamm/">Contact us</Link>
            <Link to="/streamm/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/streamm/">Live</Link>
            <Link to="/streamm/">FAQ</Link>
            <Link to="/streamm/">Policies</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/streamm/">Must watch</Link>
            <Link to="/streamm/">Term of services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
