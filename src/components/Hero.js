import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">말씀이 운동하는 교회</h1>
        <div className="hero-buttons">
          <button className="hero-btn primary">온라인 예배 참여하기</button>
          <button className="hero-btn secondary">화면 접고 영상 보기</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
