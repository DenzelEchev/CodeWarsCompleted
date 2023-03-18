function solution(string) {
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