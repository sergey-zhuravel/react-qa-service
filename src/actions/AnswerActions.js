import dispatcher from '../dispatcher';

export function createAnswer(data) {
    dispatcher.dispatch({
        type: 'CREATE_ANSWER',
        data,
    });
}


//ToDo: Add some actions, for example to Remove Answers