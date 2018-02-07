import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import constants from 'constants';

const { colors, breakpoints } = constants.STYLE_VARS;

const Wrapper = styled.button`
  border: 1px solid ${colors.blue};
  background-color: ${colors.blue};
  border-radius: 4px;
`;


export const Button = ({ label, action }) => (
  <Wrapper onClick={ action } >{ label }</Wrapper>
);


Button.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

