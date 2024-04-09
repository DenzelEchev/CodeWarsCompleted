function solutionString(string: string): string{
    let space = ''
    for (const char of string){
      if(char == char.toUpperCase()){
        space += " " + char
      } else{
        space += char 
      }
    }
    return space
  }

// function solutionString(string: string): string{
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === string.toUpperCase()){
//             string[i] + ' '
//         } else {

//         }

//     }
//     return string
// }
