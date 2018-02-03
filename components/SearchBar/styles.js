import styled from 'styled-components';
import constants from 'constants';

const { colors } = constants.STYLE_VARS;


export const SearchWrapper = styled.form`
  width: 100%;
  height: auto;
  padding-left: 8px;
  
  -webkit-tap-highlight-color: transparent;
 
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 95%;
  height: 34px;
  padding: 8px;
  background-color: ${colors.white};
  border: 0px;
  border-radius: 2px 0 0 2px;
  font-size: 18px;
  color: ${colors.darkGray};
  
  &::placeholder {
    color: ${colors.semiDarkGray};
  }
`;

export const SearchButton = styled.button`
  width: 37px;
  height: 34px;
  padding: 0;
  background-color: ${colors.lightGray};
  border: 0px;
  border-radius: 0px 2px 2px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  &:before {
    content: '';
    width: 16px;
    height: 16px;
    display: block;
    background: url("/static/images/ic_search.png") center center no-repeat;
    background-size: cover;
  }
`;

