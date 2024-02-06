import React from 'react'
import styled from 'styled-components';


const TopBarBtn = ({onRegionSelectClick, isSelected}) => {
  return (
    <Button onClick={onRegionSelectClick} $isSelected={isSelected}>지역 선택하기</Button>
  )
}

export default TopBarBtn;
const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  padding: 8px 18px;
  margin-top: ${props => props.$isSelected ? '0px': '10px'};
  border-radius: 5px;
  border: none;
  background-color: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  position: ${props => props.$isSelected ? 'absolute': 'static'};
  top: 30px;
  right: 30px;
`