function solution(str, ending){
    if(str.slice(str.length = -ending.length) === ending || ending === "") {
      return true
    }else{
      return false
    };
  }