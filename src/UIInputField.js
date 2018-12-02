/*
 *
 * Standard reusable input field component that lifts state onchange via 
 * invoking props.handleChange with arguments props.name and event.target.value
 *
**/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UIInputField extends Component {
  handleChange = event => {
    this.props.handleChange(this.props.name, event.target.value);
  }

  render() {
    return (
      <div className={`input-container ${this.props.layout}`}>
        <input
          onChange={this.handleChange}
          value={this.props.value}
          required={true}
          minLength={this.props.minlength}
          maxLength={this.props.maxlength}
          id={this.props.name}
          className={this.props.errorMessage ? "error" : null}
          type={this.props.type}
          placeholder={this.props.placeholder}
          aria-label={this.props.placeholder}
          aria-describedby={this.props.name ? this.props.name + "-error" : null} />
        <div 
          id={this.props.name + "-error"}
          role="alert"
        >
          {this.props.errorMessage}
        </div>
      </div>
    );
  }
}

UIInputField.defaultProps = {
  type: "text",
  placeholder: null,
  layout: "block",
  errorMessage: "",
  minlength: null,
  maxlength: null
}

UIInputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.string,
  errorMessage: PropTypes.string,
  minlength: PropTypes.string,
  maxlength: PropTypes.string,
  handleChange: PropTypes.func
}

export default UIInputField;