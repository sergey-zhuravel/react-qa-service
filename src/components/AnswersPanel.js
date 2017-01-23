import React, { Component } from 'react';

import AnswersList from './AnswersList';
import QuestionItem from './QuestionItem';
import Sidebar from './Sidebar';

import QuestionsStore from '../stores/QuestionsStore';


class AnswersPanel extends Component {
    
    render() {
        let id = 235684679;
        if (this.props.params.id) {
            id = this.props.params.id;
        } 
        const question = QuestionsStore.getQuestionById(id);
        console.log(this.props);
        console.log('question:');
         console.log(question);

        return (
            <div className="container main-panel">
                <div className="row">
                    <div className="col-sm-8">
                        <div>Question title and description</div>
                        <QuestionItem key={question.id} {...question} />
                        <AnswersList />
                    </div>
                    <div className="col-sm-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        );
    }
}

export default AnswersPanel;
