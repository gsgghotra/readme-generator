// function to generate markdown for README
function generateMarkdown(data) {


  // Temp variables to hold badge for license
  let licenseBadge;
  let imgURL = "https://img.shields.io/badge/";
  let licenseURL = "https://opensource.org/licenses/";

  //Update image and background of the badge based on the selected badge
  if (data.license === 'MIT'){
    licenseBadge= `[![License: ${data.license}](${imgURL}License-MIT-yellow.svg)](${licenseURL}MIT)`;
  } else if(data.license === 'APACHE 2.0'){
    licenseBadge= `[![License: ${data.license}](${imgURL}License-Apache_2.0-blue.svg)](${licenseURL}Apache-2.0)`;
  } else if(data.license === 'GPL 3.0'){
    licenseBadge= `[![License: ${data.license}](${imgURL}License-GPLv3-blue.svg)](${licenseURL}gpl-3.0)`;
  } else if(data.license === 'BSD 3'){
    licenseBadge= `[![License: ${data.license}](${imgURL}License-BSD_3--Clause-blue.svg)](${licenseURL}BSD-3-Clause)`;
  } else {
    licenseBadge= ``; // If not selected from list or selected none
  }


  // Readme file starts from here
  return `# ${data.title}
  ${ data.license !== 'none' ? licenseBadge : '' /* Ternary operator Hide badge if none selected*/}

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
