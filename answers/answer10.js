function solve(s){
    let capsArr = []
    let lowerArr = []
    let numsArr = []
    let symbolArr = []
    let result = []
   for (let i = 0; i < s.length; i++){
    if(s.charAt(i) !== s.charAt(i).toLowerCase()){
      capsArr.push(s.charAt(i))
    }else if(s.charAt(i) !== s.charAt(i).toUpperCase()){
      lowerArr.push(s.charAt(i))
    }else if(s.charAt(i) == parseInt(s.charAt(i))){
      numsArr.push(s.charAt(i))
    }else{
      symbolArr.push(s.charAt(i))
    }
   }
    return result = [capsArr.length, lowerArr.length, numsArr.length, symbolArr.length]
}