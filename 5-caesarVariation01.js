function movingShift ( clearText, shift ) {
  let cryptText = ''
  for (let i in clearText) {
    if (clearText[i] !== ' ') {
      let cryptCode = +clearText.charCodeAt(i) + +i + shift
      cryptText += String.fromCharCode(cryptCode)
    } else if (clearText[i] === ' ') {
      cryptText += ' '
    }
  }

  let outputArr = []
  let messageLength = Math.floor(clearText.length / 4)
  for (let i = 0; i < 5; i++) {
    outputArr.push(cryptText.slice(i * messageLength, i * messageLength + messageLength))
  }
  console.log(outputArr)
  return outputArr
}


function demovingShift ( cryptMessages, shift ) {
  let cryptText = cryptMessages.join('')
  let clearText = ''
  for (let i in cryptText) {
    if (cryptText[i] !== ' ') {
      let clearCode = +cryptText.charCodeAt(i) - (+i) - shift
      clearText += String.fromCharCode(clearCode)
    } else if (cryptText[i] === ' ') {
      clearText += ' '
    }
  }
  console.log(clearText)
  return clearText
}

demovingShift(
  movingShift('I should have known that you would have a perfect answer for me', 1), 1

)

