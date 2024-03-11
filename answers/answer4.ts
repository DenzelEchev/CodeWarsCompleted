// function sentencify(words: [string]): string {
//     let sentence = words.join(' ')
//     return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
//   }

const sentencify = (words: [string]): string => words.join(' ').charAt(0).toUpperCase() + words.join(' ').slice(1) + '.'