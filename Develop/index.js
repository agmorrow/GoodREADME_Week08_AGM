// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input',
       message: 'Provide a title for your project.',
       name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
     },
     {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
     },
     {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
     },
     {
        type: 'input',
        message: 'Contribution Guidelines',
        name: 'contribution',
     },
     {
        type: 'input',
        message: 'How do you test this project?',
        name: 'tests',
      },
      {
         type: 'list',
         message: 'Choose a license for your project.',
         choices: [
          'Apache',
          'MIT',
          'Mozilla',
          'GNU',
          'None'
         ],
         name: 'license',
      },
     {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
     },
     {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
     },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log("Success!");
   });
};

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(
      questions
  )
  .then(function (userInput){
     console.log(userInput)
     writeToFile("README.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();
