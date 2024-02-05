import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BottomBar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <BottomBarContainer>
      <Button onClick={() => handleNavigation('/')}
        $active={location.pathname === '/'}
      >
        <span className="material-symbols-outlined">widgets</span>
        전체보기
      </Button>
      <Button onClick={() => handleNavigation('/regions')}
        $active={location.pathname === '/regions'}
      >
        <span className="material-symbols-outlined">near_me</span>
        지역별 정보
      </Button>
      <Button onClick={() => handleNavigation('/favorites')}
        $active={location.pathname === '/favorites'}
      >
        <span className="material-symbols-outlined">bookmarks</span>
        즐겨찾기
      </Button>
    </BottomBarContainer>
  )
}

export default BottomBar;
const BottomBarContainer = styled.div`
  display: flex;
  gap: 10px;
  `
const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 20px;
  border: 1px solid #000;
  background-color: ${props => props.$active ? '#313131' : '#fff'};
  color: ${props => props.$active ? '#fff' : '#000'};
`