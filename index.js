const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
{
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    },
    {
    type: 'input',
    name: 'title',
    message: 'What is your project name?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
    },
    {
    type: 'list',
    message: 'What Kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What commands should be run to install dependencies?',
    default: 'npm i',
    },
    {
    type: 'input',
    message: 'What commands should be run to run tests?',
    name: 'tests',
    default: 'npm test',
    },
    {
    type: 'input',
    message: 'What does user need to know about using the repo?',
    name: 'knowledge',
    },
    {
    type: 'input',
    message: 'What does user need to know about contributing to the repo?',
    name: 'contribution',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,
        (err) => err ? console.log(err) : 
        //Print generating readme when user finishes answering the questions
        console.log('Generating Readme... \n The Readme file can be found in exports folder.')
    );
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data)=>{
        const generateMarkdownFile = generateMarkdown(data);
        const filename = `exports/README.md`; //Filename is fixed
        writeToFile(filename, generateMarkdownFile);
    })
}

// function call to initialize program
init();
