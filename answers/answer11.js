function isOddHeavy(n){
    var oddArr = []
    var evenArr = []
    //splitting the array into two different function
    n.map(number => {
      if(number%2 == 0){
        evenArr.push(number)
        evenArr.sort(function(a, b) {
    return a - b;
  });
      }else if((number%2 !== 0)){
        oddArr.push(number)
        oddArr.sort(function(a, b) {
    return a - b;
  });
  }else{
    
  }
    })
  //comparing the two arrays 
    if(oddArr[0]<=evenArr[evenArr.length-1] || oddArr == 0){
      return false
    }else{
      return true
    }
  }