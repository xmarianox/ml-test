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
  background-color: ${colors.white};
`;

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemImage = styled.img`
  width: 180px;
  height: 180px;
  overflow: hidden;
  display: block;
  border: 0;
  border-radius: 4px;
  object-fit: contain;
`;

export const ItemDataContainer = styled.div`
  padding-left: 16px;
  
  strong {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 32px;
  }
`;

export const ItemLocationContainer = styled.div`
  padding-left: 16px;
`;

export const ShippinIcon = styled.span`
  width: 16px;
  height: 16px;
  background: url("/static/images/ic_shipping.png") center center no-repeat;
  background-size: cover;
  display: inline-block;
`;
