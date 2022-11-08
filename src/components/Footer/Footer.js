import React from "react";
import AnimationLink from '../AnimationLink/AnimationLink';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__subtitle'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__description'>
        <p className="footer__copyright">&copy; 2022</p>
        <nav className='footer_links'>
        <AnimationLink>
          <a href='https://praktikum.yandex.ru' target='_blank' rel="noreferrer" className='footer_link'>Яндекс.Практикум</a>
        </AnimationLink>
        <AnimationLink>
          <a href='https://github.com/yandex-praktikum' target='_blank' rel="noreferrer"  className='footer_link'>Github</a>
        </AnimationLink>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;