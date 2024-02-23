console.log(`--------------------index.js has started.--------------------`);

// Loads the npm inquirer and file system packages into this javascript and allows them to be called.
const inquirer = require("inquirer");
const fs = require("fs");

// Prompts the user with a series of questions.
inquirer
  .prompt([
    {
      name: "title",
      message: "What is the title of your project?",
    },
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
  // Lays out the users answers in an organized fashion
  .then((answers) => {
    // Construct HTML content with user's answers
    const readMeContent = `
# <${answers.title}>

## Description

${answers.description1} ${answers.description2} ${answers.description3}

## Installation

${answers.installation}

## Usage

${answers.usage1} ${answers.usage2}

## Credits

${answers.credits1} ${answers.credits2} ${answers.credits3}

## License

${answers.license}
    `;
    // Write HTML content to a file
    fs.writeFile("README.md", readMeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("README file generated!");
      }
    });
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//console.log(`---------------------index.js has ended.---------------------`);
