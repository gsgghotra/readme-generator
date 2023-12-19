// function to generate markdown for README
function generateMarkdown(data) {

  let licenseBadge;
  let imgURL = "https://img.shields.io/badge/";
  let licenseURL = "https://opensource.org/licenses/";

  if (data.license === 'MIT'){
    licenseBadge= `[![License: ${data.license}](${imgURL}License-MIT-yellow.svg)](${licenseURL}MIT)`;
  } else if(data.license === 'APACHE 2.0'){
    licenseBadge= `[![License: ${data.license}](${imgURL}License-Apache_2.0-blue.svg)](${licenseURL}Apache-2.0)`;
  } else if(data.license === 'GPL 3.0'){
    licenseBadge= `[![License: ${data.license}](${imgURL}License-GPLv3-blue.svg)](${licenseURL}gpl-3.0)`;
  } else if(data.license === 'BSD 3'){
    licenseBadge= `[![License: ${data.license}](${imgURL}License-BSD_3--Clause-blue.svg)](${licenseURL}BSD-3-Clause)`;
  } else if(data.license === 'None'){
    licenseBadge= ``;
  }
  return `# ${data.title}
  ${ data.license !== 'none' ? licenseBadge : '' }

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

  ## Installation
  To install neccessary dependencies, run the following command:

  \`\`\` ${data.installation} \`\`\`

  ## Usage
  ${data.knowledge}

  ## License
  The Project is under the ${data.license} licencse.

  ## Contributing
  ${data.contribution}

  ## Tests
  To run tests, run the following command:

  \`\`\` ${data.tests} \`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${data.email}](${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}).

`;
}
module.exports = generateMarkdown;
