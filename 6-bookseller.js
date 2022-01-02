b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
// res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"

function stockList (listOfArt, listOfCat) {
  
  // return empty string if query is empty
  if (!listOfArt || !listOfCat) {
    return ''
  }
  
  // create object to store quantity of each category
  let outputObj = {}
  for (let category of listOfCat) {
    outputObj[category] = 0
    
    // check if the current book belongs in the current category
    for (let bookStock of listOfArt) {
      if (bookStock[0] === category) {
        
        // increment the category quantity by book supply
        let quantity = +bookStock.split(' ')[1]
        outputObj[category] += quantity
      }
    }
  }
  
  // if entirely no stock, true will cause empty string return
  let noStock = true
  
  // format output
  let outputArr = []
  for (let key in outputObj) {
    let value = outputObj[key]
    let strSegment = `(${key} : ${value})`
    outputArr.push(strSegment)
    
    // flip no stock flag if non-zero quantity is ever encountered
    value > 0 ? noStock = false : undefined
  }
  if (noStock) {
    return ''
  } else {
  return outputArr.join(' - ')
  }
}

console.log(
  stockList(b, c)

)