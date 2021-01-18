import { Project } from './Project.js'; // Project class

//TODO: create array of projects

//test projects
const calculator = new Project(
  'Calculator',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis possimus reiciendis eveniet optio accusamus vel quo dolorem quod, aliquid suscipit voluptates, expedita magni porro aut! Minus vero alias praesentium fugiat culpa voluptatum tempore! Nostrum illum voluptas officia vel temporibus, esse dolorum id eveniet iste quae iure blanditiis voluptatem doloremque aspernatur voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam eum suscipit dicta.',
  './img/calculator.png',
  '#',
  '#'
);

export let projects = [];

for(let i = 0; i < 5; i++) {
  projects.push(calculator);
}