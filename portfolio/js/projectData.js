import { Project } from "./Project.js"; // Project class

//projects
export const db = new Project(
  "Diamond Berry",
  "Business development company static website",
  "<p>Basic company website built using only HTML, CSS and JavaScript. The purpose of the site is to showcase the services provided by the company and provide a way for the public to get in touch.</p><p>PHP was used to handle contact form submissions by forwarding the messages to the business onwner's email address.</p>",
  "./img/diamond-berry.png",
  "http://diamondberry.co.zw",
  "https://github.com/iamndlovu/diamond-berry",
  ["html5", "js", "css3", "php"]
);

export const tsd = new Project(
  "Trauma Series Detector",
  "Machine learning app to detect fractures and dislocations in x-ray images",
  "<p>The development of the application was broken down into three stages: data collection, model training, web application design.</p><h4>Model Building and Training</h4><p>Tensorflow[2] was used to create a dataset for training images from collected data. The dataset was then divided into the training dataset, validation dataset and test dataset in the ratio 8:1:1 i.e. 80% of the dataset was used for training the model, 10% was used for validation, and the other 10% was used for testing the accuracy of the model.</p><p>Data Augmentation[3] was applied to boost the accuracy of our model. Data augmentation techniques applied were random horizontal flip, vertical flip and rotation of the items in the training dataset.<p>A convolutional neural network (CNN), which is popular for image classification tasks, was used for building the model. Keras[4] was used to implement the CNN. The model was saved in a file for use with the web application to be developed.</p><h4>Web Application Development</h4><p><b>Tools and Frameworks used</b>:<br /><ul><li>Fast API - Python framework for easy creation of server applications</li><li>Tensorflow - used for loading the trained model in the server</li><li>React.js - a frontend JavaScript framework to build the user interface</li><li>Material UI - a frontend library for styled React components</li><li>Axios - JavaScript package for making requests to the server</li></ul></p>",
  "./img/tsd.png",
  "#",
  "https://github.com/iamndlovu/trauma_series_detector",
  ["microchip-ai", "python", "react", "css3"]
);

export const sbm4 = new Project(
  "Mimosa Plant Optimization Project",
  "Designing and commisioning a 4.6MW ball mill and floatation cells control system",
  '<p>I had the opportunity to be part of the design of the Supervisory Control And Data Acquisition (SCADA) control system for the 4.6 MW ball mill and its surrounding equipment. I worked alongside a team of experts to ensure that all safety and protection measures were in place while optimizing the performance of the plant. During this project, we also designed the floatation circuit, which required extensive testing and calibration during Factory Acceptance Tests (FATs) using Rockwell Automation\'s PLC emulator.</p><p>Throughout the commissioning phase of the project, I was heavily involved in the various testing and troubleshooting activities. This included I/O testing and instrument calibration, drive bumping, loop checking, interlock testing, and PID tuning. I also had the opportunity to test the floatation circuit and troubleshoot issues at the 11kV motor control substation. Additionally, I participated in the testing of the 4.6 MW ball mill, ensuring that it was fully operational and met all project requirements.</p><p>Overall, the Mimosa concentrator plant optimization project was a challenging and rewarding experience that allowed me to showcase my skills in designing and implementing complex control systems. Working alongside a dedicated team of experts in their respective disciplines, I got the opportunity to learn new methodoligies from some of the best engineers in the continent. We were able to deliver a high-quality solution that fully met the project requirements and achieved the desired outcome. I am thrilled to have been part of this project and look forward to applying what I have learned to future endeavors.</p><p><a href="https://photos.app.goo.gl/oahdN7E9zccLTFr86" target="_blank" style="color: #0083ff" onMouseOver="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'none\'">View project gallery</a></p>',
  "./img/floatation.jpeg",
  "https://photos.app.goo.gl/oahdN7E9zccLTFr86",
  "#",
  [],
  true
);

export const hoist = new Project(
  "How Mine hoist maintanence",
  "Designing and commisioning a 4.6MW ball mill and floatation cells control system",
  "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam officiis, culpa, sapiente doloribus nam velit eos odit esse architecto, delectus molestias perspiciatis hic asperiores expedita quasi sint nemo itaque aliquam quod. Aspernatur, asperiores. Odit quasi debitis non ducimus placeat fugit voluptates accusantium optio maxime ratione saepe voluptatem perspiciatis, maiores in vel amet alias illum iusto omnis odio quaerat error cumque magni.</p><p>In, tenetur error corporis iste accusamus nobis, odio earum similique, reiciendis sint exercitationem maiores accusantium adipisci dignissimos tempore iure explicabo mollitia! Praesentium eos facere nihil numquam excepturi reprehenderit repellendus sit? Voluptatum, illo quibusdam, quo sequi possimus sunt laborum tempore dignissimos, tempora earum eius quos beatae quisquam ipsa dolorem nam ea mollitia illum fugit quidem hic! Debitis, quaerat quae?</p>",
  "./img/hoist.jpg",
  "https://photos.app.goo.gl/8Rxgng3vhgnUL1eH6",
  "#",
  true
);

export const server = new Project(
  "Mimosa Stratus Server",
  "Designing and commisioning a 4.6MW ball mill and floatation cells control system",
  "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam officiis, culpa, sapiente doloribus nam velit eos odit esse architecto, delectus molestias perspiciatis hic asperiores expedita quasi sint nemo itaque aliquam quod. Aspernatur, asperiores. Odit quasi debitis non ducimus placeat fugit voluptates accusantium optio maxime ratione saepe voluptatem perspiciatis, maiores in vel amet alias illum iusto omnis odio quaerat error cumque magni.</p><p>In, tenetur error corporis iste accusamus nobis, odio earum similique, reiciendis sint exercitationem maiores accusantium adipisci dignissimos tempore iure explicabo mollitia! Praesentium eos facere nihil numquam excepturi reprehenderit repellendus sit? Voluptatum, illo quibusdam, quo sequi possimus sunt laborum tempore dignissimos, tempora earum eius quos beatae quisquam ipsa dolorem nam ea mollitia illum fugit quidem hic! Debitis, quaerat quae?</p>",
  "./img/tsd.png",
  "#",
  "#",
  [],
  true
);

export let projects = [];

projects.push(sbm4);
// projects.push(server);
// projects.push(hoist);
projects.push(db);
projects.push(tsd);

export default projects;
