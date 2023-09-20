const {
  domainName,
  removeProtocol,
  removeSlug,
  removeTLD,
  removeSubdomains,
} = require('./5-extractURL');

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
    {
      test: 'store.loganwoolf.co.uk/stuff',
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

describe('Function removeSlug', () => {
  it('should remove the slug when it exists', () => {
    expect(removeSlug('www.loganwoolf.com/store')).toBe('www.loganwoolf.com');
    expect(removeSlug('www.loganwoolf.com/store/products')).toBe(
      'www.loganwoolf.com',
    );
  });

  it('should remove the trailing slash from a url', () =>
    expect(removeSlug('www.loganwoolf.com/')).toBe('www.loganwoolf.com'));

  it('should not change urls with no slug', () =>
    expect(removeSlug('www.loganwoolf.com')).toBe('www.loganwoolf.com'));
});

describe('Function removeTLD', () => {
  it('removes the TLD from the URL where no subdomain', () => {
    expect(removeTLD('loganwoolf.com')).toBe('loganwoolf');
  });
  it('removes the TLD from the URL where one subdomain', () => {
    expect(removeTLD('store.loganwoolf.com')).toBe('store.loganwoolf');
  });
  it('removes the TLD from the URL where two subdomains', () => {
    expect(removeTLD('apparel.store.loganwoolf.com')).toBe(
      'apparel.store.loganwoolf',
    );
  });
  it('removes a country specific ".co.xx" TDL', () => {
    expect(removeTLD('loganwoolf.co.uk')).toBe('loganwoolf');
    expect(removeTLD('store.loganwoolf.co.uk')).toBe('store.loganwoolf');
  });
});

describe('Functions removeSubdomains', () => {
  it('works with multiple subdomains', () => {
    expect(removeSubdomains('sport.apparel.store.loganwoolf')).toBe(
      'loganwoolf',
    );
  });
  it('works with one subdomain', () => {
    expect(removeSubdomains('store.loganwoolf')).toBe('loganwoolf');
  });
  it('works with no subdomains', () => {
    expect(removeSubdomains('loganwoolf')).toBe('loganwoolf');
  });
});
