import React, { Component } from 'react';

import Chat from './Components/Chat';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChat: true
    };
  }

  render() {
    let title = "Chatroom";
    let body;
    if (this.state.showChat) {
      body = (<Chat />);
    }

    return (
      <div className="App">
        <div className="App-nav">
          <div className="App-navText">{title}</div>
        </div>
        <div className="App-body">
          {body}
        </div>
      </div>
    );
  }
}

export default App;
