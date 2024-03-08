import React from 'react'
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <BoxItemContainer>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>
        <BoxItem>
          <div className='top-detail'>
            <div>서울</div>
            <div>25</div>
          </div>
          <div className='bottom-icon'>
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </BoxItem>

      </BoxItemContainer>
    </>
  )
}

export default Home;
const BoxItemContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
justify-content: center;
gap: 10px;

@media (max-width: 375px) {
  grid-template-columns: repeat(3, 1fr);
}

`

const BoxItem = styled.div`
width: 100%;
height: 134px;
background-color: #48D3FF;
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: space-between;
box-sizing: border-box;
padding: 18px;

  .top-detail {
    display: flex;
    justify-content: space-between;
    font-size: 20px;

    @media (max-width: 375px) {
      font-size: 12px;
    }
  }

  .bottom-icon {
    text-align: right;
    span {
      font-size: 50px;
      @media (max-width: 375px) {
        font-size: 40px;

      }
    }
  }

  @media (max-width: 375px) {
    height: 114px;
  }
`