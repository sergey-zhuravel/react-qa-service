import React, {Component} from 'react';
import UsersStore from '../stores/UsersStore';
import QuestionsStore from '../stores/QuestionsStore';

import dispatcher from "../dispatcher";


class AskQuestionForm extends Component {

    handleClick = () => {
        const createdBy = UsersStore.getCurrentUser();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const data = {
            title: title,
            description: description,
            createdBy: createdBy
        }
        //QuestionsStore.createQuestion(data);
        //Moved to dispatcher to handle events VS direct work with Store
        dispatcher.dispatch({type:'CREATE_QUESTION', data: data})

        this.props.history.push("/questions/all");
    }

    render() {
        return (
            <div className="container main-panel">
                <div className="">
                    <h2>Ask a Question:</h2>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" className="form-control text-left" />
                    <span className="notice"> please enter a descriptive title for your question </span>

                    <br/>
                    <br/>
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" rows="5" id="description"></textarea>
                    <br/>
                    <button className="btn btn-success" onClick={this.handleClick}>Submit</button>
                </div>
            </div>
        );
    }
}

export default AskQuestionForm;