import React, { Component } from 'react';
import '../App.css';


import Header from './Header';
import Footer from './Footer';


//App component is used as a layout for all application
class App extends Component {
  constructor(){
    super();
    //default user is Guest
    this.state = {
      login: "Guest",
    }
  }

  //ToDo Clean after refactor to using store
  changeLogin(login) {
    this.setState(login);
  }

//Routes were implemented as subroutes so components are generated in a placeholder using this.props.children
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
