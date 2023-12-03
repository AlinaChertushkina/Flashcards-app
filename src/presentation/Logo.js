import React from 'react';
import logo from '../presentation/assets/images/logo.png';
import './Logo.scss';

function Logo() {
  return <img className="logo" src={logo} alt="WordWise" />;
}

export { Logo };
