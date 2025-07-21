//1st attempt
function sentencify(words) {
    let sentence = words.join(' ')
    const sentence2 = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
    return sentence2
}

//Refractor
function sentencify(words) {
  let sentence = words.join(' ')
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
}
