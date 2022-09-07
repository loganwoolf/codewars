const {
  encodeRailFenceCipher,
  splitToRails,
  buildRails,
  // decodeRailFenceCipher,
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
  test(`Correctly encodes a short string using 4 rails`, () => {
    expect(encodeRailFenceCipher('01234', 4)).toBe('01243');
  });
  test(`Correctly encodes string using too many rails`, () => {
    expect(encodeRailFenceCipher(string, 24)).toBe('0123456701234567');
  });
});

describe('Build rails function', () => {
  describe('With two rails:', () => {
    const rails = 2;
    test('First rail is correct', () => {
      const code = encodeRailFenceCipher('0123456701234567', 2);
      expect(buildRails(code, rails)[0]).toBe('02460246');
    });
    test('Last rail is correct', () => {
      const code = encodeRailFenceCipher('012345670', 2);
      expect(buildRails(code, rails)[1]).toBe('1357');
    });
  });

  describe('With three rails:', () => {
    const rails = 3;
    test('Last rail is correct when just enough extras exist', () => {
      const code = encodeRailFenceCipher('0123012', rails);
      expect(buildRails(code, rails)[rails - 1]).toBe('22');
    });
    test('Last rail is correct when fewer extras exist', () => {
      const code = encodeRailFenceCipher('012301', rails);
      expect(buildRails(code, rails)[rails - 1]).toBe('2');
    });
    test('Second last rail is correct when not enough extras exist', () => {
      const code = encodeRailFenceCipher('0123012', rails);
      expect(buildRails(code, rails)[rails - 2]).toBe('131');
    });
    test('First rail is correct when just enough extras exist', () => {
      const code = encodeRailFenceCipher('01230', rails);
      expect(buildRails(code, rails)[0]).toBe('00');
    });
  });

  describe('With four rails:', () => {
    const rails = 4;
    test('Last rail is correct when just enough extras exist', () => {
      const code = encodeRailFenceCipher('0123450123', rails);
      expect(buildRails(code, rails)[rails - 1]).toBe('33');
    });
    test('Last rail is correct when fewer extras exist', () => {
      const code = encodeRailFenceCipher('012345012', rails);
      expect(buildRails(code, rails)[rails - 1]).toBe('3');
    });
    test('Second last rail is correct when more extras exist', () => {
      const code = encodeRailFenceCipher('012345012345', rails);
      expect(buildRails(code, rails)[rails - 2]).toBe('2424');
    });
    test('Second last rail is correct when fewer extras exist', () => {
      const code = encodeRailFenceCipher('0123450123', rails);
      expect(buildRails(code, rails)[rails - 2]).toBe('242');
    });
    test('Second last rail is correct for a single full cycle', () => {
      const code = encodeRailFenceCipher('0123450', rails);
      expect(buildRails(code, rails)[1]).toBe('15');
    });
    test('First rail is correct when just enough extras exist', () => {
      const code = encodeRailFenceCipher('0123450', rails);
      expect(buildRails(code, rails)[0]).toBe('00');
    });
    describe('When code is less than one cycle', () => {
      test('Last rail is correct when populated', () => {
        const code = encodeRailFenceCipher('01234', rails);
        expect(buildRails(code, rails)[rails - 1]).toBe('3');
      });
      test('Last rail is correct when not populated', () => {
        const code = encodeRailFenceCipher('012', rails);
        expect(buildRails(code, rails)[rails - 1]).toBeUndefined();
      });
      test('Second last rail is correct when fully populated', () => {
        const code = encodeRailFenceCipher('01234', rails);
        expect(buildRails(code, rails)[rails - 2]).toBe('24');
      });
      test('Third last rail is correct when partially populated', () => {
        const code = encodeRailFenceCipher('01234', rails);
        expect(buildRails(code, rails)[rails - 3]).toBe('1');
      });
      test('First rail is correct', () => {
        const code = encodeRailFenceCipher('01234', rails);
        expect(buildRails(code, rails)[0]).toBe('0');
      });
    });
  });
});
