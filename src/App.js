import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Main />
      </div>
    );
  }
}

export default App;
