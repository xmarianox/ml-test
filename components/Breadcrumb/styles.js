import styled from 'styled-components';
import constants from 'constants';

const { colors, breakpoints } = constants.STYLE_VARS;

export const Wrapper = styled.ul`
  width: 100%;
  height: auto;
  max-width: 866px;
  margin: 0 auto;
  padding: 16px 8px;
  
  li {
    font-size: 14px;
    color: ${colors.mediumGray};
    display: inline-block;
    
    &:after {
      content: '>';
      color: ${colors.mediumGray};
      font-size: 14px;
      padding: 0 8px;
    }
    
    &:last-child {
      font-weight: 600;
      
      &:after {
        display: none;
      }
    }
    
  }
  
  a {
    text-decoration: none;
    color: ${colors.mediumGray};
    cursor: pointer;
  }
    
  @media ${breakpoints.tabletPort} {
    padding: 16px 0;
  }
`;
