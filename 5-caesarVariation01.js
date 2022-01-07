function movingShift ( clearText, shift ) {
  if (shift < 0) return
  let cryptText = ''

  const alpha = /[a-zA-Z]/
  for (let i in clearText) {
    if (alpha.test(clearText[i])) {
      const clearCode = clearText.charCodeAt(i)

      if (clearCode >= 65 && clearCode <= 90) {
        cryptCode = clearCode + (+i) + shift
        while (cryptCode > 90) {
          cryptCode -= 26
        }
      } else if (clearCode >= 97 && clearCode <= 122) {
        cryptCode = clearCode + (+i) + shift
        while (cryptCode > 122) {
          cryptCode -= 26
        }
      } 

      cryptText += String.fromCharCode(cryptCode)
    } else {
      cryptText += clearText[i]
    }
  }

  let outputArr = []
  let messageLength = Math.ceil(clearText.length / 4)
  for (let i = 0; i < 5; i++) {
    outputArr.push(cryptText.slice(i * messageLength, i * messageLength + messageLength))
  }

  console.log(outputArr)
  return outputArr
}


function demovingShift ( cryptMessages, shift ) {
  const alpha = /[a-zA-Z]/
  let cryptText = cryptMessages.join('')
  let clearText = ''
  // compute decrypted ascii code
  for (let i in cryptText) {
    // if the character is a letter
    if (alpha.test(cryptText[i])) {
      const cryptCode = cryptText.charCodeAt(i)
      let clearCode
      if (cryptCode >= 65 && cryptCode <= 90) {
        // if the character is capital letter
        clearCode = cryptCode - (+i) - shift
        while (clearCode < 65) {
          clearCode += 26
        }
      } else if (cryptCode >= 97 && cryptCode <= 122) {
        // if the character is lowercase letter
        clearCode = cryptCode - (+i) - shift
        while (clearCode < 97) {
          clearCode += 26
        }

      }
      clearText += String.fromCharCode(clearCode)
      // if the character is not a letter
    } else {
      clearText += cryptText[i]
    }
  }
  console.log(clearText)
  return clearText
}


movingShift("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 1)
// demovingShift(
// , 1)
  

