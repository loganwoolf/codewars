function snail(arr) {
  // determine distance pattern
  const cols = arr[0].length;
  const rows = arr.length;
  const alt = [cols, rows - 1];
  const dist = [];
  let inc = 0;
  while (alt[inc % 2] > 0) {
    dist.push(alt[inc % 2]);
    alt[inc % 2] -= 1;
    inc += 1;
  }

  let coord = [0, 0];
  const outputArr = [];

  // define functions for each direction
  const colInc = (cycles) => {
    // eslint-disable-next-line prefer-const
    let [x, y] = coord;
    for (let i = 0; i < cycles; i++) {
      outputArr.push(arr[y][x]);
      x += 1;
    }
    // modify coord for next run
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

  // create object to call functions
  const traverse = {
    colDec,
    colInc,
    rowDec,
    rowInc,
  };

  // create array to cycle through function calls in order
  const directions = ['colInc', 'rowInc', 'colDec', 'rowDec'];

  // call appropriate function for each run
  for (let i = 0; i < dist.length; i++) {
    traverse[directions[i % 4]](dist[i]);
  }

  return outputArr;
}

module.exports = snail;
