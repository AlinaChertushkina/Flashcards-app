import React from 'react';
// import Logo from './Logo';
import './Header.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Главная страница</a>
          </li>
          <li>
            <a href="/game">Учить слова</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
