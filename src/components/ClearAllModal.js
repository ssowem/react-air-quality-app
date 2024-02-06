import styled from 'styled-components';
import ControlBtn from './ControlBtn';

const ClearAllModal = ({ onClose, clearFavorites }) => {
  return (
    <ClearAllModalContainer >
      <ModalContentWrapper>
        <div className='row-top'>
          <p>즐겨찾기에 등록된 지역이 초기화 됩니다.</p>
        </div>
        <div className='row-bottom'>
        <ControlBtn onCancel={onClose} onConfirm={clearFavorites}/>
        </div>
      </ModalContentWrapper>
    </ClearAllModalContainer>
  )
}

export default ClearAllModal;
const ClearAllModalContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  background-color: rgba(0, 0, 0 , 0.5); 
  display: flex;
  justify-content: center; 
  align-items: center; 
  z-index: 10; 
`

const ModalContentWrapper = styled.div`
  width: 720px;
  margin: 0 auto;
  padding: 34px;
  background-color: #fff; /* 배경색 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  display: flex;
  flex-direction: column;

  .row-bottom {
    display: flex;
    justify-content: flex-end;
  }

  p {
    color: #000;
    font-size: 18px;
    font-weight: bold;
  }
`