const {
  encodeRailFenceCipher,
  splitToRails,
  decodeRailFenceCipher,
} = require('./3-railFenceCipher');

describe('Split to rails function', () => {
  const string = '01234567012345670';

  describe('Number of rails', () => {
    test('is correct for 1 rail', () => {
      const rails = 1;
      expect(splitToRails(string, rails)).toHaveLength(rails);
    });
    test('is correct for 2 rails', () => {
      const rails = 2;
      expect(splitToRails(string, rails)).toHaveLength(rails);
    });
    test('is correct for 6 rails', () => {
      const rails = 6;
      expect(splitToRails(string, rails)).toHaveLength(rails);
    });
  });

  describe('First rail is:', () => {
    test('same as original with 1 rail', () => {
      const rails = 1;
      expect(splitToRails(string, rails)[0]).toStrictEqual([
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '0',
      ]);
    });
    test('every even letter with 2 rails', () => {
      const rails = 2;
      expect(splitToRails(string, rails)[0]).toStrictEqual([
        '0',
        '2',
        '4',
        '6',
        '0',
        '2',
        '4',
        '6',
        '0',
      ]);
    });
    test('every 4th letter with 3 rails', () => {
      const rails = 3;
      expect(splitToRails(string, rails)[0]).toStrictEqual([
        '0',
        '4',
        '0',
        '4',
        '0',
      ]);
    });
    test('every 8th letter with 5 rails', () => {
      const rails = 5;
      expect(splitToRails(string, rails)[0]).toStrictEqual(['0', '0', '0']);
    });
    test('every 14th letter with 8 rails', () => {
      const rails = 8;
      expect(splitToRails(string, rails)[0]).toStrictEqual(['0', '6']);
    });
  });

  describe('Second rail is:', () => {
    test('every odd letter with 2 rails', () => {
      const rails = 2;
      expect(splitToRails(string, rails)[1]).toStrictEqual([
        '1',
        '3',
        '5',
        '7',
        '1',
        '3',
        '5',
        '7',
      ]);
    });

    test('every odd letter with 3 rails', () => {
      const rails = 3;
      expect(splitToRails(string, rails)[1]).toStrictEqual([
        '1',
        '3',
        '5',
        '7',
        '1',
        '3',
        '5',
        '7',
      ]);
    });

    test('correct with 5 rails', () => {
      const rails = 5;
      expect(splitToRails(string, rails)[1]).toStrictEqual([
        '1',
        '7',
        '1',
        '7',
      ]);
    });

    test('correct with 8 rails', () => {
      const rails = 8;
      expect(splitToRails(string, rails)[1]).toStrictEqual(['1', '5', '7']);
    });
  });
});

describe('Encode function', () => {
  const string = '0123456701234567';
  test(`Correctly encodes string using 1 rail`, () => {
    expect(encodeRailFenceCipher(string, 1)).toBe('0123456701234567');
  });
  test(`Correctly encodes string using 2 rails`, () => {
    expect(encodeRailFenceCipher(string, 2)).toBe('0246024613571357');
  });
  test(`Correctly encodes string using 3 rails`, () => {
    expect(encodeRailFenceCipher(string, 3)).toBe('0404135713572626');
  });
  test(`Correctly encodes string using too many rails`, () => {
    expect(encodeRailFenceCipher(string, 24)).toBe('0123456701234567');
  });
});
