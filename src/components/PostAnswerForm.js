import React, {Component} from 'react';
import UsersStore from '../stores/UsersStore';
//import QuestionsStore from '../stores/QuestionsStore';

import dispatcher from "../dispatcher";


class PostAnswerForm extends Component {

    handleClick = () => {
        const createdBy = UsersStore.getCurrentUser();
        //const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;

        //link with question
        const questionId = this.props.id;
        //generate unique ID
        const id = Date.now();

        const data = {
            id: id,
            description: description,
            createdBy: createdBy,
            questionId: questionId,
        }
        //QuestionsStore.createQuestion(data);
        //Moved to dispatcher to handle events VS direct work with Store
        dispatcher.dispatch({type:'CREATE_ANSWER', data: data})

        //this.props.history.push("/questions/all");
    }

    render() {
        return (
            <div className="container main-panel">
                <div className="">
                    <h2>Post an Answer:</h2>
                    <span className="notice"> You can enter a detailed answer for the question. Your asnwer will be added to the question immediately. </span>
                    <br/>
                    <br/>
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" rows="5" id="description" required={true} ></textarea>
                    <br/>
                    <button className="btn btn-success" onClick={this.handleClick}>Submit</button>
                </div>
            </div>
        );
    }
}

export default PostAnswerForm;