import React from 'react'
import styled from 'styled-components';

const Home = () => {
  console.log("Home 컴포넌트 렌더링");
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
`

const BoxItem = styled.div`
width: 134px;
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
  }

  .bottom-icon {
    // display: flex;
    // justify-content: flex-end;
    text-align: right;
    span {
      font-size: 50px;
    }
  }
`