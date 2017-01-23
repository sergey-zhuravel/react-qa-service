import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

//QuestionsStore to retrieve data from mock or from API and to handle actions
class QuestionsStore extends EventEmitter {
  constructor() {
    super();
    //mock data (ToDo - implement API with data receiving)
    this.questions = [
      {
        id: 113464613,
        title: "What is React? Is it a new JS framework?",
        description: "Detailed description of the question.",
        createdBy: "Guest",
        answers: [113464613, 235684679]
      },
      {
        id: 235684679,
        title: "What is React Native?",
        description: "Detailed description of the question.",
        createdBy: "Guest",
        answers: []
      },
      {
        id: 235684689,
        title: "What is the future of the React Native?",
        description: "Detailed description of the question.",
        createdBy: "Guest",
        answers: [235684689]
      },
    ];
    this.currentQuestion = 0;
  }

  //create new question method
  createQuestion(data) {
    const id = Date.now();
    const {title, description, createdBy, answers} = data;

    this.questions.push({
      id,
      title,
      description,
      createdBy,
      answers
    });

    this.emit("change"); //emit change event to update components with new data from Store
  }

  //Method to get all available questions in Store.
  getAll() {
    return this.questions;
  }

  //filter for different types of questions
  getQuestions(type) {
    switch(type) {
      case "all": {
        return this.questions;
      }
      case "unasnwered": {
        return this.questions.filter((question) => {
          return question.answers.length === 0;
        });
      }
      case "answered": {
        return this.questions.filter((question) => {
          return question.answers.length > 0;
        });
      }
      default:
        return this.questions;
    }
  }

  //getQuestionById method to get required question by ID
  getQuestionById(questionID) {
    this.currentQuestion = questionID;
    return this.questions.find((question) => {
      return question.id === parseInt(this.currentQuestion, 10);
    });
  }

  updateQuestion(data) {
    //find index of the quetion in the array
    const index = this.questions.findIndex((question) => {
      return question.id === parseInt(data.questionId, 10);
    });
    //add new answer to the question.
    this.questions[index].answers.push(data.id);
  }

  //handle all actions
  handleActions(action) {

    switch(action.type) {
      
      case "CREATE_QUESTION": {
        this.createQuestion(action.data);
        break;
      }
      //Action to receive questions from API (ToDo)
      case "RECEIVE_QUESIONS": {
        this.questions = action.questions;
        this.emit("change");
        break;
      }
      //Update question when new answer was added
      case "CREATE_ANSWER": {
        this.updateQuestion(action.data);
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