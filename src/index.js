import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import QuestionsPanel from './components/QuestionsPanel';
import AskQuestionForm from './components/AskQuestionForm';
import LoginForm from './components/LoginForm';
import AnswersPanel from './components/AnswersPanel';
import './index.css';

//import dispatcher from './dispatcher';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <IndexRoute component={LoginForm}></IndexRoute>
      <Route path="/questions/:type" component={QuestionsPanel}></Route>
      <Route path="/ask-a-question" component={AskQuestionForm}></Route>
      <Route path="/question/:id" component={AnswersPanel}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
