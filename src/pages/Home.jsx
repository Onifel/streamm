import React, {useEffect} from 'react';
import './home.css';
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MovieList from '../components/movieList/MovieList';
import gsap from 'gsap';
import backgroundImage from '../assets/footer-bg.jpg';
import manImg from '../assets/jok.png';
import flashImg from '../assets/flashRun.png';


const Home = () => {
  useEffect(() => {
    const hero = document.querySelector('.hero');
    const slider = document.querySelector('.slider');
    const scrollBtn = document.querySelector('.scroll-down');
    const man = document.querySelector('.man-container');
    const flash = document.querySelector('.flash-container');

    const tl = gsap.timeline();

    tl.fromTo(hero, { height: '0%' }, { height: '80%', duration: 1, ease: 'power2.inOut' })
    .fromTo(hero, { width: '100%' }, { width: '80%', duration: 1.2, ease: 'power2.inOut' })
    .fromTo(slider, { x: '-100%' }, { x: '0%', ease: 'power2.inOut' }, '-=1.2')
    .fromTo(scrollBtn, { opacity: 0, x: -300 }, { opacity: 1, x: 0, duration: 0.5 }, '-=0.5')
    .fromTo(man, { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: 0.5 }, '-=0.5')
    .fromTo(flash, { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 0.5 }, '-=0.5');

  }, []);

  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="hero">
          <img src={backgroundImage} alt="" />
        </div>
      </section>
      <a href="#scroll-dest">
        <div className="scroll-down"></div>
      </a>
      <div className="slider"></div>
      <div className='bgImg'>
        <div className="flash-container"><img className="flash" src={flashImg} alt=""/></div>
        <div className="man-container"><img className="man" src={manImg} alt=""/></div>
      </div>
      <div id="scroll-dest"></div>
      <div className="movies">
          <MovieList/>    
      </div>
      <Footer />
    </> 
  );
};

export default Home;
