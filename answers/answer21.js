function add() {
    let newArr = []
    let increase = 1
    if(arguments === []){
      return 0
    }else{
    for(const char of arguments){
  
      newArr.push(char/increase)
      increase ++
      }
    }
    return Math.round(newArr.reduce((a, b) => a + b, 0))
  }