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

//Refractor 2
const sentencify = (words) => words.join(' ').charAt(0).toUpperCase() + words.join(' ').slice(1) + '.'
