import { Project } from './Project.js'; // Project class

//projects
const quiz = new Project(
  'Hogwart Trivia',
  'A quiz app based on J.K. Rowling\'s Harry Potter Series.',
  '<p>A quiz app built using React.js.</p><p>The high score is stored in local storage with all the other stats stored in the top level component state. When the quiz is completed a new component showing how the player perfomed and a restart button is rendered</p>',
  './img/trivia-mobile-black.png',
  'https://hogwartstrivia.netlify.app/',
  'https://github.com/iamndlovu/Hogwarts_Trivia',
  ['css3', 'js', 'react']
);

const todoApp = new Project (
  'Todo App',
  'Web based app to store tasks to be completed.',
  'Todo App is a web based single page application that stores tasks a user needs to remember to complete. The app has two sections: Home and MITs(Most Important Tasks). Todos in the MITs section are encrypted using the <a href="https://github.com/iamndlovu/encryptah">encryptah</a> functions i wrote so no one else can read them. To display MITs in their original form, one has to simply press the copyright text in the app footer.',
  './img/todo-resize.png',
  'https://pardon-todo.netlify.app/',
  'https://github.com/iamndlovu/Todo-list',
  ['html5', 'css3', 'js']
);

const surveyLP = new Project (
  'PAID SURVEYS',
  'Landing page of online paid surveys listings.',
  'PAID SURVEYS is a landing page for listings of paid surveys users can complete to earn rewards online.',
  './img/surveys-resize.png',
  'https://survey-lp.netlify.app/',
  'https://github.com/iamndlovu/survey-lp',
  ['html5', 'css3', 'js']
);

const portfolio = new Project (
  'Pardon Ndlovu',
  'My web developer portfolio website',
  'Well, there\'s not much i can say here. Its the website you are currently viewing!',
  './img/portfolio-resize.png',
  'https://bit.ly/pndlovu',
  'https://github.com/iamndlovu/Pardon_Ndlovu',
  ['html5', 'css3', 'js']
);

export let projects = [];

projects.push(quiz);
projects.push(todoApp);
projects.push(surveyLP);
projects.push(portfolio);