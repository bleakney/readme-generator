// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if(license === 'MIT') {
//     answers.push({licenseLink: 'https://opensource.org/licenses/MIT'});
//   } else if (license === 'Apache') {
//     answers.push({licenseLink})
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);

  return `
  # ${answers.projectTitle}
  [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [Contribution Guidelines] (#contribution)
  * [Testing] (#testing)
  * [Questions] (#questions)
  
  ## Description

  ${answers.projectDescription}

  ## Installation

  ${answers.installationInstructions}

  ## Usage

  ${answers.usage}

  ## Contribution Guidelines

  ${answers.contributing}

  ## Testing

  ${answers.tests}

  ## Questions

  ### Where to find me:
  [My Github] (http://www.gihub.com/${answers.githubUsername})

  ### Where to reach me:
  [Email] (mailto:${answers.userEmail}

`;
}

module.exports = generateMarkdown;
