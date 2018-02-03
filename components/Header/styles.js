import styled from 'styled-components';
import constants from 'constants';

const { colors } = constants.STYLE_VARS;

export const HeaderWrapper = styled.header`
  width: 100%;
  height: auto;
  background-color: ${colors.yellow};
  padding: 8px;
  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.span`
  width: 41px;
  height: 28px;
  display: block;
  background-image: url("/static/images/Logo_ML.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
