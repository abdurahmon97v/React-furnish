import React from 'react';
import styled from 'styled-components';
const StyleTitle = styled.h1`
  font-weight: 600;
  font-size: 70px;
  line-height: 82px;
  color: #000000;

`

// font size 70px
const XL_Title = ({ children }) => {
  return (
    <StyleTitle>
      {children}
    </StyleTitle>
  );
};

export default XL_Title;