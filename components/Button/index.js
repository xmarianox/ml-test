import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import constants from 'constants';

const { colors, fonts, breakpoints } = constants.STYLE_VARS;

const Wrapper = styled.button`
  width: 100%;
  border: 1px solid ${colors.blue};
  background-color: ${colors.blue};
  border-radius: 4px;
  display: block;
  padding: 12px;
  cursor: pointer;
  appearance: none;
  
  font-size: 18px;
  font-weight: 400;
  font-family: ${fonts.regular};
  text-align: center;
  color: ${colors.white};
`;

export default class Button extends PureComponent {
  render() {
    return (
      <Wrapper onClick={ this.props.action } >
        { this.props.label }
      </Wrapper>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

