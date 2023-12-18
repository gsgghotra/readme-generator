const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
    },
    {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'stack',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'telekinesis'],
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,
        (err) => err ? console.log(err) : 
        console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data)=>{
        const generateMarkdownFile = generateMarkdown(data);
        const filename = `exports/README.md`;
        writeToFile(filename, generateMarkdownFile);
    })
}

// function call to initialize program
init();
