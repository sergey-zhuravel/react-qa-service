import React, {Component} from 'react';
import {Link} from 'react-router';

class QuestionItem extends Component {
    render() {
        return (
            <div className="box">
                <h3><Link to={"question/"+ this.props.id}>{this.props.title}</Link></h3>
                <p> 
                    <span className="user">Asked by: <strong>{this.props.createdBy}</strong> </span>
                </p>
            </div>
        );
    }
}

export default QuestionItem;