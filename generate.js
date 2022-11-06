const fs = require('fs');

const fileName = process.argv[2];
const functionName = process.argv[3];

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
