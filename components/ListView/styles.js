import styled from 'styled-components';
import constants from 'constants';

const { colors, breakpoints } = constants.STYLE_VARS;


export const ListWrapper = styled.ol`
  width: 100%;
  height: auto;
  max-width: 866px;
  margin: 0 auto;
`;

export const ListItemWrapper = styled.li`
  width: 100%;
  padding: 16px;
  overflow: hidden;
`;
