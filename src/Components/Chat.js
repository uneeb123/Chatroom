import React, { Component } from 'react';

import './Chat.css';

export default class Chat extends Component {
  render() {
    return (
        <div className="row h-100 no-gutters">
          <div className="Chat-box col-md-9 h-100">
            <div className="Chat-box-display" />
            <div className="Chat-box-message container-fluid">
              <div className="row h-100">
                <div className="col-md-10"/>
                <div className="Chat-box-message-btn col-md-2">
                  <i className="fas fa-comment fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="Chat-friends col-md-3" />
        </div>
    );
  }
}

