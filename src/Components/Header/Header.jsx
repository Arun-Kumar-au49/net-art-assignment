import React from "react";
import './Header.scss';


import {headerImg} from '../../../asserts';
const Header = () => {
  return (
    <div className="header-container">
      <header>
        <h1>
          <img src={headerImg} role="img" alt="company-logo" />
        </h1>
      </header>
    </div>
  );
};

export default Header;
