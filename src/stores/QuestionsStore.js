import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class QuestionsStore extends EventEmitter {
  constructor() {
    super()
    this.questions = [
      {
        id: 113464613,
        title: "What is React? Is it a new JS framework?",
        description: "Detailed description of the question.",
        createdBy: "Guest",
        answers: []
      },
      {
        id: 235684679,
        title: "What is React Native?",
        description: "Detailed description of the question.",
        createdBy: "Guest",
        answers: []
      },
    ];
    this.currentQuestion = 0;
  }

  createQuestion(data) {
    const id = Date.now();
    const {title, description, createdBy} = data;

    this.questions.push({
      id,
      title,
      description,
      createdBy
    });

    this.emit("change");
  }

  getAll() {
    return this.questions;
  }

  //getQuestionById method to get required question by ID
  getQuestionById(questionID) {
    this.currentQuestion = questionID;
    return this.questions.find((question) => {
      return question.id === parseInt(this.currentQuestion, 10);
    });
  }

  handleActions(action) {

    switch(action.type) {
      
      case "CREATE_QUESTION": {
        this.createQuestion(action.data);
        break;
      }
      case "RECEIVE_QUESIONS": {
        this.questions = action.questions;
        this.emit("change");
        break;
      }
      default:
        // do nothing
    }
  }

}

const questionsStore = new QuestionsStore();
dispatcher.register(questionsStore.handleActions.bind(questionsStore));

export default questionsStore;