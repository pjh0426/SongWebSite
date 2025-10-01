import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-square">W</div>
          </div>
          <div className="logo-text">
            <div className="logo-english">WOTD IN Motion Church</div>
            <div className="logo-korean">원:30叉次</div>
          </div>
        </div>
        <nav className="navigation">
          <a href="#church-info" className="nav-link">교회 안내</a>
          <a href="#vision-mission" className="nav-link">비진 & 시엉</a>
          <a href="#worship-info" className="nav-link">애내 안내</a>
          <a href="#bulletin-events" className="nav-link">주보 & 잉사</a>
          <a href="#membership" className="nav-link">최딩가김/드그민</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
