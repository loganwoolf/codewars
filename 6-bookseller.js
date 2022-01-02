b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
// res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"


function stockList (listOfArt, listOfCat) {
  if (!listOfArt || !listOfCat) {
    return ''
  }
  let outputObj = {}
  for (let category of listOfCat) {
    outputObj[category] = 0
    for (let bookStock of listOfArt) {
      if (bookStock[0] === category) {
        let quantity = +bookStock.split(' ')[1]
        if (!outputObj[category]) {
          outputObj[category] = quantity
        } else {
          outputObj[category] += quantity
        }
      }
    }
  }
  let outputArr = []
  let noStock = true
  for (let key in outputObj) {
    let value = outputObj[key]
    let strSegment = `(${key} : ${value})`
    outputArr.push(strSegment)
    value > 0 ? noStock = false : undefined
  }
  if (noStock) {return ''}
  return outputArr.join(' - ')
}
console.log(
  stockList(b, c)

)