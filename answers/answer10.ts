function solve(s: string | any): [number, number, number, number]{
    let capsArr = 0
    let lowerArr = 0
    let numsArr = 0
    let symbolArr = 0

   for (let i = 0; i < s.length; i++){
    if(s.charAt(i) !== s.charAt(i).toLowerCase()){
      capsArr += 1
    }else if(s.charAt(i) !== s.charAt(i).toUpperCase()){
      lowerArr += 1
    }else if(s.charAt(i) == parseInt(s.charAt(i))){
      numsArr += 1
    }else{
      symbolArr += 1
    }
   }

    return [capsArr, lowerArr, numsArr, symbolArr]
}

solve("*'&ABCDabcde12345")