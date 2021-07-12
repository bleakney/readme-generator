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
  [Github](http://www.github.com/${answers.githubUsername})

  ### Where to reach me:
  [Email](mailto:${answers.userEmail})


`;
}

module.exports = generateMarkdown;
