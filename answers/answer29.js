function remove (string) {
    let sepArr = []
    let newArr = string.split(' ')
    newArr.forEach((element, index)=>{
      if(element[element.length-1] === '!' && element[element.length-2] === '!' || element[0] === '!' && element[element.length-1] === '!'){
        sepArr.push(element)
      }else if(element[element.length-1] === '!' || element[0] === '!'){
        
      }else{
        sepArr.push(element)
      }
    })
   return sepArr.join(' ')
  }