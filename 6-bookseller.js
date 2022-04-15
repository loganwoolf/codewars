const b = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
const c = ['A', 'B', 'C', 'W'];
// res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"

function stockList(listOfArt, listOfCat) {
  // return empty string if query is empty
  if (!listOfArt || !listOfCat) {
    return '';
  }

  // create object to store quantity of each category
  const outputObj = {};
  for (const category of listOfCat) {
    outputObj[category] = 0;

    // check if the current book belongs in the current category
    for (const bookStock of listOfArt) {
      if (bookStock[0] === category) {
        // increment the category quantity by book supply
        const quantity = +bookStock.split(' ')[1];
        outputObj[category] += quantity;
      }
    }
  }

  // if entirely no stock, true will cause empty string return
  let noStock = true;

  // format output
  const outputArr = [];
  for (const key in outputObj) {
    const value = outputObj[key];
    const strSegment = `(${key} : ${value})`;
    outputArr.push(strSegment);

    // flip no stock flag if non-zero quantity is ever encountered
    if (value > 0) {
      noStock = false;
    }
  }
  if (noStock) {
    return '';
  }
  return outputArr.join(' - ');
}

// eslint-disable-next-line no-console
console.log(stockList(b, c));
