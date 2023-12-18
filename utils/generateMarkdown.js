// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

  ## Installation
  To install neccessary dependencies, run the following command:

  \`\`\` bash pip install foobar \`\`\`

  ## Usage


  ## License
  The Project is under the -- licencse.

  ## Contributing

  ## Tests
  To run tests, run the following command:

  \`\`\` bash pip install foobar \`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [Here](email@email.com). You can find more of my work at [username](https://github.com/).

`;
}
module.exports = generateMarkdown;
