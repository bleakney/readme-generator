// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project? (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please enter a description for your project. (Required)',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstallationInstructions',
            message: 'Does your project require installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: "Please enter the installation instructions for your project.",
            when: ({ confirmInstallationInstructions }) => confirmInstallationInstructions
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter any usage information for your project.'
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Does your project allow other users to contribute to its ongoing development?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please describe the Contribution Guidelines for your project.',
            when: ({ confirmContributing }) => confirmContributing
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter any pertinent information regarding testing for your project.'
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'userEmail',
            message: 'What is your email address?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project. (Required)',
            choices: ['MIT', 'Apache', 'GPL']
        }
    ])};


// Function to initialize app
async function init() {
    promptUser()
    .then(answers => {
        const markdownContent = generateMarkdown(answers);
        
        fs.writeFile('./README.md', markdownContent, err => {
            if (err) throw new Error(err);
            console.log('README created! Check out README.md in this directory to see it!')
        } )
    });
}

// Function call to initialize app
init();
