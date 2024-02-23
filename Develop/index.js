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
      name: "descriptionWhat",
      message: "What does your project do?",
    },
    {
      name: "descriptionWhy",
      message: "Why did you create your project?",
    },
    {
      name: "descriptionHow",
      message: "How does your project work?",
    },
    {
      name: "installation",
      message:
        "Step by step. What needs to be done to install and run your project?",
    },
    {
      name: "usage",
      message: "How does the end-user use your project?",
    },
    {
      name: "usageExample",
      message: "What are some use case examples for your project?",
    },
    {
      type: "list",
      name: "creditsPeople",
      message: "Did anyone else work on your project?",
      choices: ["Yes", "No"],
    },
    {
      type: "input",
      name: "creditsPeopleList",
      message:
        "List who else worked on the project. Seperate each one with a comma and space.",
      when: (answers) => answers.creditsPeople === "Yes",
    },
    {
      type: "list",
      name: "creditsAssets",
      message: "Did you use any third-party assets when creating your project?",
      choices: ["Yes", "No"],
    },
    {
      type: "input",
      name: "creditsAssetsList",
      message:
        "List all third-party assets used shen creating your project. Seperate each one with a comma and space.",
      when: (answers) => answers.creditsAssets === "Yes",
    },
    {
      type: "list",
      name: "creditsTutorials",
      message: "Did you follow any tutorials when creating your project?",
      choices: ["Yes", "No"],
    },
    {
      type: "input",
      name: "creditsTutorialsList",
      message:
        "List all turorials you used when creating your project. Seperate each one with a comma and space.",
      when: (answers) => answers.creditsTutorials === "Yes",
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
        "*Custom",
      ],
    },
    {
      type: "input",
      name: "licenseCustom",
      message: "Please write out your custom license.",
      when: (answers) => answers.license === "*Custom",
    },
    {
      type: "list",
      name: "tests",
      message: "Did you create any tests for the end user to replicate?",
      choices: ["Yes", "No"],
    },
    {
      type: "input",
      name: "testsList",
      message:
        "Write out what tests you ran, and how the user can replicate them.",
      when: (answers) => answers.tests === "Yes",
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
  // TODO: Add a way to link a photo to Usage.
  // TODO: Make it so license prints the full license and adds a tag to the top instead of just printing the name.
  .then((answers) => {
    const readMeContent = `
# ${answers.title}

## Description

${answers.descriptionWhat}\n${answers.descriptionWhy}\n${answers.descriptionHow}

## Table of Contents

- [Installation] (#installation)
- [Usage] (#usage)
- [Credits] (#credits)
- [License] (#license)
- [Tests] (#tests)
- [Questions] (#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}\n${answers.usageExample}

## Credits

Additional Contributors: ${answers.creditsPeopleList}
3rd Party Assets: ${answers.creditsAssetsList}
Tutorials: ${answers.creditsTutorialsList}

## License

${answers.license}

## Tests

${answers.tests}

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
