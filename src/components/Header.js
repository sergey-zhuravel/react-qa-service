import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from '../logo.svg';
import '../App.css';

import UsersStore from '../stores/UsersStore';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      userName: UsersStore.getCurrentUser(),
    }
  }

  componentWillMount() {
        UsersStore.on("change", () => {
            this.setState({
                userName: UsersStore.getCurrentUser(),
            });
        });
    }

  render() {
    //this.props.changeLogin({login: "Sergey"});
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="text-center">Welcome {this.state.userName} to Q/A service powered by React!!!</h2>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Q/A</a>
              </div>
              <ul className="nav navbar-nav navbar-left">
                <li><a href="/"></a></li>
                <li><Link to="questions/all" activeClassName="active">Questions</Link></li>
                <li><Link to="questions/unasnwered" activeClassName="active">Unanswered</Link></li>
                <li><Link to="questions/answered" activeClassName="active">Answered</Link></li>
                <li><Link to="ask-a-question" activeClassName="active">Ask a Question</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
