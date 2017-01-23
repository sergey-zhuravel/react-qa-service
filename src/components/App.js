import React, { Component } from 'react';
import '../App.css';


import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      login: "Guest",
    }
  }

  changeLogin(login) {
    this.setState(login);
  }

  render() {
    return (
      <div className="App">
        <Header changeLogin={this.changeLogin.bind(this)} userName={this.state.login} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
