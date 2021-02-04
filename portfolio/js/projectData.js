import { Project } from './Project.js'; // Project class

//TODO: create array of projects

//test projects
const emmanuel = new Project(
  'Emmanuel Moyo',
  'Website built for an author to showcase his works of literature.',
  '<p>This is a platform  to showcase an author\'s novels and short stories, and to provide links to online stores where the books are sold. Books are categorized by language in the \'Books\' page.</p><p>Built using only HTML, CSS and Vanilla JavaScript.</p>',
  './img/emmanuel-resize.png',
  'https://emmanuel-moyo.netlify.app',
  'https://github.com/iamndlovu/Emmanuel_Moyo',
  ['html5', 'css3', 'js']
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
  'My web-based web developer portfolio website',
  'Well, there\'s not much i can say here. Its the website you are currently viewing!',
  './img/portfolio-resize.png',
  'https://bit.ly/pndlovu',
  'https://github.com/iamndlovu/Pardon_Ndlovu',
  ['html5', 'css3', 'js']
);

export let projects = [];

projects.push(emmanuel);
projects.push(todoApp);
projects.push(surveyLP);
projects.push(portfolio);