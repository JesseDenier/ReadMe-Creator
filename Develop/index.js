console.log(`--------------------index.js has started.--------------------`);

// Loads the npm inquirer and file system packages into this javascript and allows them to be called.
const inquirer = require('inquirer');
const fs = require('fs');

// A series of questions that will appear in the console.
// TODO: Currently these answers just appear as a console log at the end and then are not saved or added to a README.
inquirer
  .prompt([
    {
      name: "description1",
      message: "What does your project do?",
    },
    {
      name: "description2",
      message: "Why did you create your project?",
    },
    {
      name: "description3",
      message: "How does your project work?",
    },
    {
      name: "installation",
      message:
        "Step by step. What needs to be done to install and run your project?",
    },
    {
      name: "usage1",
      message: "How does the end-user use your project?",
    },
    {
      name: "usage2",
      message: "What are some use case examples for your project?",
    },
    {
      name: "credits1",
      message: "Did anyone else work on your project?",
    },
    {
      name: "credits2",
      message: "Did you use any third-party asses when creating your project?",
    },
    {
      name: "credits3",
      message: "Did you follow any tutorials when creating your project?",
    },
    {
      name: "license",
      message: "Will you be using the standard MIT lisense or something else?",
    },
  ])
  .then((answers) => {
    console.info("Answer:", answers);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//console.log(`---------------------index.js has ended.---------------------`);