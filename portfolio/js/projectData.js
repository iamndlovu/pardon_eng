import { Project } from './Project.js'; // Project class

//projects
const quiz = new Project(
	'Hogwart Trivia',
	"A quiz app based on J.K. Rowling's Harry Potter Series.",
	'<p>A quiz app built using React.js.</p><p>The high score is stored in local storage with all the other stats stored in the top level component state. When the quiz is completed a new component showing how the player perfomed and a restart button is rendered</p>',
	'./img/trivia-mobile-black.png',
	'https://hogwartstrivia.netlify.app/',
	'https://github.com/iamndlovu/Hogwarts_Trivia',
	['css3', 'js', 'react']
);

const todoApp = new Project(
	'Todo App',
	'Web based app to store tasks to be completed.',
	'Todo App is a web based single page application that stores tasks a user needs to remember to complete. The app has two sections: Home and MITs(Most Important Tasks). Todos in the MITs section are encrypted using the <a href="https://github.com/iamndlovu/encryptah">encryptah</a> functions i wrote so no one else can read them. To display MITs in their original form, one has to simply press the copyright text in the app footer.',
	'./img/todo-resize.png',
	'https://pardon-todo.netlify.app/',
	'https://github.com/iamndlovu/Todo-list',
	['html5', 'css3', 'js']
);

const surveyLP = new Project(
	'PAID SURVEYS',
	'Landing page of online paid surveys listings.',
	'PAID SURVEYS is a landing page for listings of paid surveys users can complete to earn rewards online.',
	'./img/surveys-resize.png',
	'https://survey-lp.netlify.app/',
	'https://github.com/iamndlovu/survey-lp',
	['html5', 'css3', 'js']
);

const portfolio = new Project(
	'Pardon Ndlovu',
	'My web developer portfolio website',
	"<p>Well, it's the website you are currently viewing! I designed two versions of the logo, yellow and aliceblue, using <a href=\"https://www.gimp.org\">GIMP</a>. The default logo is the aliceblue version which is replaced by the yellow version on hover. The only downside  to this is that it may take a few seconds for the yellow version to load on hover, leaving the section blank for those few seconds.</p><p>In order to practice Object Oriented Programming, a class called Project was created to be a template for all projects. The class holds all event listeners and other methods of each project object. When the Portfolio page first loads it displays the project cards by calling a method showCard of the Project class. When 'Read more' is clicked on, another method (showMore) is called to display more details about the project in question.</p>",
	'./img/portfolio-resize.png',
	'https://bit.ly/pndlovu',
	'https://github.com/iamndlovu/Pardon_Ndlovu',
	['html5', 'css3', 'js']
);

const blog = new Project(
	'Company Website',
	'Responsive company website with blog',
	'<p>This is a mock website for a company build with React.js</p><p>The development of this project followed the Agile software development life cycle. The gesign was done using GIMP before the app could be implemented using React.</p><p>Sass, a CSS pre-processor, was used to style the entire app. To avoid styles for different components overlapping, CSS modules were employed.</p>',
	'./img/blog.png',
	'https://admiring-villani-f2a854.netlify.app/',
	'https://github.com/iamndlovu/excomag_client',
	['react', 'js', 'sass', 'css3']
);

const db = new Project(
	'Diamond Berry',
	'Business development company static website',
	"<p>Basic company website built using only HTML, CSS and JavaScript. The purpose of the site is to showcase the services provided by the company and provide a way for the public to get in touch.</p><p>PHP was used to handle contact form submissions by forwarding the messages to the business onwner's email address.</p>",
	'./img/diamond-berry.png',
	'http://diamondberry.co.zw',
	'https://github.com/iamndlovu/diamond-berry',
	['html5', 'js', 'css3', 'php']
);

const tsd = new Project(
	'Trauma Series Detector',
	'Machine learning app to detect fractures and dislocations in x-ray images',
	'<p>The development of the application was broken down into three stages: data collection, model training, web application design.</p><h4>Model Building and Training</h4><p>Tensorflow[2] was used to create a dataset for training images from collected data. The dataset was then divided into the training dataset, validation dataset and test dataset in the ratio 8:1:1 i.e. 80% of the dataset was used for training the model, 10% was used for validation, and the other 10% was used for testing the accuracy of the model.</p><p>Data Augmentation[3] was applied to boost the accuracy of our model. Data augmentation techniques applied were random horizontal flip, vertical flip and rotation of the items in the training dataset.<p>A convolutional neural network (CNN), which is popular for image classification tasks, was used for building the model. Keras[4] was used to implement the CNN. The model was saved in a file for use with the web application to be developed.</p><h4>Web Application Development</h4><p><b>Tools and Frameworks used</b>:<br /><ul><li>Fast API - Python framework for easy creation of server applications</li><li>Tensorflow - used for loading the trained model in the server</li><li>React.js - a frontend JavaScript framework to build the user interface</li><li>Material UI - a frontend library for styled React components</li><li>Axios - JavaScript package for making requests to the server</li></ul></p>',
	'./img/tsd.png',
	'#',
	'https://github.com/iamndlovu/trauma_series_detector',
	['microchip-ai', 'python', 'react', 'css3']
);

export let projects = [];

projects.push(blog);
projects.push(db);
projects.push(tsd);
projects.push(quiz);
projects.push(todoApp);
projects.push(surveyLP);
projects.push(portfolio);
