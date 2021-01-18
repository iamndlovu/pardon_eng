import { projects } from './projectData.js';

const projectsContainer = document.querySelector('section.projects');

//TODO: loop through projects array and call showCard(projectsContainer)


projects.forEach(project => {
  project.showCard(projectsContainer);
});
