import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class UsersStore extends EventEmitter {
  constructor() {
    super();
    this.currentUser = "Guest!";
    this.users = []; //ToDo
  }

  createUser(login) {
    const id = Date.now();

    this.users.push({
      id,
      login,
      active: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.users;
  }

  getCurrentUser(){
      return this.currentUser;
  };

  setCurrentUser(login) {
      this.currentUser = login;
      console.log("User changed");
      this.emit("change");
  };

  handleActions(action) {

    switch(action.type) {     
      case "CREATE_USER": {
        this.createUser(action.login);
        break;
      }
      case "RECEIVE_USERS": {
        this.users = action.users;
        this.emit("change");
        break;
      }
      case "UPDATE_CURRENT_USER": {
         this.currentUser = action.login;
         this.emit("change");
         break;
      }
      default:
        // do nothing
    }
  }

}

const usersStore = new UsersStore();
dispatcher.register(usersStore.handleActions.bind(usersStore));

export default usersStore;