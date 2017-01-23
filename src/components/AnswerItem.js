import React, {Component} from 'react';

class AnswerItem extends Component {
    render() {
        return (
            <div className="box">
                <h3>{this.props.title}</h3>
                <p> 
                    <span className="user">Answered by: <strong>{this.props.createdBy}</strong> </span>
                </p>
            </div>
        );
    }
}

export default AnswerItem;