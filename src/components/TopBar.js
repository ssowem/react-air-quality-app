import React, { useState } from 'react'
import TopBarBtn from './TopBarBtn'
import styled from 'styled-components';
import MyRegionSelect from './MyRegionSelect';

const TopBar = () => {
  const [isRegionSelectVisible, setIsRegionSelectVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");//선택된 지역상태

  const toggleRegionSelect = () => {
    // true이면 false로, false이면 true로 변경시킴
    setIsRegionSelectVisible(!isRegionSelectVisible);
  };

  const handleRegionSelected = (region) => {
    setSelectedRegion(region); // 선택된 지역 설정
    toggleRegionSelect(); // 모달 닫기
  };

  return (
    <TopBarContainer $isSelected={!!selectedRegion}>
      {selectedRegion ? (
        <RegionInfoWrap>
          <RegionInfoLeft>
            {/* 선택된 지역에 대한 정보 표시 */}
            <span>중랑구 중화2동</span>
            <span>2024-01-28 03:00 PM</span>
            <span>쾌적한 날이에요!</span>
            {/* 기타 컨텐츠 */}
          </RegionInfoLeft>

          <RegionInfoRight>
            <span>내일: 좋음</span>
            <span>모레: 보통</span>
          </RegionInfoRight>
        </RegionInfoWrap>
      ) : (
        <span>내 지역을 선택해주세요.</span>
      )}
      {/* 버튼 위치 변경 */}
      <TopBarBtn onRegionSelectClick={toggleRegionSelect} isSelected={!!selectedRegion} />
      {isRegionSelectVisible && (
        <MyRegionSelect onClose={toggleRegionSelect} onRegionSelected={handleRegionSelected} />
      )}
    </TopBarContainer>
  )
}


export default TopBar;
const TopBarContainer = styled.div`
  padding: 38px;
  ${props => props.$isSelected ? `
    color: #fff;
    position: relative;
  
  ` : `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #fff;
    // 기본 스타일 세트
  `}

`;

const RegionInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  // padding: 20px;

`
const RegionInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const RegionInfoRight = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
font-size: 12px;
`