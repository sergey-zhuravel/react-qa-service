import React, {Component} from 'react';
import UsersStore from '../stores/UsersStore';

class LoginForm extends Component {

    handleClick = () => {
        //console.log('this is:', this);
        const userName = document.getElementById("user").value;
        UsersStore.setCurrentUser(userName);
        this.props.history.push("/questions/all");
    }
    render() {
        return (
            <div className="container main-panel text-center">
                <div className="form-group center-block">
                    <label htmlFor="user">Enter Your Login:</label>
                    <input id="user" type="text" className="form-control center-block" />
                    <br/>
                    <button className="btn btn-success" onClick={this.handleClick}>Login</button>
                </div>
            </div>
        );
    }
}

export default LoginForm;