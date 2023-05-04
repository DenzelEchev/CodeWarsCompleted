function lastDigit(n, d){
    let numArr = []
    let arr = n.toString().split('')
    arr.map(num => numArr.push(+num))
    if (d > arr.length){
      return numArr
    }else if( d <= 0){
      return []
    }else{
      return numArr.slice(-d)
    }
  }