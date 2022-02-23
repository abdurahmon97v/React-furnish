import React from 'react';
import styled from 'styled-components';

const StyleTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 47px;
  color: #666666;
`
// font-size 42px
const MD_Title = ({ children }) => {
  return (
    <StyleTitle>
      { children }
    </StyleTitle>
  );
};

export default MD_Title;