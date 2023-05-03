const array=(string)=> {
    if(string.split(',').length >= 3){
      let arr = string.split(',')
      arr.shift()
      arr.pop()
      return arr.join(' ')
    }else{
      return null
    }
  }