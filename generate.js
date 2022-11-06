/* eslint-disable no-console */
const fs = require('fs');

const [, , fileName, ...functionNames] = process.argv;

if (!fileName) {
  console.error(
    `Generate a *.js and *.test.js file with a given
file name and function name.

Example: Create two files named newKata.js and 
newKata.test.js. Make and export a function
called getSum, and import it in the test file.

$ node generate newKata getSum
`,
  );

  process.exit();
}

const createFunctions = () => {
  let outputString = '';
  functionNames.forEach((functionName) => {
    outputString += `const ${functionName} = () => {
  // function body
};

`;
  });
  outputString += `module.exports = { ${functionNames.join(', ')} };
`;
  return outputString;
};

const createTests = () => {
  let outputString = `const { ${functionNames.join(', ')} }`;
  outputString += ` = require('./${fileName}');
`;

  functionNames.forEach((functionName) => {
    outputString += `
describe('Function ${functionName}', () => {
  it('should...', () => {
    // expect();
  });
});
`;
  });

  return outputString;
};

const writeFiles = () => {
  fs.writeFileSync(`${fileName}.js`, createFunctions());
  fs.writeFileSync(`${fileName}.test.js`, createTests());
};

writeFiles();
