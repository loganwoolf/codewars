function wallpaper(l, w, h) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];

  if (l === 0 || w === 0 || h === 0) {
    return numbers[0];
  }

  const extra = 1.15;

  const perimeter = l + l + w + w;
  const levels = h / 0.52;
  const count = Math.ceil((perimeter * levels * extra) / 10);

  return numbers[count];
}

// eslint-disable-next-line no-console
console.log(wallpaper(7.8, 2.9, 3.29));
