import React from 'react';
import './Header.scss';

function Header({ logo }) {
  return (
    <header className="Header">
      {logo}
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
