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
  
  // iPhone X support
  @supports(padding: max(0px)) {
    padding-left: max(8px, env(safe-area-inset-left));
    padding-right: max(8px, env(safe-area-inset-right));
  }
`;

export const Logo = styled.a`
  width: 41px;
  height: 28px;
  display: block;
  background: url("/static/images/Logo_ML.png") no-repeat center center;
  background-size: cover;
  text-indent: -9999px;
`;
