import React, { useEffect } from 'react';
import './App.css';
import Home from './Home';

function App() {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
          });

          const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    const handleMenuClick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    if (menuIcon) {
      menuIcon.addEventListener('click', handleMenuClick);
    }


    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (menuIcon) {
        menuIcon.removeEventListener('click', handleMenuClick);
      }
    };
  }, []);

  return (
    <div className="App">
      <header className="header">
        <a href="#home" className="logo">SUNSET <span>SERENITY</span></a>
        <i className='bx bx-menu' id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home" className="active">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#menu">MENU</a>
          <a href="#book">BOOK</a>
          <a href="#stories">STORIES</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>
      <div className='content'>

        <Home />

        <div className='app-footer'>
          <footer className="footer">
            <div className="social">
              <a href="#"><i className='bx bxl-instagram'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href='#'><i className='bx bxl-tiktok'></i></a>
              <a href='#'><i className='bx bxl-facebook'></i></a>
            </div>
            <ul className="list">
              <li><a href="#">FAQ</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#book">Book</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <p className="copyright">
              &copy;SUNSET <span>SERENITY</span> | All Rights Reserved
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
