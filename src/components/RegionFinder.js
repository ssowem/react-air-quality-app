import React, { useState } from 'react'
import styled from 'styled-components';

const RegionFinder = ({ toggleFavorite, favorites }) => {
  const [currentRegion, setCurrentRegion] = useState("");

  const handleSelectChange = (e) => {
    setCurrentRegion(e.target.value);
    console.log("지역선택됨", e.target.value);
  };

  const isFavorite = favorites.includes(currentRegion);

  
  return (
    <RegionFinderContainer>
      <select name="regions" id="region-select" onChange={handleSelectChange}>
        <option value="">지역선택</option>
        <option value="서울">서울</option>
        <option value="경기">경기</option>
        <option value="인천">인천</option>
      </select>

      {!currentRegion && (
        <DefaultViewContainer>
          <p>조회하고 싶은 지역을 선택해주세요.</p>
        </DefaultViewContainer>
      )}

      {currentRegion && (
        <SelectedViewContainer>
          {/* 선택된 지역에 대한 정보를 여기에 렌더링 */}
          <RegionInfoWrap>
            <RegionInfoItem>
              <div className='Region'>
                <div className='left'>
                  <div className='row'>
                    <span>{currentRegion}</span> {/* 선택된 지역 이름을 여기에 표시 */}
                    <span>노원구</span>
                  </div>

                  <div className='row'>
                    <span>좋음</span>
                    <span>좋음2</span>
                  </div>
                </div>
                <div className='right'>
                  <span className="material-icons-outlined" onClick={() => toggleFavorite(currentRegion)}>
                    {isFavorite ? "turned_in" : "turned_in_not"}
                  </span>
                </div>
              </div>
              <div className='detail'>
                <div className='row'>
                  <span>미세먼지</span>
                  <span>25</span>
                </div>

                <div className='row'>
                  <span>오존지수</span>
                  <span>25</span>
                </div>

                <div className='row'>
                  <span>통합대기환경수치</span>
                  <span>25</span>
                </div>
              </div>
            </RegionInfoItem>
            
          </RegionInfoWrap>
        </SelectedViewContainer>
      )}
    </RegionFinderContainer>
  )
}

export default RegionFinder;
const RegionFinderContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  height: auto;

  select {
    width: 120px;
    height: 34px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 14px;
    margin-bottom: 10px;
  
`

const SelectedViewContainer = styled.div`
`

const RegionInfoWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 10px;
`

const RegionInfoItem = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;

  .Region {
    display: flex;
    justify-content: space-between;
    font-size: 30px;

    .left {
      .row {
        display: flex;
        gap: 6px;
      }
    }
    .right{
      cursor: pointer;
      display: flex;
      justify-content: center;
      color: pink;

      span {
        font-size: 40px;
      }
    }
  }

  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;

    .row {
      display: flex;
      justify-content: space-between;
      width: 70%;
    }
  }
`


const DefaultViewContainer = styled.div`
  height: 300px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d0;
`

