// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);

  return `
  # ${answers.projectTitle}
  [![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue)](${answers.licenseLink})

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ## Description

  ${answers.projectDescription}

  ## Installation

  ${answers.installationInstructions}

  ## Usage

  ${answers.usage}

  ## Contributing

  ${answers.contributing}

  ## Testing

  ${answers.tests}

  ## Questions

  ### Where to find me:
  [Github](http://www.gihub.com/${answers.githubUsername})

  ### Where to reach me:
  [Email](mailto:${answers.userEmail})

`;
}

module.exports = generateMarkdown;
