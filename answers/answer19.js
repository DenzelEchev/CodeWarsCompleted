function strCount(str, letter){  
    let numOfSame = 0
    for(const char of str){
      if(char === letter){
        numOfSame += 1
      }
    }
    return numOfSame
  }