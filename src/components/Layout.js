import React from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import './Layout.css';
import ColorInfoBar from './ColorInfoBar';

// 공통되는 레이아웃: 상단-지역상태바, 가운데-각 컨텐츠, 하단-3개의 메뉴바
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="top-bar">
        <TopBar />
      </div>
      <div className="color-bar">
        <ColorInfoBar />
      </div>
      <main className="main-content">
        {children}
      </main>

      <div className="bottom-bar">
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout