import React from 'react'
import styled from 'styled-components';

const ControlBtn = ({ onCancel, onConfirm }) => {
  return (
    <ControlBtnContainer>
      <Button onClick={onCancel}>취소</Button>
      <Button onClick={onConfirm}>확인</Button>
    </ControlBtnContainer>
  )
}

export default ControlBtn;
const ControlBtnContainer = styled.div`
  display: flex;
  gap: 8px;
`
const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  padding: 8px 40px;
  border-radius: 5px;
  border: none;
  background-color: #000;
  color: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`