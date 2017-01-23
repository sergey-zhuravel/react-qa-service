import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class AnswersStore extends EventEmitter {
  constructor() {
    super()
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
    ];
  }

  createAnswer(data) {
    const id = Date.now();
    const {questionId, description, createdBy} = data;

    this.answers.push({
      id,
      questionId,
      description,
      createdBy
    });

    this.emit("change");
  }

  getAll() {
    return this.answers;
  }

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
dispatcher.register(answersStore.handleActions.bind(answersStore));

export default answersStore;