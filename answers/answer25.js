function wave(str){
    let completeArr = []
    for(i = 0; i < str.length; i++){
      if(str.substring(i, i+1) !== " "){
        completeArr.push((str.substring(i, i-i.length)+(str.substring(i, i+1).toUpperCase())+(str.substring(i+1))))
    }else{
      
    }
      }
  
    return completeArr
  }