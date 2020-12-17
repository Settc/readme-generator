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

const init = async () => {
    try {
        const answers = await questions()

        const MD = generateMD(answers)

        await writeFileAsync("README.md", MD)
    } catch (e) {
        console.error(e)
    }

}

const generateMD = (answers) => 

`
# ${answers.title}

## Description
[!License](https://img.shields.io/badge/License-${answers.license}-blue.svg)
    ${answers.description}
## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

### Installation :
${answers.installation}

### Usage :
${answers.usage}

### Contributing :
${answers.contributing}

### Tests :
${answers.test}

### Questions? :
### www.github.com/${answers.github}
### ${answers.email}

### License : 
This work is protected by the ${answers.license} license. Please go to 
www.opensource.org/licenses to learn more
`

init();
