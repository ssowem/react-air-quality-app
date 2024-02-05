import React, { useState } from 'react'
import styled from 'styled-components';
import ControlBtn from './ControlBtn';

const MyRegionSelect = ({ onClose, onRegionSelected }) => {
  console.log('MyRegionSelect이동')
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSelectChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleConfirm = () => {
    onRegionSelected(selectedRegion); // 선택된 지역 정보를 상위 컴포넌트로 전달
    onClose();
  };

  return (

    <MyRegionSelectContainer>
      <ModalContentWrapper>
        <div className='row-top'>
          <p>내 지역을 설정해주세요.</p>

          <div className='select-wrap'>
            <select name="" id="" onChange={handleSelectChange}>
            <option value="">지역선택</option>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="인천">인천</option>
            </select>
            <select name="" id="">
              <option value="">지역 선택2</option>
            </select>
          </div>
        </div>
        <div className='row-bottom'>
        <ControlBtn onCancel={onClose} onConfirm={handleConfirm}/>
        </div>

      </ModalContentWrapper>
    </MyRegionSelectContainer>
  )
}

export default MyRegionSelect;
const MyRegionSelectContainer = styled.div`
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

