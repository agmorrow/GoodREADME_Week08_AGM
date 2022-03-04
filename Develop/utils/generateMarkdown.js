// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-yellow.svg)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Mozilla') {
    return `[Mozilla](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'GNU') {
    return `[GNU](https://www.gnu.org/licenses/agpl-3.0)`;
  } else {
    return `[None](https://www.boost.org/LICENSE_1_0.txt)`;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  This license is covered under ${renderLicenseLink(license)}
  * If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)`

};

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description:
  ${data.description}
  
  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)
  
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${renderLicenseSection(data.license)}
  

  ## Contribution Guidelines:
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  ${data.contribution}

  ## Test Instructions:
  ${data.tests}

  ### Questions:
  Please contact me through one of the following links if you have any additional questions:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;