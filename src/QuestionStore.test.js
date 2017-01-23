import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsStore from './stores/QuestionsStore';



test('Returns 3 mock questions', () => {
  const questions = QuestionsStore.getAll();
  expect(questions.length).toBe(3);
});


test('Returns 1 anunswered question', () => {
  const type = "unasnwered";
  const questions = QuestionsStore.getQuestions(type);
  expect(questions.length).toBe(1);
});


test('Returns 2 answered question', () => {
  const type = "answered";
  const questions = QuestionsStore.getQuestions(type);
  expect(questions.length).toBe(2);
});

test('Returns a question by id with 2 answers', () => {
  const id = 113464613;
  const question = QuestionsStore.getQuestionById(id);
  expect(question.answers.length).toBe(2);
});

test('Returns 0 questions', () => {
  const id = 111111;
  const question = QuestionsStore.getQuestionById(id);
  expect(question).toBe(undefined);
});

