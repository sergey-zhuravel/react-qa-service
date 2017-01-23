import React, { Component } from 'react';

import QuestionsList from './QuestionsList';
import Sidebar from './Sidebar';


class QuestionsPanel extends Component {
    
    render() {
        console.log(this.props.params.type);
        return (
            <div className="container main-panel">
                <div className="row">
                    <div className="col-sm-8">
                        <QuestionsList />
                    </div>
                    <div className="col-sm-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionsPanel;
