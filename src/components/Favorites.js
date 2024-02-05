import React from 'react'
import styled from 'styled-components';

const Favorites = ({ favorites, clearFavorites, toggleFavorite }) => {
  return (
    <FavoritesContainer>
      <Button onClick={clearFavorites}>
        <span class="material-icons-outlined">
          refresh
        </span>
        전체초기화
      </Button>

      {favorites.map((favorite, index) => (
        <RegionInfoWrap>
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
        </RegionInfoWrap>
      ))}
    </FavoritesContainer>
  )
}

export default Favorites;
const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
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