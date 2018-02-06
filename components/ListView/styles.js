import styled from 'styled-components';
import constants from 'constants';

const { colors, breakpoints } = constants.STYLE_VARS;


export const ListWrapper = styled.ol`
  width: 100%;
  height: auto;
  max-width: 866px;
  margin: 0 auto;
  
  @media ${breakpoints.tabletPort} {
    &:first-child {
      border-radius: 4px 4px 0 0;
    }
    
    &:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
`;

export const ListItemWrapper = styled.li`
  width: 100%;
  padding: 16px;
  overflow: hidden;
  background-color: ${colors.white};
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    border-bottom: 1px solid ${colors.lightGray};
  }
  
  @media ${breakpoints.tabletPort} {
    &:after {
      width: 94.5%;
      left: 24px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ItemImage = styled.figure`
  width: 115px;
  height: 115px;
  overflow: hidden;
  border: 0;
  border-radius: 4px;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
  
  @media ${breakpoints.tabletPort} {
    width: 180px;
    height: 180px;
    
    img {
      width: 180px;
      height: 180px;
    }
  }
`;

export const ItemInfoContainer = styled.div`
  width: calc(100% - 115px);
  height: auto;
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  
  @media ${breakpoints.tabletPort} {
    width: calc(100% - 180px);
  }
`;

export const ItemDataContainer = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-bottom: 16px;
  
  strong {
    display: inline-block;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  
  p {
    font-size: 16px;
    word-wrap: break-word;
  }
  
  @media ${breakpoints.tabletPort} {
    width: 70%;
    padding: 16px;
    
    strong {
      margin-bottom: 32px;
    }
    
    p {
      font-size: 18px;
    }
  }
`;

export const ItemLocationContainer = styled.div`
  width: 100%;
  padding-left: 16px;
  
  p {
    font-size: 12px;
  }
  
  @media ${breakpoints.tabletPort} {
    width: 30%;
    padding-top: 32px;
  }
`;

export const ShippinIcon = styled.span`
  width: 16px;
  height: 16px;
  background: url("/static/images/ic_shipping.png") center center no-repeat;
  background-size: cover;
  display: inline-block;
`;
