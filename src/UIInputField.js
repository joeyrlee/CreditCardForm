import React, { Component } from 'react';

class UIInputField extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <span role="alert"></span>
      </div>
    );
  }
}

export default UIInputField;