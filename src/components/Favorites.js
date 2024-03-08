import React, { useState } from 'react'
import styled from 'styled-components';
import ClearAllModal from './ClearAllModal';

const Favorites = ({ favorites, clearFavorites, toggleFavorite }) => {
  const [isClearAllVisible, setIsClearAllVisible] = useState(false);


  const toggleRegionSelect = () => {
    // true이면 false로, false이면 true로 변경시킴
    setIsClearAllVisible(!isClearAllVisible);
  };

  const closeClearAllModal = () => {
    setIsClearAllVisible(false);
  };

  const handleClearFavorites = () => {
    // clearFavorites 실행 후 모달을 닫는다.
    clearFavorites();
    closeClearAllModal(); // 모달 닫기
  };



  return (
    <>
      {favorites.length === 0 ? (
        <DefaultViewContainer>
          <p>즐겨찾기에 등록된 지역이 없습니다.</p>
        </DefaultViewContainer>
      ) : (
        <FavoritesContainer>
          <Button onClick={toggleRegionSelect} disabled={favorites.length === 0}>
            <span className="material-icons-outlined">
              refresh
            </span>
            전체초기화
          </Button>

          <RegionInfoList>
            {favorites.map((favorite, index) => (
              <RegionInfoItem key={index}>
                <div className="Region">
                  <div className="left">
                    <div className="row">
                      <span>{favorite}</span>
                      <span>노원구</span>
                    </div>
                    <div className="row">
                      <span>좋음</span>
                      <span>좋음2</span>
                    </div>
                  </div>
                  <div className="right">
                    <span className="material-icons-outlined" onClick={() => toggleFavorite(favorite)}>turned_in</span>
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
            ))}
          </RegionInfoList>
          {isClearAllVisible && (
            <ClearAllModal
              onClose={closeClearAllModal}
              clearFavorites={handleClearFavorites}
            />
          )}
        </FavoritesContainer>
      )}
    </>
  );
};


export default Favorites;
const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const DefaultViewContainer = styled.div`
  height: 300px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d0;
`

const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 34px;
  background-color: #000;
  border-radius: 5px;
  color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  span {
   font-size: 20px;
   margin-right: 2px;
  }

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }

  &:disabled {
    background-color: #eee;
    color: #a2a2a2;
    cursor: auto;
    border: none;
  }
`
const RegionInfoList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`

const RegionInfoItem = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;

  @media (max-width: 375px) {
    padding: 20px;
  }

  .Region {
    display: flex;
    justify-content: space-between;
    font-size: 12px;

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

        @media (max-width: 375px) {
          font-size: 30px;
        }
      }
    }
  }

  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 375px) {
      font-size: 10px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      width: 70%;
    }
  }
`