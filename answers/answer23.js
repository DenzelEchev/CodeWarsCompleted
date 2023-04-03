function insertDash(num) {
    let newArr = num.toString().split('')
    let finalArr = []
    newArr.map((e,i) =>{
      if(e == 0 || e%2 == 0){
        finalArr.push(e)
      }else if((newArr[i+1]) == 0 || (newArr[i+1])%2 == 0){
        finalArr.push(e)
      }else if (i == newArr.length-1){
        finalArr.push(e)
      }else{
        finalArr.push(`${e}-`)
      }
    })
    return finalArr.join('')
  }