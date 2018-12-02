import React, { Component } from 'react';

class UIInputField extends Component {
  render() {
    return (
      <div className="input">
        <input type="text" />
        <span role="alert"></span>
      </div>
    );
  }
}

export default UIInputField;