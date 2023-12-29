import React from 'react';
import { NavLink } from 'react-router-dom';
import notFoundGif from '../assets/images/404gif.gif';

function NotFound() {
  return (
    <div>
      <h1>404: Страница не найдена</h1>
      <img src={notFoundGif} alt="Страница не найдена" />
      <p>
        Попробуйте вернуться на <NavLink to="/">главную страницу</NavLink>.
      </p>
    </div>
  );
}

export { NotFound };
