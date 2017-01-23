import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

//AnswersStore to retrieve data from mock or from API and to handle actions
class AnswersStore extends EventEmitter {
  constructor() {
    super();
    //mock data for tests
    this.answers = [
      {
        id: 113464613,
        questionId: 113464613,
        description: "React is not a framework.",
        createdBy: "Guest",
      },
      {
        id: 235684679,
        questionId: 113464613,
        description: "React only a View component. But there are many additional libs.",
        createdBy: "Guest",
      },
      {
        id: 235684689,
        questionId: 235684689,
        description: "React only a View component. But there are many additional libs.",
        createdBy: "Guest",
      },
    ];
  }

  //method to add new answer
  createAnswer(data) {
    const id = Date.now();
    const {questionId, description, createdBy} = data;

    //update only local storage but possible to store into DB or remote service
    this.answers.push({
      id,
      questionId,
      description,
      createdBy
    });

    this.emit("change");
  }

  //get all answers
  getAll() {
    return this.answers;
  }

  //get all answers for one question
  getQuestionAnswers(id) {
    return this.answers.filter((answer) => {
      return answer.questionId === id;
    });
  }

  //handle all actions
  handleActions(action) {

    switch(action.type) {
      
      case "CREATE_ANSWER": {
        this.createAnswer(action.data);
        break;
      }
      case "RECEIVE_ANSWERS": {
        this.answers = action.answers;
        this.emit("change");
        break;
      }
      default:
        // do nothing
    }
  }

}

const answersStore = new AnswersStore();

//register dispatcher
dispatcher.register(answersStore.handleActions.bind(answersStore));

export default answersStore;