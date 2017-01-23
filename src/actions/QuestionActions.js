import dispatcher from '../dispatcher';

export function createQuestion(data) {
    dispatcher.dispatch({
        type: 'CREATE_QUESTION',
        data,
    });
}


//ToDo: Add some actions, for example to Remove Questions