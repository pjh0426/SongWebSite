import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-container">
        {/* Church Vision Section */}
        <section className="content-section vision-section">
          <h2 className="section-title">교회 비전</h2>
          <div className="vision-content">
            <blockquote className="vision-quote">
              "얼꼼 진자항언, 시기외 매홀 연든저 목 믿든지 징성 철선파"
            </blockquote>
            <p className="vision-reference">2일 42</p>
          </div>
        </section>

        {/* Recent Sermon Section */}
        <section className="content-section sermon-section">
          <h2 className="section-title">최근 설교/유튜브 영상</h2>
          <div className="video-container">
            <div className="video-placeholder">
              <div className="play-icon">▶</div>
            </div>
            <a href="#latest-sermon" className="video-link">최산 설교 영상 보기</a>
          </div>
        </section>

        {/* Bulletin & Events Section */}
        <section className="content-section bulletin-section">
          <h2 className="section-title">주보 & 행사</h2>
          <div className="bulletin-buttons">
            <button className="bulletin-btn">주보 다은모드</button>
            <button className="bulletin-btn">다가오는 행사</button>
          </div>
        </section>

        {/* Prayer Section */}
        <section className="content-section prayer-section">
          <h2 className="section-title">기도제목 & 나눔</h2>
          <div className="prayer-input-container">
            <label htmlFor="prayer-request" className="prayer-label">기도 오렁</label>
            <input 
              type="text" 
              id="prayer-request" 
              className="prayer-input"
              placeholder="기도저트릴 일다하세오"
            />
          </div>
        </section>

        {/* Prayer Board Section */}
        <section className="content-section prayer-board-section">
          <h2 className="section-title">기도 제독 게시판</h2>
          <ul className="prayer-board-list">
            <li>버를 보잉시 음지 에닐 벙추 님당</li>
            <li>진독 스제드진 제외 와응</li>
            <li>도 스즈먼 회설목 지정</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
