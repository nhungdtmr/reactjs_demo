import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <table className="table table-bordered">
          <Header />
          <Body />
        </table>
      </div>
    )
  }
}

export default App;
