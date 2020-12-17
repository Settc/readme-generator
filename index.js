const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")


const writeFileAsync = util.promisify(fs.writeFile)



const questions = () => {
   return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your README?",
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description for your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter the instructions for installation"
        },
        {
            type: "input",
            name: "usage",
            message: "How to use this project?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed on this project?"
        },
        {
            type: "input",
            name: "test",
            message: "Please enter the test instructions"
        },
        {
            type: "rawlist",
            name: "license",
            message: "Please choose a license (Visit www.choosealicense.com to help you decide!)",
            choices: [
                "MIT",
                "GNU GPLv3"
            ]
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
}

const generateMD = (answers) => 
`
# ${answers.title}

## Description
[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)]
    ${answers.description}
## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

### Installation:
    ${answers.installation}

### Usage:
    ${answers.usage}

### Contributing:
    ${answers.contributing}

### Tests:
    ${answers.test}

### Questions?:
    www.github.com/${answers.github}
    ${answers.email}

### License: This work is protect by the ${answers.license} license. Please go to 
    www.opensource.org/licenses to learn more
`


// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile()
// }

// function to initialize program
const init = async () => {
    try {
        const answers = await questions()

        const MD = generateMD(answers)

        await writeFileAsync("README.md", MD)
    } catch (e) {
        console.error(e)
    }

}

// function call to initialize program
init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled
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
