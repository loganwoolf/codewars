const { domainName, removeProtocol } = require('./5-extractURL');

describe('Function domainName', () => {
  const testCases = [
    {
      test: 'http://www.loganwoolf.com/',
      domain: 'loganwoolf',
    },
    {
      test: 'https://loganwoolf.com/',
      domain: 'loganwoolf',
    },
    {
      test: 'store.loganwoolf.com',
      domain: 'loganwoolf',
    },
    {
      test: 'store.loganwoolf.com/stuff',
      domain: 'loganwoolf',
    },
  ];
  testCases.forEach((testCase) => {
    it(`should work with ${testCase.test}`, () => {
      expect(domainName(testCase.test)).toBe(testCase.domain);
    });
  });
});

describe('Function removeProtocol', () => {
  const suffix = 'www.loganwoolf.com';

  it('removes "http://" from a URL', () => {
    const url = `http://${suffix}`;
    expect(removeProtocol(url)).toBe(suffix);
  });

  it('returns same input if no protocol', () => {
    expect(removeProtocol(suffix)).toBe(suffix);
  });
});
