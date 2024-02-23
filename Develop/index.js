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
      message: "Did you use any third-party assets when creating your project?",
    },
    {
      name: "credits3",
      message: "Did you follow any tutorials when creating your project?",
    },
    {
      type: "list",
      name: "license",
      message: "Which license will you be using for your project?",
      choices: [
        "Apache",
        "GNU",
        "MIT",
        "BSD",
        "Boost",
        "Creative Commons",
        "Eclipse",
        "Mozilla",
        "The Unilicense",
      ],
    },
    {
      name: "gitHub",
      message: "What is your GitHub username?",
    },
    {
      name: "email",
      message: "What is your email address?",
    },
  ])
  // Lays out the users answers in an organized fashion based on sample README.md.
  // TODO: Add text and links to Table of Contents.
  // TODO: Add a way to link a photo to Usage.
  // TODO: Change the license question .
  // TODO: Add questions and answer locations for Tests, and Questions
  // TODO: Make it so license prints the full license and adds a tag to the top instead of just printing the name.
  .then((answers) => {
    const readMeContent = `
# <${answers.title}>

## Description

${answers.description1} ${answers.description2} ${answers.description3}

## Table of Contents

???

## Installation

${answers.installation}

## Usage

${answers.usage1} ${answers.usage2}

## Credits

${answers.credits1} ${answers.credits2} ${answers.credits3}

## License

${answers.license}

## Tests

???

## Questions

Feel free to reach out to me with any additional questions you may have.
Github Profile: https://www.github.com/${answers.gitHub}
Email Address: ${answers.email}
    `;
    // Creates a README.md file and adds the content to the file.
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
