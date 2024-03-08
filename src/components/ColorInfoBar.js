import React from 'react'
import styled from 'styled-components';

const ColorInfoBar = () => {
  return (
    <>
      <ColorInfoBarContainer>
        <Item>
          <div className='lv1'></div>
          <span>좋음</span>
        </Item>

        <Item>
          <div className="lv2"></div>
          <span>보통</span>
        </Item>

        <Item>
          <div className="lv3"></div>
          <span>나쁨</span>
        </Item>
      </ColorInfoBarContainer>
    </>
  )
}

export default ColorInfoBar;
const ColorInfoBarContainer = styled.ul`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
gap: 14px;

@media (max-width: 375px) {
  gap: 10px;
}

`

const Item = styled.li`
  display: flex;
  align-items: center;

  div {
    width: 30px;
    height: 10px;
    margin-right: 5px;

    &.lv1 {
      background-color: #56CEF3;
    }
    &.lv2 {
      background-color: #51C95D;
    }
    &.lv3 {
      background-color: #CB2E41;
    }

    @media (max-width: 375px) {
      width: 20px;
    }
  }

  span {
    font-size: 14px;
  }
 
`


// span {
//   color: #fff;
//   font-size: 14px;
//     &.lv1 {
//       background-color: #56CEF3;
//     }
//     &.lv2 {
//       background-color: #51C95D;
//     }
//     &.lv3 {
//       background-color: #CB2E41;
//     }
// }