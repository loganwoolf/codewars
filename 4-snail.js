function snail(arr) {
  // specify direction array
  const directions = ['colInc', 'rowInc', 'colDec', 'rowDec'];
  // find number of rows and columns
  const cols = arr[0].length;
  const rows = arr.length;
  // determine distance pattern
  //   for 4x4 it's [4,3,3,2,2,1,1]
  const dist = [];
  const alt = [cols, rows - 1];
  let inc = 0;
  while (alt[inc % 2] > 0) {
    dist.push(alt[inc % 2]);
    alt[inc % 2] -= 1;
    inc += 1;
  }
  // eslint-disable-next-line no-console
  console.log({ dist });
  // traverse
  let coord = [0, 0];
  const outputArr = [];

  const colInc = (cycles) => {
    // eslint-disable-next-line prefer-const
    let [x, y] = coord;
    for (let i = 0; i < cycles; i++) {
      outputArr.push(arr[y][x]);
      x += 1;
    }
    coord = [x - 1, y + 1];
  };
  const rowInc = (cycles) => {
    // eslint-disable-next-line prefer-const
    let [x, y] = coord;
    for (let i = 0; i < cycles; i++) {
      outputArr.push(arr[y][x]);
      y += 1;
    }
    coord = [x - 1, y - 1];
  };
  const colDec = (cycles) => {
    // eslint-disable-next-line prefer-const
    let [x, y] = coord;
    for (let i = 0; i < cycles; i++) {
      outputArr.push(arr[y][x]);
      x -= 1;
    }
    coord = [x + 1, y - 1];
  };
  const rowDec = (cycles) => {
    // eslint-disable-next-line prefer-const
    let [x, y] = coord;
    for (let i = 0; i < cycles; i++) {
      outputArr.push(arr[y][x]);
      y -= 1;
    }
    coord = [x + 1, y + 1];
  };
  const traverse = {
    colDec,
    colInc,
    rowDec,
    rowInc,
  };

  for (let i = 0; i < dist.length; i++) {
    traverse[directions[i % 4]](dist[i]);
  }
  return outputArr;
}

module.exports = snail;
