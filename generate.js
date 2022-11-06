/* eslint-disable no-console */
const fs = require('fs');

const fileName = process.argv[2];
const functionName = process.argv[3];

if (process.argv.length < 3) {
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

const writeFiles = () => {
  fs.writeFileSync(
    `${fileName}.js`,
    `const ${functionName} = () => {
    // function body
  };
  
  module.exports = { ${functionName} };
  `,
  );

  fs.writeFileSync(
    `${fileName}.test.js`,
    `const { ${functionName} } = require('./${fileName}');
  
  describe('Function ${functionName}', () => {
    it('should...', () => {
      // expect();
    });
  });
  `,
  );
};

writeFiles();
