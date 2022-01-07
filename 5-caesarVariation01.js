function movingShift ( clearText, shift ) {
  // disallow negative shift
  if (shift < 0) return

  // prepare encrypted text
  let cryptText = ''

  const alpha = /[a-zA-Z]/
  // check if individual character is a letter
  for (let i in clearText) {
    if (alpha.test(clearText[i])) {
      // find ascii code of letter
      const clearCode = clearText.charCodeAt(i)
      // determine if capital or lowercase
      if (clearCode >= 65 && clearCode <= 90) {
        // apply shift based on character position and fn parameter
        cryptCode = clearCode + (+i) + shift
        // return shifted code to capital letter range
        while (cryptCode > 90) {
          cryptCode -= 26
        }
      } else if (clearCode >= 97 && clearCode <= 122) {
        // same as above but for lowercase letters
        cryptCode = clearCode + (+i) + shift
        while (cryptCode > 122) {
          cryptCode -= 26
        }
      } 

      // create encrypted string from character codes
      cryptText += String.fromCharCode(cryptCode)
    } else {
      cryptText += clearText[i]
    }
  }

  // split message for 5 runners
  let outputArr = []
  let messageLength = Math.ceil(clearText.length / 5)
  for (let i = 0; i < 5; i++) {
    outputArr.push(cryptText.slice(i * messageLength, i * messageLength + messageLength))
  }

  return outputArr
}


function demovingShift ( cryptMessages, shift ) {
  // disallow negative shift
  if (shift < 0) return

  // build message from runners
  let cryptText = cryptMessages.join('')


  const alpha = /[a-zA-Z]/
  let clearText = ''
  // compute decrypted ascii code for each letter
  for (let i in cryptText) {
    // if the character is a letter
    if (alpha.test(cryptText[i])) {
      // determine ascii code of each encrypted letter
      const cryptCode = cryptText.charCodeAt(i)

      //decode
      let clearCode
      // determine if capital or lowercase
      if (cryptCode >= 65 && cryptCode <= 90) {
        // apply shift based on character position and fn parameter
        clearCode = cryptCode - (+i) - shift
        // return code to ascii character range
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
      //build message from decoded ascii codes
      clearText += String.fromCharCode(clearCode)
    } else {
      // if the character is not a letter
      clearText += cryptText[i]
    }
  }
  
  return clearText
}


movingShift("I should have known that you would have a perfect answer for me!!!", -1)
// demovingShift(
// , 1)
  

