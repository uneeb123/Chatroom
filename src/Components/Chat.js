import React, { Component } from 'react';

import './Chat.css';

export default class Chat extends Component {
  render() {
    return (
        <div className="row h-100 no-gutters">
          <div className="Chat-box col-md-9 h-100">
            <div className="Chat-box-display" />
            <div className="Chat-box-message" />
          </div>
          <div className="Chat-friends col-md-3" />
        </div>
    );
  }
}

