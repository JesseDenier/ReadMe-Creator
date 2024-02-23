// Loads the npm inquirer and file system packages into this javascript and allows them to be called.
const inquirer = require("inquirer");
const fs = require("fs");

// Creates an object 'licenseBadge' based on the users choice to the license question.
function createLicenseBadge(answers) {
  if (answers.license === "Apache") {
    licenseBadge = `[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`;
  }
  if (answers.license === "GNU") {
    licenseBadge = `[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (answers.license === "MIT") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (answers.license === "BSD") {
    licenseBadge = `[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if (answers.license === "Boost") {
    licenseBadge = `[![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if (answers.license === "Creative Commons") {
    licenseBadge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-green.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  if (answers.license === "Eclipse") {
    licenseBadge = `[![License: EPL-2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`;
  }
  if (answers.license === "Mozilla") {
    licenseBadge = `[![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  if (answers.license === "The Unilicense") {
    licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

// TODO: Add a way to link a photo to Usage.
// Creates an object 'readMeContent' that has proper styling and inserts the users answers.
function createMarkdown(answers) {
  if (answers.testsList === undefined) {
    answers.testsList = `No sample tests have currently been written for end users. Feel free to experiment.`;
  }
  if (answers.creditsPeopleList === undefined) {
    answers.creditsPeopleList = `None, this project was created entirely by ${answers.name}`;
  }
  if (answers.creditsAssetsList === undefined) {
    answers.creditsAssetsList = `None`;
  }
  if (answers.creditsTutorialsList === undefined) {
    answers.creditsTutorialsList = `None`;
  }
  if (answers.usageContent === "Photo") {
    answers.usageContent = `![Photo Demonstrating Usage](<${answers.usageContentLink}>)\n`;
  }
  if (answers.usageContent === "Video") {
    answers.usageContent = `[Video Demonstrating Usage](<${answers.usageContentLink}>)\n`;
  }
  if (answers.usageContent === "None") {
    answers.usageContent = ``;
  }
  const readMeContent = `
${licenseBadge}

# ${answers.title}

## Description

${answers.descriptionWhat}\n
${answers.descriptionWhy}\n
${answers.descriptionHow}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}\n
${answers.usageContent}\n
${answers.usageExample}

## License

This project is licensed under the terms of the ${answers.license} license. See the badge at the top of the README for more details.

## Contributing

Additional Contributors: ${answers.creditsPeopleList}\n
3rd Party Assets: ${answers.creditsAssetsList}\n
Tutorials: ${answers.creditsTutorialsList}

## Tests

${answers.testsList}

## Questions

Feel free to reach out to me with any additional questions through the following methods:\n
Github Profile: https://www.github.com/${answers.gitHub}\n
Email Address: ${answers.email}`;
  return readMeContent;
}

// Creates a README.md file and adds the generated content to that file.
function createREADME(readMeContent) {
  fs.writeFile("README.md", readMeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README file generated!");
    }
  });
}

// Prompts the user with a series of questions and then runs multiple functions to convert those answers into a README.md.
function init() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is your name?",
      },
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
        name: "usageContent",
        message:
          "Do you have additional content that demonstates proper usage of your project?",
        choices: ["Photo", "Video", "None"],
      },
      {
        type: "input",
        name: "usageContentLink",
        message: "Please provide a relative link to your photo or video.",
        when: (answers) =>
          answers.usageContent === "Photo" || answers.usageContent === "Video",
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
        message:
          "Did you use any third-party assets when creating your project?",
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
        ],
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
    .then((answers) => {
      createLicenseBadge(answers);
      createMarkdown(answers);
      const readMeContent = createMarkdown(answers);
      createREADME(readMeContent);
    });
}

// Function call to initialize app
init();
