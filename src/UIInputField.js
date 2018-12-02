import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UIInputField extends Component {
  render() {
    return (
      <div className={`input-container ${this.props.layout}`}>
        <input 
          type={this.props.type}
          placeholder={this.props.placeholder}
          aria-label={this.props.placeholder} />
        <span role="alert"></span>
      </div>
    );
  }
}

UIInputField.defaultProps = {
  type: "text",
  placeholder: null,
  layout: "block"
}

UIInputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
}

export default UIInputField;