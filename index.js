const inquirer = require("inquirer")
const fs = require("fs")

// array of questions for user
// WHEN I enter a description, installation instructions, 
// usage information, contribution guidelines, and test instructions

const questions = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your README?"
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description for your project"
        },
        {
            type: "input",
            name: "installation instructions",
            message: "Please enter the instructions for installation"
        },
        {
            type: "input",
            name: "usage info",
            message: "Please enter the usage info"
        },
        {
            type: "input",
            name: "",
            message: "Please enter the contribution guidelines"
        },
        {
            type: "input",
            name: "",
            message: "Please enter the test instructions"
        },
        {
            type: "rawlist",
            name: "license",
            message: "Please choose a license"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github user name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        
])

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
