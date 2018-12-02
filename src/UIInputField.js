import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UIInputField extends Component {
  render() {
    return (
      <div className={`input-container ${this.props.layout}`}>
        <input 
          id={this.props.name}
          class={this.props.errorMessage ? "error" : null}
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
  errorMessage: ""
}

UIInputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.string,
  errorMessage: PropTypes.string
}

export default UIInputField;