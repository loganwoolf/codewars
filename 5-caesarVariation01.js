function movingShift ( clearText, shift ) {
  let cryptText = ''
  for (let i in clearText) {
    if (clearText[i] !== ' ') {
      let cryptCode = +clearText.charCodeAt(i) + +i + shift
      cryptText += String.fromCharCode(cryptCode)
    } else if (clearText[i] !== ' ') {
      cryptText += ' '
    }
  }

  return cryptText
}


function demovingShift ( cryptText, shift ) {
  let clearText = ''
  for (let i in cryptText) {
    if (cryptText[i] !== ' ') {
      let clearCode = +cryptText.charCodeAt(i) - (+i) - shift
      clearText += String.fromCharCode(clearCode)
    } else if (cryptText[i] === ' ') {
      clearText += ' '
    }
  }

  return clearText
}


console.log(
  demovingShift(
    movingShift('hello', 1), 1
  )
)
