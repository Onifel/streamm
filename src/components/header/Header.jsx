import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import logoStreamm from '../../assets/logoStreammNobg.png'

const headerNav = [
  {
    id: 1,
    name: 'Home',
    link: '/streamm/',
  },
];


const Header = () => {
  const { pathname } = useLocation();
  const navRef = useRef(null);

  const active = headerNav.findIndex((item) => item.link === pathname);

  return (
    <div ref={navRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logoStreamm}/>
        </div>
        <ul className="header__nav">
          {headerNav.map((item) => (
            <li key={item.id} className={active === item.id ? 'active' : ''}>
              <Link to={item.link}>
                <FontAwesomeIcon icon={faHome} style={{ paddingLeft: '5px', width: '2rem', height: '2rem' }}/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
